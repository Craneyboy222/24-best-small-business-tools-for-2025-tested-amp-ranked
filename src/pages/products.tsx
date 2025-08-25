import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { ProductList, Loader, Error } from '../components';
import { Product } from '../types';
import { ARIA_LABELS } from '../constants/ariaLabels';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/tools')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error message={error.message} />;

  return (
    <>
      <Head>
        <title>Products - Tool App</title>
      </Head>
      <main aria-label={ARIA_LABELS.PRODUCTS_MAIN} className="p-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <ProductList products={products} />
      </main>
    </>
  );
};

export default Products;
