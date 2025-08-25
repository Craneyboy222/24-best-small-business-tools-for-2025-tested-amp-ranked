import { AdminLayout } from '../components/AdminLayout';
import Link from 'next/link';

const AdminPage = () => {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <ul>
        <li><Link href="/admin/users"><a>Manage Users</a></Link></li>
        <li><Link href="/admin/products"><a>Manage Products</a></Link></li>
        <li><Link href="/admin/orders"><a>Manage Orders</a></Link></li>
        <li><Link href="/admin/analytics"><a>View Analytics</a></Link></li>
      </ul>
    </AdminLayout>
  );
};

export default AdminPage;