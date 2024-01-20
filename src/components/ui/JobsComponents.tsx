import { ActionIcon, Button, Paper, Title } from '@mantine/core';
import React from 'react';
import {
  Button as AntButton,
  Col,
  Divider,
  Drawer,
  Image,
  Row,
  Space,
} from 'antd';
import { Bookmark, ChevronRight, X } from 'lucide-react';
import { AiOutlineCheck } from 'react-icons/ai';
import { PiShareFat } from 'react-icons/pi';
import { CiShare1 } from 'react-icons/ci';
import { fallback } from './ui.utils';
import { Link } from 'react-router-dom';
export const ViewAllJobsButton = () => {
  return (
    <Col lg={8} md={24} sm={24} xs={20}>
      <Paper
        p='xl'
        radius='md'
        className='w-full lg:h-56 h-20 bg-slate-100 dark:bg-gray-800 cursor-pointer shadow-md hover:shadow-lg transition-all flex justify-center items-center'
      >
        <Button
          className='bg-slate-200 dark:bg-gray-700 rounded-lg dark:text-zinc-300 text-zinc-600 text-lg'
          rightSection={<ChevronRight />}
          size='xl'
        >
          View All
        </Button>
      </Paper>
    </Col>
  );
};

export const JobDrawer = ({ open, onClose }) => {
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
      style={
        {
          // backgroundColor: isDarkMode ? 'rgb(51 65 85)' : 'white',
        }
      }
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
export const JobTypeTile = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => (
  <Col lg={5} sm={11} xs={11} className='job-type-detail-tile'>
    <h4 className='text-base font-semibold text-slate-600 dark:text-slate-200'>
      {title}
    </h4>
    <p className='text-sm font-semibold text-slate-500 dark:text-slate-300 mt-2'>
      {value}
    </p>
  </Col>
);
export const CompanyTile = () => {
  return (
    <div className='company-tile'>
      <div className='w-full flex flex-col items-start'>
        <div className='flex flex-col justify-start'>
          <Image
            src='error'
            fallback={fallback.image}
            className='w-6 rounded-lg'
          />
          <div className='flex lg:flex-col flex-row justify-between my-2'>
            <div className=''>
              <Link to='/company'>
                <Title
                  order={4}
                  className='text-zinc-700 dark:text-zinc-200 transition-all hover:underline'
                >
                  Company Name
                </Title>
              </Link>
              <Title order={6} className='text-zinc-500 dark:text-zinc-400'>
                Company Location
              </Title>
            </div>
            <div className='flex lg:flex-row flex-col lg:my-2'>
              <Button
                className='bg-slate-200 dark:bg-slate-500 rounded-lg dark:text-zinc-300 text-zinc-600 text-xs m-1 ml-0 lg:mr-2'
                size='sm'
                rightSection={
                  <CiShare1
                    className='text-slate-800 dark:text-slate-200'
                    size={18}
                  />
                }
              >
                Website
              </Button>
              <TileFollowButton followed={false} />
            </div>
          </div>
        </div>
      </div>
      <div className='company-tile-overview-container'>
        <h4 className='text-lg text-slate-800 dark:text-slate-100 tracking-wide'>
          About the company
        </h4>
        <p className='text-sm text-slate-600 dark:text-slate-100 tracking-wide mt-2 text-justify'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          distinctio cumque vero iure eius quae nemo, quia at maiores quos.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis odit
          facere deserunt obcaecati reprehenderit beatae eius nulla molestias
          sint provident praesentium voluptas, consequuntur laborum
          necessitatibus quod eaque magnam error laboriosam sequi sapiente earum
          suscipit corporis. Fuga recusandae architecto ut aperiam.
        </p>
      </div>
    </div>
  );
};

export const JobMainTile = () => {
  return (
    <div className='job-main-title-container'>
      <div className='job-title-container'>
        <p className='text-xl text-slate-800 dark:text-slate-100 font-semibold tracking-wide'>
          Job Title
        </p>
        <div className='flex flex-row space-x-2 justify-start items-center'>
          <span className='text-sm text-slate-500 dark:text-slate-200 tracking-wide'>
            Job Location
          </span>
        </div>
        <span className='text-sm text-slate-500 dark:text-slate-200 tracking-wide'>
          Posted 3 days ago
        </span>
      </div>
      <div className='job-detail-buttons-container'>
        <Space direction='vertical' className='w-full justify-end'>
          <Space>
            <Button
              className='bg-slate-200 dark:bg-slate-500 rounded-lg dark:text-zinc-300 text-zinc-600 text-xs'
              leftSection={
                <Bookmark
                  className='text-slate-500 dark:text-slate-200'
                  size={18}
                />
              }
            >
              Save
            </Button>
            <Button
              className='bg-slate-200 dark:bg-slate-500 rounded-lg dark:text-zinc-300 text-zinc-600 text-xs'
              leftSection={
                <PiShareFat
                  className='text-slate-500 dark:text-slate-200'
                  size={19}
                />
              }
            >
              Share
            </Button>
          </Space>
          <div className='w-full flex justify-center space-x-2'>
            <Button className='bg-slate-900 dark:bg-slate-100 rounded-lg dark:text-slate-900 text-white text-xs w-full tracking-wide'>
              Apply Now
            </Button>
            <AntButton
              icon={
                <CiShare1
                  className='text-slate-800 dark:text-slate-200'
                  size={24}
                />
              }
              type='text'
              className='dark:text-zinc-300 text-zinc-600 m-auto'
            />
          </div>
        </Space>
      </div>
    </div>
  );
};

export const TileFollowButton = ({ followed }) => {
  return (
    <>
      {followed ? (
        <ActionIcon
          variant='default'
          size='lg'
          className='bg-slate-900 rounded-lg text-white text-xs m-1 ml-0'
        >
          <AiOutlineCheck className='' />
        </ActionIcon>
      ) : (
        <Button
          className='bg-slate-900 dark:bg-slate-100 rounded-lg dark:text-slate-900 text-white text-xs tracking-wide m-1 ml-0'
          size='sm'
        >
          Follow
        </Button>
      )}
    </>
  );
};
