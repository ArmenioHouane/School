"use client";
import React from 'react';
import { FiChevronDown, FiChevronUp, FiHome, FiBook, FiUsers, FiFileText, FiClipboard, FiCalendar, FiUser, FiSettings, FiMessageCircle, FiHelpCircle } from 'react-icons/fi';
import { CiBank } from "react-icons/ci";
import { RiBankCardLine } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import Link from 'next/link';

interface SidebarItemProps {
  itemId: string;
  title: string;
  icon: React.ReactNode;
  isCollapsed: boolean;
  toggleItemCollapse: (itemId: string) => void;
  isSidebarCollapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  itemId,
  title,
  icon,
  isCollapsed,
  toggleItemCollapse,
  isSidebarCollapsed,
}) => {
  const dashboardSubItems = [
    { title: 'Home', icon: <FiHome />, link: '/admin/home' },
    { title: 'Cursos', icon: <FiBook />, link: '/admin/cursos' },
    { title: 'Alunos', icon: <FiUsers />, link: '/admin/alunos' },
    { title: 'Notas', icon: <FiFileText />, link: '/admin/notas' },
    { title: 'Quiz', icon: <FiClipboard />, link: '/admin/quiz' },
    { title: 'Calendário', icon: <FiCalendar />, link: '/admin/calendario' },
  ];

  const relatoriosSubItems = [
    { title: 'Perfil', icon: <FiUser />, link: '/relatorios/perfil' },
    { title: 'Configurações', icon: <FiSettings />, link: '/relatorios/configuracoes' },
    { title: 'Chat', icon: <FiMessageCircle />, link: '/relatorios/chat' },
    { title: 'FAQ', icon: <FiHelpCircle />, link: '/relatorios/faq' },
  ];
  const definicoesSubItems = [
    { title: 'Finanças', icon: <CiBank />, link: '/definicoes/financas' },
    { title: 'Pagamento', icon: <RiBankCardLine />, link: '/definicoes/pagamento' },
    { title: 'Conta', icon: <MdOutlineManageAccounts />, link: '/definicoes/conta' },
    { title: 'Redefinir Senha', icon: <MdOutlinePassword />, link: '/definicoes/redefinir-senha' },
  ];


  const subItems = itemId === '1' ? dashboardSubItems : 
                   itemId === '2' ? relatoriosSubItems : 
                   itemId === '3' ? definicoesSubItems : [];

  return (
    <div className="border-b border-gray-700">
      <div
        className={`p-4 cursor-pointer flex items-center ${isSidebarCollapsed ? 'justify-center' : 'justify-between'}`}
        onClick={() => {
          if (!isSidebarCollapsed) {
            toggleItemCollapse(itemId);
          }
        }}
      >
        {icon}
        {!isSidebarCollapsed && <span className="ml-4 ">{title}</span>}
        {!isSidebarCollapsed && (
          <span className="ml-auto">
            {isCollapsed ? <FiChevronDown size={20} /> : <FiChevronUp size={20} />}
          </span>
        )}
      </div>
      {!isCollapsed && !isSidebarCollapsed && (
        <div className="pl-8 pr-4 py-2  ">
          {subItems.map((subItem, index) => (
            <Link href={subItem.link} key={index} className="flex  items-center py-2">
              {subItem.icon}
              <span className="ml-4  hover:text-blue-400">{subItem.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
