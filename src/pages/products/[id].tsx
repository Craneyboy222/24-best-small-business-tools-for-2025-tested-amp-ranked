import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';
import { ProductDetail, Loader, Error } from '../../components';
import { Product } from '../../types';
import { ARIA_LABELS } from '../../constants/ariaLabels';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    axios.get(`/api/tools/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <Error message={error.message} />;

  return (
    <>
      <Head>
        <title>{product?.name ?? 'Product Detail'} - Tool App</title>
      </Head>
      <main aria-label={ARIA_LABELS.PRODUCT_DETAIL_MAIN} className="p-4">
        {product && <ProductDetail product={product} />}
      </main>
    </>
  );
};

export default ProductDetailPage;
