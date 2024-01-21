import { Badge, Col, Row, Segmented } from 'antd';
import {
  UnorderedListOutlined,
  CheckOutlined,
  FormOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import { SegmentedLabeledOption, SegmentedValue } from 'antd/es/segmented';
import React, { useState } from 'react';
import MiniApplicationCard, {
  MiniApplicationCardProps,
} from '@/components/Applications/MiniApplicationCard';

const Application: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState('');
  const applications: MiniApplicationCardProps[] = [
    {
      status: 'accepted',
      job: {
        image: 'error',
        title: 'Best forests to visit in North America',
        category: 'nature',
      },
    },
    {
      status: 'pending',
      job: {
        image: 'error',
        title: 'Best forests to visit in North America',
        category: 'nature',
      },
    },
    {
      status: 'pending',
      job: {
        image: 'error',
        title: 'Best forests to visit in North America',
        category: 'nature',
      },
    },
    {
      status: 'pending',
      job: {
        image: 'error',
        title: 'Best forests to visit in North America',
        category: 'nature',
      },
    },
    {
      status: 'draft',
      job: {
        image: 'error',
        title: 'Best forests to visit in North America',
        category: 'nature',
      },
    },
    {
      status: 'accepted',
      job: {
        image: 'error',
        title: 'Best forests to visit in North America',
        category: 'nature',
      },
    },
  ];
  const getCount = (status: string): number => {
    return applications.filter((app) => app.status.includes(status)).length;
  };
  const items: (SegmentedValue | SegmentedLabeledOption)[] = [
    {
      label: (
        <span className='hidden lg:inline'>
          All <Badge count={getCount('')} color='#2a2a25' className='ml-4' />
        </span>
      ),
      value: '',
      icon: <UnorderedListOutlined />,
    },
    {
      label: (
        <span className='hidden lg:inline'>
          Accepted{' '}
          <Badge
            count={getCount('accepted')}
            color='#2a2a25'
            className='ml-4'
          />
        </span>
      ),
      value: 'accepted',
      icon: <CheckOutlined />,
    },
    {
      label: (
        <span className='hidden lg:inline'>
          Pending{' '}
          <Badge count={getCount('pending')} color='#2a2a25' className='ml-4' />
        </span>
      ),
      value: 'pending',
      icon: <ClockCircleOutlined />,
    },
    {
      label: (
        <span className='hidden lg:inline'>
          Draft{' '}
          <Badge count={getCount('draft')} color='#2a2a25' className='ml-4' />
        </span>
      ),
      value: 'draft',
      icon: <FormOutlined />,
    },
  ];
  return (
    <main className='apps-container'>
      <h2 className='text-xl font-semibold tracking-wide text-gray-900 dark:text-slate-100'>
        My Applications
      </h2>
      <Row gutter={[10, 10]} className='mt-6'>
        <Col lg={16} xs={24}>
          <Segmented
            options={items}
            size='large'
            block
            onChange={(option) => setSelectedStatus(option.toString())}
          />
        </Col>
        <Col span={24}>
          <Row gutter={[10, 10]}>
            {applications
              .filter((app) => app.status.includes(selectedStatus))
              .map((item, index) => (
                <MiniApplicationCard {...item} />
              ))}
          </Row>
        </Col>
      </Row>
    </main>
  );
};
export default Application;
