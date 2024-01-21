import { ActionIcon, Paper, Title } from '@mantine/core';
import { Avatar, Col, Row, Space, Button as AntButton } from 'antd';
import { PiShareFat } from 'react-icons/pi';
import { JobDrawer, TileFollowButton } from '../ui/JobsComponents';
import {
  AlarmClockOff,
  Bookmark,
  Building,
  Clock,
  User,
  Calendar,
} from 'lucide-react';
import { JobCardProps } from '../../interface/props.interface';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import { ToastAction } from '@/shad/ui/toast';
import { useToast } from '@/shad/ui/use-toast';

export const CompanyMainTitleCard = () => {
  return (
    <div className='company-main-title-container'>
      <div className='company-main-title'>
        <div className='company-title-container'>
          <Avatar src='error' size={45} shape='square' />
          <div>
            <Title order={4} className='text-gray-900 dark:text-zinc-100'>
              Company Name
            </Title>
            <Title size={12} className='text-gray-700 dark:text-zinc-100'>
              Lorem ipsum dolor sit amet consectetur.
            </Title>
          </div>
        </div>
        <Space>
          <ActionIcon
            variant='default'
            size='lg'
            className='bg-slate-100 rounded-lg text-gray-900 text-xs m-1 ml-0'
          >
            <PiShareFat className='' />
          </ActionIcon>
          <TileFollowButton followed={false} />
        </Space>
      </div>
      <CompanyMiniDetail />
    </div>
  );
};
export const CompanyMiniDetail = () => {
  return (
    <Row gutter={[10, 10]} className='w-full mt-4'>
      <Col lg={5} sm={11} xs={11} className='company-mini-detail-tile'>
        <h4 className='text-sm font-semibold text-gray-500 dark:text-slate-200'>
          Website
        </h4>
        <p className='text-xs tracking-wide text-blue-600 dark:text-slate-400 mt-1 underline'>
          <a href='https://salmancodes.me'>salman.com</a>
        </p>
      </Col>
      <Col lg={5} sm={11} xs={11} className='company-mini-detail-tile'>
        <h4 className='text-sm font-semibold text-gray-500 dark:text-slate-200'>
          Location
        </h4>
        <p className='text-xs font-semibold text-gray-700 dark:text-slate-400 mt-1'>
          <a href=''>Bethel, Peach cafe</a>
        </p>
      </Col>
      <Col lg={5} sm={11} xs={11} className='company-mini-detail-tile'>
        <h4 className='text-sm font-semibold text-gray-500 dark:text-slate-200'>
          Company Size
        </h4>
        <p className='text-xs font-semibold text-gray-800 dark:text-slate-400 mt-1'>
          10-50 Employees
        </p>
      </Col>
      <Col lg={5} sm={11} xs={11} className='company-mini-detail-tile'>
        <h4 className='text-sm font-semibold text-gray-500 dark:text-slate-200'>
          Company type
        </h4>
        <p className='text-xs font-semibold text-gray-800 dark:text-slate-400 mt-1'>
          Software Engineering
        </p>
      </Col>
    </Row>
  );
};
export const CompanyJobGroup: React.FC = () => {
  const [jobDrawerOpen, setJobDrawerOpen] = useState(false);
  const jobs = [
    {
      image: 'error',
      title: 'Best forests to visit in North America',
      category: 'nature',
    },
    {
      image: 'error',
      title: 'Hawaii beaches review: better than you think',
      category: 'beach',
    },
    {
      image: 'error',
      title: 'Mountains at night: 12 best locations to enjoy the view',
      category: 'nature',
    },
  ];
  const onClick = () => {
    setJobDrawerOpen(true);
  };
  const jobCards = jobs.map((item, index) => (
    <CompanyJobCard key={index} {...item} onClick={onClick} />
  ));

  return (
    <div className='popular-container'>
      <div className='job-list-container'>
        <Row gutter={[14, 14]}>{jobCards}</Row>
      </div>
      <JobDrawer open={jobDrawerOpen} onClose={() => setJobDrawerOpen(false)} />
    </div>
  );
};
export function CompanyJobCard({
  image,
  title,
  category,
  onClick,
}: JobCardProps) {
  const { toast } = useToast();
  return (
    <Col span={24} onClick={onClick}>
      <Paper
        p='md'
        radius='md'
        className='w-full bg-white dark:bg-gray-800 cursor-pointer shadow-md hover:shadow-lg transition-all'
      >
        <div className='w-full flex flex-row justify-start items-start space-x-2'>
          <Avatar src={image} size={60} shape='square' />
          <div>
            <Title
              order={5}
              className='text-zinc-700 dark:text-zinc-200 transition-all hover:underline break-words '
            >
              Job Title
            </Title>
            <div className='flex flex-row space-x-2 justify-start items-center'>
              <div className='flex flex-row items-center space-x-2 text-xs text-zinc-500 dark:text-zinc-400 text-semibold'>
                <Clock size={12} className='mr-2' /> Fulltime
              </div>
              <span className='text-xl text-zinc-500 dark:text-zinc-400 text-semibold flex items-center pb-2'>
                .
              </span>
              <div className=' flex flex-row items-center space-x-2 text-xs text-zinc-500 dark:text-zinc-400 text-semibold'>
                <Building size={12} className='mr-2' /> Remote
              </div>
              <span className='text-xl text-zinc-500 dark:text-zinc-400 text-semibold flex items-center pb-2'>
                .
              </span>
              <div className=' flex flex-row items-center space-x-2 text-xs text-zinc-500 dark:text-zinc-400 text-semibold'>
                <User size={12} className='mr-2' /> Entry-level
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-row justify-between items-center'>
          <div className='py-1 rounded-md text-zinc-400 text-xs flex flex-row items-center'>
            <Calendar size={12} className='mr-2' /> 3 Days ago .
            <AlarmClockOff size={12} className='mx-2' /> 10 Days left
          </div>
          <AntButton
            onClick={(e) => {
              e.stopPropagation();
              toast({
                title: 'Job Post Saved',
                description: 'Job Title',
                duration: 2000,
                action: (
                  <ToastAction altText='Goto saved to undo'>Undo</ToastAction>
                ),
              });
            }}
            icon={<Bookmark className='text-gray-900 dark:text-gray-200' />}
            shape='circle'
            type='text'
          />
        </div>
      </Paper>
    </Col>
  );
}
export const MiniCompanyCard = () => {
  const navigate = useNavigate();
  return (
    <div
      className='mini-company-card'
      onClick={() => navigate(`${ROUTES.COMPANY}`)}
    >
      <div>
        <p className='font-semibold text-gray-600 text-sm'>Company Name</p>
        <p className='text-gray-500 text-xs'>Company location</p>
      </div>
      <Avatar src='error' size={45} shape='square' />
    </div>
  );
};
export const CompanyMap = () => (
  <iframe
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.524673440446!2d38.71260970830917!3d9.028950106777168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b861094acc83d%3A0x32caf363bfaa6c7a!2sAmanuel%20Mental%20Hospital!5e0!3m2!1sen!2set!4v1705769286664!5m2!1sen!2set'
    width='100%'
    height='300'
    loading='lazy'
  ></iframe>
);
export const StickyCompanyHeader = ({ visible }) => {
  return (
    <div
      className={`w-full sticky z-30 transition-all p-0 overflow-x-hidden overflow-y-visible pb-3 + ${
        visible ? 'top-14' : 'opacity-0'
      }`}
    >
      <div className='company-main-title shadow-md p-3 bg-opacity-50 backdrop-filter backdrop-blur-lg'>
        <div className='company-title-container'>
          <Avatar src='error' size={45} shape='square' />
          <div>
            <Title order={4} className='text-gray-900 dark:text-zinc-100'>
              Company Name
            </Title>
            <Title size={12} className='text-gray-700 dark:text-zinc-100'>
              Lorem ipsum dolor sit amet consectetur.
            </Title>
          </div>
        </div>
        <Space>
          <ActionIcon
            variant='default'
            size='lg'
            className='bg-slate-100 rounded-lg text-gray-900 text-xs m-1 ml-0'
          >
            <PiShareFat className='' />
          </ActionIcon>
          <TileFollowButton followed={false} />
        </Space>
      </div>
    </div>
  );
};
