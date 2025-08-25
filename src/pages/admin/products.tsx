import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api/admin';
import { ProductList } from '../../components/ProductList';
import { AdminLayout } from '../../components/AdminLayout';
import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';

const AdminProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
      <ProductList products={products} />
    </AdminLayout>
  );
};

export default AdminProductsPage;