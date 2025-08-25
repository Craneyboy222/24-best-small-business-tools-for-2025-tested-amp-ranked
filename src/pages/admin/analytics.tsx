import { useEffect, useState } from 'react';
import { fetchAnalyticsData } from '../../api/admin';
import { AnalyticsDashboard } from '../../components/AnalyticsDashboard';
import { AdminLayout } from '../../components/AdminLayout';
import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';

const AdminAnalyticsPage = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnalyticsData()
      .then(data => {
        setAnalyticsData(data);
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
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <AnalyticsDashboard data={analyticsData} />
    </AdminLayout>
  );
};

export default AdminAnalyticsPage;