import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 shadow-md">
      <ul className="space-y-2 p-4">
        <li><a href="#" className="block hover:bg-gray-200 p-2 rounded">Dashboard</a></li>
        <li><a href="#" className="block hover:bg-gray-200 p-2 rounded">Tools</a></li>
        <li><a href="#" className="block hover:bg-gray-200 p-2 rounded">Users</a></li>
        <li><a href="#" className="block hover:bg-gray-200 p-2 rounded">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
