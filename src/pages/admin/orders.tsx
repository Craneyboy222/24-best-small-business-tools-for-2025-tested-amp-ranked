import { useEffect, useState } from 'react';
import { fetchOrders } from '../../api/admin';
import { OrderList } from '../../components/OrderList';
import { AdminLayout } from '../../components/AdminLayout';
import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders()
      .then(data => {
        setOrders(data);
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
      <h1 className="text-2xl font-bold mb-4">Manage Orders</h1>
      <OrderList orders={orders} />
    </AdminLayout>
  );
};

export default AdminOrdersPage;