import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchOrderDetail } from '../../api/orders';
import { OrderDetail } from '../../components/OrderDetail';
import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';

const OrderDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetchOrderDetail(id)
        .then(data => {
          setOrder(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return <OrderDetail order={order} />;
};

export default OrderDetailPage;