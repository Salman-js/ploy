import React, { useEffect, useRef, useState } from 'react';
import {
  CompanyJobGroup,
  CompanyMainTitleCard,
  MiniCompanyCard,
  StickyCompanyHeader,
} from '../../components/Company/company.components';
import { Button } from 'antd';

const Company: React.FC = () => {
  const [showFixedDiv, setShowFixedDiv] = useState(false);
  const scrollableDivRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollableDivRef.current) {
        setShowFixedDiv(scrollableDivRef.current.scrollTop > 230);
      }
    };

    if (scrollableDivRef.current) {
      scrollableDivRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollableDivRef.current) {
        scrollableDivRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  return (
    <main className='company-container' ref={scrollableDivRef}>
      <StickyCompanyHeader visible={showFixedDiv} />
      <div className='cover-image-container'>
        <img
          src='https://www.hipi.info/wp-content/uploads/2021/03/Wallpaper-Twitter-Header-1500x500-012.jpg'
          alt=''
          className='w-full'
        />
      </div>
      <div className='company-main'>
        <CompanyMainTitleCard />
        <div className='company-main-detail-container'>
          <div className='company-detail-container'>
            <h4 className='text-xl text-gray-900 dark:text-slate-100 font-semibold tracking-wide mb-4'>
              About Company
            </h4>
            <p className='text-base text-slate-700 dark:text-slate-100 tracking-wide mt-2'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              distinctio cumque vero iure eius quae nemo, quia at maiores quos.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              odit facere deserunt obcaecati reprehenderit beatae eius nulla
              molestias sint provident praesentium voluptas, consequuntur
              laborum necessitatibus quod eaque magnam error laboriosam sequi
              sapiente earum suscipit corporis. Fuga recusandae architecto ut
              aperiam.
            </p>
            <div className='w-full flex flex-row justify-between mt-6'>
              <div>
                <h4 className='text-xl text-gray-900 dark:text-slate-100 font-semibold tracking-wide'>
                  Jobs From Company
                </h4>
              </div>
              <Button type='link'>View All Jobs</Button>
            </div>
            <CompanyJobGroup />
          </div>
          <div className='company-related-detail-container'>
            <h4 className='text-xl text-gray-900 dark:text-slate-100 font-semibold tracking-wide mb-2'>
              Company Stats
            </h4>
            <p className='text-sm font-semibold text-slate-500 dark:text-slate-100 tracking-wide mt-2'>
              <span className='text-base text-gray-700 dark:text-white'>
                245
              </span>{' '}
              Jobs Posted
            </p>
            <p className='text-sm font-semibold text-slate-500 dark:text-slate-100 tracking-wide mt-2'>
              <span className='text-base text-gray-700 dark:text-white'>
                12,875{' '}
              </span>
              Applications received
            </p>

            <h4 className='text-xl text-gray-900 dark:text-slate-100 font-semibold tracking-wide mt-4 mb-2'>
              Similar Companies
            </h4>
            <div className='sidebar-menu-container'>
              <MiniCompanyCard />
              <MiniCompanyCard />
              <MiniCompanyCard />
              <MiniCompanyCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Company;
