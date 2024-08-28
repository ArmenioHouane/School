import { useState } from 'react';

export const useSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [collapsedItems, setCollapsedItems] = useState<{ [key: string]: boolean }>({});

  const toggleSidebar = () => {
    if (!isCollapsed) {
      // Colapsa todos os itens quando o sidebar é colapsado
      const allItemsCollapsed = Object.keys(collapsedItems).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {} as { [key: string]: boolean });
      setCollapsedItems(allItemsCollapsed);
    }
    setIsCollapsed(!isCollapsed);
  };

  const toggleItemCollapse = (itemId: string) => {
    setCollapsedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return { isCollapsed, toggleSidebar, collapsedItems, toggleItemCollapse };
};
