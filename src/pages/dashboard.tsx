import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { DashboardCard, Loader, Error } from '../components';
import { DashboardData } from '../types';
import { ARIA_LABELS } from '../constants/ariaLabels';

const Dashboard = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/dashboard')
      .then(response => {
        setData(response.data);
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
        <title>Dashboard - Tool App</title>
      </Head>
      <main aria-label={ARIA_LABELS.DASHBOARD_MAIN} className="p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data?.cards.map(card => (
            <DashboardCard key={card.id} data={card} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
