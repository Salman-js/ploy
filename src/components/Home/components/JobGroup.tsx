import React, { useState } from 'react';
import { Row } from 'antd';
import { JobCard } from '../../ui/JobCard';
import { JobDrawer, ViewAllJobsButton } from '../../ui/JobsComponents';
import { Header1 } from './simpleComponents';

const JobGroup: React.FC = () => {
  const [jobDrawerOpen, setJobDrawerOpen] = useState(false);
  const jobs = [
    {
      image:
        'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Best forests to visit in North America',
      category: 'nature',
    },
    {
      image:
        'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Hawaii beaches review: better than you think',
      category: 'beach',
    },
    {
      image:
        'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Mountains at night: 12 best locations to enjoy the view',
      category: 'nature',
    },
    {
      image:
        'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Mountains at night: 12 best locations to enjoy the view',
      category: 'nature',
    },
    {
      image:
        'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Hawaii beaches review: better than you think',
      category: 'beach',
    },
    {
      image:
        'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Hawaii beaches review: better than you think',
      category: 'beach',
    },
    {
      image:
        'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Hawaii beaches review: better than you think',
      category: 'beach',
    },
  ];
  const onClick = () => {
    setJobDrawerOpen(true);
  };
  const jobCards = jobs.map((item, index) => (
    <JobCard key={index} {...item} onClick={onClick} />
  ));

  return (
    <div className='popular-container'>
      <Header1 text='Jobs for you' />
      <div className='job-list-container'>
        <Row gutter={[14, 14]}>
          {jobCards}
          <ViewAllJobsButton />
        </Row>
      </div>
      <JobDrawer open={jobDrawerOpen} onClose={() => setJobDrawerOpen(false)} />
    </div>
  );
};

export default JobGroup;
