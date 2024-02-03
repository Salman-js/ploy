import { DeleteOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Title } from '@mantine/core';
import { Avatar, Badge, Button, Dropdown, MenuProps } from 'antd';

export function NotificationItem({ isNew }: { isNew: boolean }) {
  const items: MenuProps['items'] = [
    {
      label: 'Delete',
      danger: true,
      icon: <DeleteOutlined />,
      key: 'delete',
    },
  ];
  return (
    <>
      {isNew ? (
        <Badge.Ribbon
          text={isNew ? 'New' : null}
          color='#293145'
          className='text-xs text-zinc-700 dark:text-zinc-200 font-bold'
        >
          <div className='notification-item-container'>
            <Avatar src='error' size={45} shape='square' />
            <div className='w-full'>
              <div className='w-full flex flex-row justify-between pr-8'>
                <Title
                  order={6}
                  className='text-zinc-700 dark:text-zinc-200 font-bold'
                >
                  Company Name
                </Title>
                <div>
                  <span className='text-sm text-gray-500 dark:text-gray-300 opacity-50 font-light'>
                    3 hours ago
                  </span>
                </div>
              </div>
              <div className='w-full flex flex-row justify-between'>
                <div>
                  <span className='text-zinc-700 dark:text-zinc-200 text-sm font-semibold'>
                    New job:
                    <span className='text-zinc-700 dark:text-zinc-200 text-sm font-normal ml-1'>
                      Job post
                    </span>
                  </span>
                </div>
                <Dropdown
                  menu={{ items }}
                  trigger={['click']}
                  placement='bottomRight'
                >
                  <Button
                    icon={<EllipsisOutlined size={15} />}
                    type='text'
                    shape='circle'
                    className='btm-nav-btn'
                    size='small'
                    onClick={(e) => e.stopPropagation()}
                  />
                </Dropdown>
              </div>
            </div>
          </div>
        </Badge.Ribbon>
      ) : (
        <div className='notification-item-container'>
          <Avatar src='error' size={45} shape='square' />
          <div className='w-full'>
            <div className='w-full flex flex-row justify-between'>
              <Title
                order={6}
                className='text-zinc-700 dark:text-zinc-200 font-bold'
              >
                Company Name
              </Title>
              <div>
                <span className='text-sm text-gray-500 dark:text-gray-300 opacity-50 font-light'>
                  3 hours ago
                </span>
              </div>
            </div>
            <div className='w-full flex flex-row justify-between'>
              <div>
                <span className='text-zinc-700 dark:text-zinc-200 text-sm font-semibold'>
                  New job:
                  <span className='text-zinc-700 dark:text-zinc-200 text-sm font-normal ml-1'>
                    Job post
                  </span>
                </span>
              </div>
              <Dropdown
                menu={{ items }}
                trigger={['click']}
                placement='bottomRight'
              >
                <Button
                  icon={<EllipsisOutlined size={15} />}
                  type='text'
                  shape='circle'
                  className='btm-nav-btn'
                  size='small'
                  onClick={(e) => e.stopPropagation()}
                />
              </Dropdown>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
