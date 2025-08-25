import { useEffect, useState } from 'react';
import { fetchUsers } from '../../api/admin';
import { UserList } from '../../components/UserList';
import { AdminLayout } from '../../components/AdminLayout';
import { Loading } from '../../components/Loading';
import { Error } from '../../components/Error';

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then(data => {
        setUsers(data);
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
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <UserList users={users} />
    </AdminLayout>
  );
};

export default AdminUsersPage;