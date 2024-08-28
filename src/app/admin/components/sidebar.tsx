// components/Sidebar.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-700 text-white w-64 h-full p-4 sticky top-0">
      <div className="mb-8">
        <Link href="/" className="text-xl font-bold">Dashboard</Link>
      </div>
      <ul>
        <li className="mb-4">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className="mb-4">
          <Link href="/profile">Profile</Link>
        </li>
        <li className="mb-4">
          <Link href="/settings">Settings</Link>
        </li>
        <li>
          <Link href="/logout">Logout</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
