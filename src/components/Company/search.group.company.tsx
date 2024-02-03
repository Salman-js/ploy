import React from 'react';
import { Row } from 'antd';
import { SearchCompanyCard } from './search.card.company';

const SearchCompanyGroup: React.FC = () => {
  const companies = [
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
  const companyCards = companies.map((item, index) => (
    <SearchCompanyCard
      key={index}
      {...item}
      onClick={() => console.log(index)}
    />
  ));

  return (
    <div className='search-jobs-container'>
      <div className='job-list-container'>
        <Row gutter={[14, 14]}>{companyCards}</Row>
      </div>
    </div>
  );
};

export default SearchCompanyGroup;
