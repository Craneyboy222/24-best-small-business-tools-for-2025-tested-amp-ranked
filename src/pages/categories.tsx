import { useEffect, useState } from 'react';
import { fetchCategories } from '../api/categories';
import { CategoryList } from '../components/CategoryList';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories()
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return <CategoryList categories={categories} />;
};

export default CategoriesPage;