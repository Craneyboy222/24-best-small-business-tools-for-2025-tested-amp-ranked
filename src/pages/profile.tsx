import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { ProfileCard, Loader, Error } from '../components';
import { UserProfile } from '../types';
import { ARIA_LABELS } from '../constants/ariaLabels';

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/users/profile')
      .then(response => {
        setProfile(response.data);
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
        <title>Profile - Tool App</title>
      </Head>
      <main aria-label={ARIA_LABELS.PROFILE_MAIN} className="p-4">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        {profile && <ProfileCard profile={profile} />}
      </main>
    </>
  );
};

export default Profile;
