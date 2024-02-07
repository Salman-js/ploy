import { Avatar, List } from 'antd';
import React from 'react';
import { PloyButton } from '../ui/ui.components';
import { GiPencil } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/router/constants';

type expProps = {
  experience?: string;
};

const ExperienceItem: React.FC<expProps> = () => {
  return (
    <List.Item
      actions={[
        <PloyButton
          shape='circle'
          icon={<GiPencil size={18} className='-mb-1' />}
        />,
      ]}
    >
      <List.Item.Meta
        avatar={
          <Avatar src='error' className='my-auto' shape='square' size={50} />
        }
        title='Title'
        description={<Link to={ROUTES.COMPANY}>Company</Link>}
      />
      <div>
        <span className='text-gray-900 dark:text-gray-100 text-xs lg:text-sm'>
          Aug 9, 2022 - Present
        </span>
      </div>
    </List.Item>
  );
};
export default ExperienceItem;
