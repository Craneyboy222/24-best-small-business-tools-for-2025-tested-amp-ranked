import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { OrderList, Loader, Error } from '../components';
import { Order } from '../types';
import { ARIA_LABELS } from '../constants/ariaLabels';

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/orders')
      .then(response => {
        setOrders(response.data);
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
        <title>Orders - Tool App</title>
      </Head>
      <main aria-label={ARIA_LABELS.ORDERS_MAIN} className="p-4">
        <h1 className="text-2xl font-bold mb-4">Orders</h1>
        <OrderList orders={orders} />
      </main>
    </>
  );
};

export default Orders;
