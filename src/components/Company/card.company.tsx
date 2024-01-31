import { Paper, Title } from '@mantine/core';
import { Avatar } from 'antd';
import { LayoutDashboard } from 'lucide-react';
import { CardProps } from '../../interface/props.interface';
import { FollowButton } from './follow.button';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/constants';

export function CompanyCard({ image, title, category, group }: CardProps) {
  return (
    <Paper
      p='xl'
      radius='md'
      className='w-64 lg:w-64 md:w-56 sm:w-80 h-44 bg-slate-100 dark:bg-gray-800 cursor-pointer shadow-md hover:shadow-lg transition-all m-2 my-4'
    >
      <div className='w-full flex flex-row justify-between items-start'>
        <Avatar src={image} size={45} shape='square' />
        <div>
          <div className='p-1 rounded-md text-zinc-400 text-xs'>Sector</div>
        </div>
      </div>
      <div className='mt-2'>
        <Link to={`${ROUTES.COMPANY}`}>
          <Title
            order={5}
            className='text-zinc-700 dark:text-zinc-200 transition-all hover:underline'
          >
            Company Name
          </Title>
        </Link>
        <Title size={12} className='text-zinc-500 dark:text-zinc-400 text-xs'>
          Company Location
        </Title>
      </div>
      <div className='w-full flex flex-row justify-between items-center mt-2'>
        <div className='py-1 rounded-md text-zinc-400 text-xs flex flex-row items-center'>
          <LayoutDashboard size={12} className='mr-2' /> 1234 Jobs posted
        </div>
        <FollowButton />
      </div>
    </Paper>
  );
}
