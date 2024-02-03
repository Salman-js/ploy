import { Button, List } from 'antd';
import { NotifItem } from './sidebar.components';
import {
  Briefcase,
  Brush,
  Calculator,
  Code,
  Factory,
  Laptop,
  LayoutDashboard,
} from 'lucide-react';
import { formatThreshold } from '@/utils/format.number';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/router/constants';
export const jobCategories = [
  {
    title: 'Software',
    icon: <Code size={20} className='text-gray-900 dark:text-gray-100' />,
    amount: 243,
  },
  {
    title: 'Information Tech.',
    icon: <Laptop size={20} className='text-gray-900 dark:text-gray-100' />,
    value: 'InfoTech',
    amount: 128,
  },
  {
    title: 'Accounting',
    icon: <Calculator size={20} className='text-gray-900 dark:text-gray-100' />,
    amount: 85,
  },
  {
    title: 'Architecture',
    icon: <Factory size={20} className='text-gray-900 dark:text-gray-100' />,
    amount: 47,
  },
  {
    title: 'Law & Consult.',
    icon: <Briefcase size={20} className='text-gray-900 dark:text-gray-100' />,
    value: 'Law',
    amount: 92,
  },
  {
    title: 'Graphics & Design',
    icon: <Brush size={20} className='text-gray-900 dark:text-gray-100' />,
    value: 'Graphics',
    amount: 75,
  },
  {
    title: 'Other',
    icon: (
      <LayoutDashboard size={20} className='text-gray-900 dark:text-gray-100' />
    ),
    value: '',
    amount: 20985,
  },
];
const Sidebar = () => {
  return (
    <div className='sidebar-content'>
      <div className='sidebar-menu-container'>
        <div className='w-full flex flex-row justify-between items-center'>
          <div>
            <p className='menu-title'>Notifications</p>
          </div>
          <Link to={ROUTES.NOTIFICATIONS}>
            <Button type='link'>View All</Button>
          </Link>
        </div>
        <div className='sidebar-notifications-container'>
          <NotifItem isNew={true} />
          <NotifItem isNew={true} />
          <NotifItem isNew={false} />
        </div>
      </div>
      <div className='sidebar-menu-container'>
        <p className='menu-title'>Categories</p>
        <List
          size='small'
          dataSource={jobCategories}
          renderItem={(item, index) => (
            <List.Item className='cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all'>
              <List.Item.Meta
                avatar={item.icon}
                title={
                  <span className='text-gray-900 dark:text-gray-100'>
                    {item.title}
                  </span>
                }
              />
              <span className='text-gray-900 dark:text-gray-100'>
                {formatThreshold(item.amount)}
              </span>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Sidebar;
