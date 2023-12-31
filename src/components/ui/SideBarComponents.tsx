import { Title } from '@mantine/core';
import React from 'react';
import './ui.css';
import { Avatar, Badge, Button as AntButton } from 'antd';
import { Briefcase, PenSquare } from 'lucide-react';
import { Typography } from '@mui/material';
import useDarkMode from '../../utils/useDarkTheme';

export function NotifItem({ isNew }: { isNew: boolean }) {
  const [darkTheme] = useDarkMode();
  return (
    <>
      {isNew ? (
        <Badge.Ribbon
          text={isNew ? 'New' : null}
          color={darkTheme ? '#97a1ed' : '#f45858'}
          className='text-xs text-zinc-700 dark:text-zinc-200 font-bold'
        >
          <div className='notif-item-container'>
            <Avatar
              src='https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
              size={45}
              shape='square'
            />
            <div>
              <Typography
                variant='subtitle2'
                className='text-zinc-700 dark:text-zinc-200 font-bold'
              >
                Company Name
              </Typography>
              <Typography
                variant='caption'
                className='text-zinc-700 dark:text-zinc-200'
                noWrap={false}
              >
                New job post:
                <Typography
                  variant='caption'
                  className='text-zinc-700 dark:text-zinc-200 font-bold'
                  noWrap={false}
                >
                  Job post
                </Typography>
              </Typography>
            </div>
          </div>
        </Badge.Ribbon>
      ) : (
        <div className='notif-item-container'>
          <Avatar
            src='https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
            size={45}
            shape='square'
          />
          <div>
            <Typography
              variant='subtitle2'
              className='text-zinc-700 dark:text-zinc-200 font-bold'
            >
              Company Name
            </Typography>
            <Typography
              variant='caption'
              className='text-zinc-700 dark:text-zinc-200'
              noWrap={false}
            >
              New job post:
              <Typography
                variant='caption'
                className='text-zinc-700 dark:text-zinc-200 font-bold'
                noWrap={false}
              >
                Job post
              </Typography>
            </Typography>
          </div>
        </div>
      )}
    </>
  );
}

export function SidebarUserCard() {
  return (
    <div className='sidebar-menu-container flex flex-col items-center text-center border border-zinc-300 dark:border-none p-0 mt-4'>
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
      <div className='border-t border-zinc-300 dark:border-slate-700 flex flex-row justify-center space-x-3 items-center mt-3 p-3 text-zinc-600 dark:text-zinc-200 cursor-pointer w-full hover:bg-slate-200 dark:hover:bg-slate-700'>
        <Briefcase size={20} />
        <span className='text-zinc-600 dark:text-zinc-200 text-sm'>
          Applied jobs
        </span>
      </div>
    </div>
  );
}
