import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Sidebar and Navbar with server-side rendering disabled
const DynamicSidebar = dynamic(() => import('./components/sidebar'), {
  ssr: false,
});

const DynamicNavbar = dynamic(() => import('./components/navbar'), {
  ssr: false,
});

export default function AdminDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <DynamicSidebar />
      <div className="flex-1 flex flex-col">
        <DynamicNavbar />
        <main className="flex-1 p-4 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
