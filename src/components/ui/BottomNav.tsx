import { Avatar, Space } from 'antd';
import React, { useState } from 'react';
import { Tooltip, Badge, Button } from 'antd';
import { LayoutDashboard, Inbox, CalendarDays, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
            <Badge count={5}>
              <Button
                icon={<Inbox />}
                type='text'
                shape='circle'
                className='btm-nav-btn'
                size='large'
              />
            </Badge>
          </Tooltip>
          <Tooltip title='Meetings'>
            <Badge count={2}>
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
            <Badge count={2}>
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
          <Tooltip title='You'>
            <Avatar
              src='https://github.com/Salman-js.png'
              size={36}
              shape='circle'
              className='border-2 border-blue-300'
            />
          </Tooltip>
        </Space>
      </div>
    </div>
  );
};

export default BottomNav;
