import { Title } from '@mantine/core';
import { Avatar, Badge, Button as AntButton } from 'antd';
import { Briefcase, PenSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/router/constants';

export function NotifItem({ isNew }: { isNew: boolean }) {
  return (
    <>
      {isNew ? (
        <Badge.Ribbon
          text={isNew ? 'New' : null}
          color='#293145'
          className='text-xs text-zinc-700 dark:text-zinc-200 font-bold'
        >
          <div className='notif-item-container'>
            <Avatar src='error' size={45} shape='square' />
            <div>
              <Title
                order={6}
                className='text-zinc-700 dark:text-zinc-200 font-bold'
              >
                Company Name
              </Title>
              <span className='text-zinc-700 dark:text-zinc-200 text-sm font-semibold'>
                New job:
                <span className='text-zinc-700 dark:text-zinc-200 text-sm font-normal ml-1'>
                  Job post
                </span>
              </span>
            </div>
          </div>
        </Badge.Ribbon>
      ) : (
        <div className='notif-item-container'>
          <Avatar src='error' size={45} shape='square' />
          <div>
            <Title
              order={6}
              className='text-zinc-700 dark:text-zinc-200 font-bold'
            >
              Company Name
            </Title>
            <span className='text-zinc-700 dark:text-zinc-200 text-sm font-semibold'>
              New job:
              <span className='text-zinc-700 dark:text-zinc-200 text-sm font-normal ml-1'>
                Job post
              </span>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export function SidebarUserCard() {
  const navigate = useNavigate();
  return (
    <div className='sidebar-menu-container flex flex-col items-center text-center border border-zinc-300 dark:border-none p-0'>
      <div className='w-full flex flex-row justify-between p-3'>
        <div className='p-3'></div>
        <div className='flex flex-col justify-center'>
          <Avatar
            src='https://github.com/Salman-js.png'
            size={50}
            shape='circle'
            className='border-2 border-blue-300 mx-auto'
          />
          <div className='pt-4'>
            <Title
              order={5}
              className='text-zinc-700 dark:text-zinc-200 transition-all hover:underline'
            >
              Salman Moh.
            </Title>
            <Title
              size={12}
              className='text-zinc-500 dark:text-zinc-400 text-xs'
            >
              Software developer
            </Title>
          </div>
        </div>
        <AntButton
          icon={<PenSquare size={15} />}
          type='text'
          shape='circle'
          className='btm-nav-btn'
          size='small'
        />
      </div>
      <div
        className='border-t border-zinc-300 dark:border-slate-700 flex flex-row justify-center space-x-3 items-center mt-3 p-3 text-zinc-600 dark:text-zinc-200 cursor-pointer w-full hover:bg-slate-200 dark:hover:bg-slate-700 rounded-b-lg'
        onClick={() => navigate(`${ROUTES.APPLICATIONS}?tab=pending`)}
      >
        <Briefcase size={20} />
        <span className='text-zinc-600 dark:text-zinc-200 text-sm'>
          Applied jobs
        </span>
      </div>
    </div>
  );
}
