"use client";
import React from 'react';
import { useSidebar } from '../hooks/useSidebar';
import SidebarItem from "@/app/admin/components/sidebarItem";
import { FiChevronLeft, FiChevronRight, FiHome, FiBarChart2, FiSettings } from 'react-icons/fi';

const Sidebar: React.FC = () => {
  const { isCollapsed, toggleSidebar, collapsedItems, toggleItemCollapse } = useSidebar();

  return (
    <aside className={`dark:bg-gray-800  dark:text-white  ${isCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 flex flex-col`}>
      <div className="p-4 flex justify-end">
        <button onClick={toggleSidebar} className="text-white bg-blue-400 p-1 rounded-lg hover:text-gray-300">
          {isCollapsed ? <FiChevronRight size={24} /> : <FiChevronLeft size={24} />}
        </button>
      </div>
      <nav className="flex-1">
        <SidebarItem
          itemId="1"
          title="Dashboard"
          icon={<FiHome size={24} />}
          isCollapsed={collapsedItems['1']}
          toggleItemCollapse={toggleItemCollapse}
          isSidebarCollapsed={isCollapsed}
        />
        <SidebarItem
          itemId="2"
          title="Relatórios"
          icon={<FiBarChart2 size={24} />}
          isCollapsed={collapsedItems['2']}
          toggleItemCollapse={toggleItemCollapse}
          isSidebarCollapsed={isCollapsed}
        />
        {/* Adicione mais itens conforme necessário */}
        <SidebarItem
        
          itemId="3"
          title="Definicoes"
          icon={<FiSettings size={24} />}
          isCollapsed={collapsedItems['3']}
          toggleItemCollapse={toggleItemCollapse}
          isSidebarCollapsed={isCollapsed}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
