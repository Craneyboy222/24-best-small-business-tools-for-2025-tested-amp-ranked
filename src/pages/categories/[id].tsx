import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchCategoryDetail } from '../../api/categories';
import { CategoryDetail } from '../../components/CategoryDetail';
import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';

const CategoryDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetchCategoryDetail(id)
        .then(data => {
          setCategory(data);
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

  return <CategoryDetail category={category} />;
};

export default CategoryDetailPage;