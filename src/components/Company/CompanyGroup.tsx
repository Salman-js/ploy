import React from 'react';
import { Header1 } from '../Home/simpleComponents';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CompanyCard } from './CompanyCard';

interface CompanyGroupProps {
  group: 'popular' | 'suggested';
}
const CompanyGroup: React.FC<CompanyGroupProps> = ({ group }) => {
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
  const slides = companies.map((item, index) => (
    <CompanyCard
      key={index}
      {...item}
      group={group}
      onClick={() => console.log(index)}
    />
  ));
  return (
    <div>
      <Header1
        text={group === 'popular' ? 'Popular Companies' : 'Suggested For You'}
      />
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=''
        containerClass='popular-carousel-container'
        dotListClass=''
        draggable
        focusOnSelect={false}
        infinite={false}
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=''
        slidesToSlide={1}
        swipeable
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default CompanyGroup;
