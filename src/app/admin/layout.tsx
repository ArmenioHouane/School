import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

// Importa Sidebar e Navbar dinamicamente com server-side rendering desativado
const DynamicSidebar = dynamic(() => import('./components/sidebar'), {
  ssr: false,
});

const DynamicNavbar = dynamic(() => import('./components/navbar'), {
  ssr: false,
});

export default function AdminDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <DynamicSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DynamicNavbar />
        <main className="flex-1 p-4 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
