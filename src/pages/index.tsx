import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { ToolCard, Loader, Error } from '../components';
import { Tool } from '../types';
import { ARIA_LABELS } from '../constants/ariaLabels';

const Home = () => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/tools')
      .then(response => {
        setTools(response.data);
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
        <title>Home - Tool App</title>
      </Head>
      <main aria-label={ARIA_LABELS.HOME_MAIN} className="p-4">
        <h1 className="text-2xl font-bold mb-4">Top Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
