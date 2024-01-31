import { ActionIcon } from '@mantine/core';
import { Divider, Drawer, Row } from 'antd';
import { useSelector } from 'react-redux';
import { CompanyTile, JobMainTile, JobTypeTile } from './mini.components.job';
import { RootState } from '@/store/store';
import { X } from 'lucide-react';

export const JobDrawer = ({ open, onClose }) => {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <Drawer
      placement='bottom'
      onClose={onClose}
      open={open}
      className='job-drawer-modal'
      height={520}
      maskStyle={{
        backdropFilter: 'blur(3px)',
      }}
      style={{
        backgroundColor: theme === 'dark' ? 'rgb(51 65 85)' : 'white',
      }}
      closable={false}
    >
      <ActionIcon
        variant='default'
        size='md'
        className='bg-transparent text-white absolute -top-8 right-3 border-none'
        onClick={onClose}
      >
        <X className='text-white text-xs' />
      </ActionIcon>

      <div className='job-drawer-container'>
        <CompanyTile />
        <div className='drawer-job-detail-container'>
          <div className='drawer-job-detail-main'>
            <JobMainTile />
            <Divider />
            <Row gutter={[16, 16]} className='p-2'>
              <JobTypeTile title='Experience' value='3 years' />
              <JobTypeTile title='Level' value='Intermediate' />
              <JobTypeTile title='Job type' value='Full-time' />
              <JobTypeTile title='Offer Salary' value='$3000/month' />
            </Row>
            <Divider />
            <div className='job-type-overview-container'>
              <h4 className='text-xl text-slate-800 dark:text-slate-100 tracking-wide'>
                Overview
              </h4>
              <p className='text-base text-slate-600 dark:text-slate-100 tracking-wide mt-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas distinctio cumque vero iure eius quae nemo, quia at
                maiores quos. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quis odit facere deserunt obcaecati
                reprehenderit beatae eius nulla molestias sint provident
                praesentium voluptas, consequuntur laborum necessitatibus quod
                eaque magnam error laboriosam sequi sapiente earum suscipit
                corporis. Fuga recusandae architecto ut aperiam.
              </p>
              <p className='text-base text-slate-600 dark:text-slate-100 tracking-wide mt-2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas distinctio cumque vero iure eius quae nemo, quia at
                maiores quos. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Quis odit facere deserunt obcaecati
                reprehenderit beatae eius nulla molestias sint provident
                praesentium voluptas, consequuntur laborum necessitatibus quod
                eaque magnam error laboriosam sequi sapiente earum suscipit
                corporis. Fuga recusandae architecto ut aperiam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};
