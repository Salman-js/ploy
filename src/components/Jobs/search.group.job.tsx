import React, { useState } from 'react';
import { Row } from 'antd';
import { JobCard } from './card.job';
import { JobDrawer } from './drawer.job';

const SearchJobGroup: React.FC = () => {
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
    {
      image: 'error',
      title: 'Mountains at night: 12 best locations to enjoy the view',
      category: 'nature',
    },
    {
      image: 'error',
      title: 'Hawaii beaches review: better than you think',
      category: 'beach',
    },
    {
      image: 'error',
      title: 'Hawaii beaches review: better than you think',
      category: 'beach',
    },
    {
      image: 'error',
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
    <div className='search-jobs-container'>
      <div className='job-list-container'>
        <Row gutter={[14, 14]}>{jobCards}</Row>
      </div>
      <JobDrawer open={jobDrawerOpen} onClose={() => setJobDrawerOpen(false)} />
    </div>
  );
};

export default SearchJobGroup;
