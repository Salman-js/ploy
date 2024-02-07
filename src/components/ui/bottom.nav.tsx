import { Avatar, Space, Tooltip, Badge, Button } from 'antd';
import {
  LayoutDashboard,
  Inbox,
  CalendarDays,
  Bell,
  PenSquare,
  Briefcase,
  Search,
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HoverCard, Title } from '@mantine/core';
import { ROUTES } from '@/router/constants';
import ToggleTheme from './toggle.theme';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const isOnHome = path == ROUTES.HOME;
  const isOnSearch = path.includes(ROUTES.SEARCH);
  const isOnApps = path.includes(ROUTES.APPLICATIONS);
  const isOnMeet = path.includes(ROUTES.MEETINGS);
  const isOnNotif = path.includes(ROUTES.NOTIFICATIONS);
  return (
    <div className='btm-nav-container'>
      <div className='btm-nav-main'>
        <Space direction='horizontal' size={15}>
          <Tooltip title='Home'>
            <Button
              icon={<LayoutDashboard />}
              type='text'
              shape='circle'
              className={
                isOnHome
                  ? 'btm-nav-btn bg-slate-300 dark:bg-gray-700'
                  : 'btm-nav-btn'
              }
              size='large'
              onClick={() => navigate(ROUTES.HOME)}
            />
          </Tooltip>
          <div className='border-r dark:border-zinc-200 border-zinc-600 h-6'></div>
          <Tooltip title='Search'>
            <Button
              icon={<Search />}
              type='text'
              shape='circle'
              className={
                isOnSearch
                  ? 'btm-nav-btn bg-slate-300 dark:bg-gray-700'
                  : 'btm-nav-btn'
              }
              size='large'
              onClick={() => navigate(ROUTES.SEARCH)}
            />
          </Tooltip>
          <Tooltip title='Applications'>
            <Badge count={5} color='#293145'>
              <Button
                icon={<Inbox />}
                type='text'
                shape='circle'
                className={
                  isOnApps
                    ? 'btm-nav-btn bg-slate-300 dark:bg-gray-700'
                    : 'btm-nav-btn'
                }
                size='large'
                onClick={() => navigate(ROUTES.APPLICATIONS)}
              />
            </Badge>
          </Tooltip>
          <Tooltip title='Meetings'>
            <Badge count={2} color='#293145'>
              <Button
                icon={<CalendarDays />}
                type='text'
                shape='circle'
                className={
                  isOnMeet
                    ? 'btm-nav-btn bg-slate-300 dark:bg-gray-700'
                    : 'btm-nav-btn'
                }
                size='large'
                onClick={() => navigate(ROUTES.MEETINGS)}
              />
            </Badge>
          </Tooltip>
          <Tooltip title='Notifications'>
            <Badge count={2} color='#293145'>
              <Button
                icon={<Bell />}
                type='text'
                shape='circle'
                className={
                  isOnNotif
                    ? 'btm-nav-btn bg-slate-300 dark:bg-gray-700'
                    : 'btm-nav-btn'
                }
                size='large'
                onClick={() => navigate(ROUTES.NOTIFICATIONS)}
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
            keepMounted
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
              <BottomNavUserCard />
            </HoverCard.Dropdown>
          </HoverCard>
        </Space>
      </div>
    </div>
  );
};

export function BottomNavUserCard() {
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
            <Link to={ROUTES.ME}>
              <Title
                order={5}
                className='text-zinc-700 dark:text-zinc-200 transition-all hover:underline'
              >
                Salman Moh.
              </Title>
            </Link>
            <Title
              size={12}
              className='text-zinc-500 dark:text-zinc-400 text-xs'
            >
              Software developer
            </Title>
          </div>
        </div>
        <Button
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
      <div className='w-full flex flex-row justify-around items-center border-t border-zinc-300 dark:border-slate-700 pt-2'>
        <span className='text-gray-900 dark:text-gray-100 tracking-wide text-sm'>
          Theme
        </span>
        <ToggleTheme />
      </div>
    </div>
  );
}

export default BottomNav;
