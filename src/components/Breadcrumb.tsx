import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            <a href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900">
              {item.label}
            </a>
            {index < items.length - 1 && (
              <ChevronRightIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;