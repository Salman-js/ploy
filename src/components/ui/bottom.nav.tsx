import { Avatar, Space } from 'antd';
import React, { useState } from 'react';
import { Tooltip, Badge, Button } from 'antd';
import { LayoutDashboard, Inbox, CalendarDays, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HoverCard } from '@mantine/core';
import { SidebarUserCard } from './sidebar.components';

const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <div className='btm-nav-container'>
      <div className='btm-nav-main'>
        <Space direction='horizontal' size={15}>
          <Tooltip title='Home'>
            <Button
              icon={<LayoutDashboard />}
              type='text'
              shape='circle'
              className='btm-nav-btn'
              size='large'
              onClick={() => navigate('/')}
            />
          </Tooltip>
          <div className='border-r dark:border-zinc-200 border-zinc-600 h-6'></div>
          <Tooltip title='Applications'>
            <Badge count={5} color='#293145'>
              <Button
                icon={<Inbox />}
                type='text'
                shape='circle'
                className='btm-nav-btn'
                size='large'
                onClick={() => navigate('/applications')}
              />
            </Badge>
          </Tooltip>
          <Tooltip title='Meetings'>
            <Badge count={2} color='#293145'>
              <Button
                icon={<CalendarDays />}
                type='text'
                shape='circle'
                className='btm-nav-btn'
                size='large'
              />
            </Badge>
          </Tooltip>
          <Tooltip title='Notifications'>
            <Badge count={2} color='#293145'>
              <Button
                icon={<Bell />}
                type='text'
                shape='circle'
                className='btm-nav-btn'
                size='large'
              />
            </Badge>
          </Tooltip>
          <div className='border-l dark:border-zinc-200 border-zinc-600 h-6'></div>
          <HoverCard
            width={210}
            position='top'
            radius='md'
            shadow='md'
            withinPortal
            classNames={{
              dropdown: 'dark:bg-gray-800 bg-slate-100 border-none p-0',
            }}
            offset={11}
            openDelay={250}
          >
            <HoverCard.Target>
              <Avatar
                src='https://github.com/Salman-js.png'
                size={36}
                shape='circle'
                className='border-2 border-blue-300 cursor-pointer'
              />
            </HoverCard.Target>
            <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
              <SidebarUserCard />
            </HoverCard.Dropdown>
          </HoverCard>
        </Space>
      </div>
    </div>
  );
};

export default BottomNav;
