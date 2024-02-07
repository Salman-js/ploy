import { Divider, Row } from 'antd';
import { useSelector } from 'react-redux';
import {
  JobMainTile,
  JobTypeTile,
  StickyJobMainTile,
} from '../../components/Jobs/mini.components.job';
import { RootState } from '@/store/store';
import { useEffect, useRef, useState } from 'react';
import { CompanyJobGroup } from '@/components/Company/company.components';

export const Job = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const [showFixedDiv, setShowFixedDiv] = useState(false);
  const scrollableDivRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollableDivRef.current) {
        setShowFixedDiv(scrollableDivRef.current.scrollTop > 180);
      }
    };

    if (scrollableDivRef.current) {
      scrollableDivRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollableDivRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        scrollableDivRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  return (
    <div className='job-container' ref={scrollableDivRef}>
      <StickyJobMainTile visible={showFixedDiv} />
      <div className='job-detail-container'>
        <div className='job-detail-main'>
          <JobMainTile />
          <hr className='mt-3 mb-2 border-gray-300 dark:border-gray-600' />
          <Row gutter={[16, 16]} className='p-2'>
            <JobTypeTile title='Experience' value='3 years' />
            <JobTypeTile title='Level' value='Intermediate' />
            <JobTypeTile title='Job type' value='Full-time' />
            <JobTypeTile title='Offer Salary' value='$3000/month' />
          </Row>
          <hr className='mt-3 mb-2 border-gray-300 dark:border-gray-600' />
          <div className='skills-container'>
            <h4 className='text-xl text-slate-800 dark:text-slate-100 tracking-wide'>
              Skills
            </h4>
            <div className='w-full flex flex-row justify-start space-x-4 mt-4'>
              <div className='px-2 py-1 rounded-lg bg-slate-200 dark:bg-gray-700 text-base text-gray-900 dark:text-sky-300 text-semibold'>
                ReactJs
              </div>
              <div className='px-2 py-1 rounded-lg bg-slate-200 dark:bg-gray-700 text-base text-gray-900 dark:text-sky-300 text-semibold'>
                NextJs
              </div>
              <div className='px-2 py-1 rounded-lg bg-slate-200 dark:bg-gray-700 text-base text-gray-900 dark:text-sky-300 text-semibold'>
                NestJs
              </div>
            </div>
          </div>
          <hr className='mt-3 mb-2 border-gray-300 dark:border-gray-600' />
          <div className='w-full flex lg:flex-row flex-col lg:space-x-2 sm:space-y-2'>
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
            <hr className='border-gray-300 dark:border-gray-600 my-2' />
            <div className='similar-jobs-container'>
              <h4 className='text-xl text-slate-800 dark:text-slate-100 tracking-wide'>
                Similar Jobs
              </h4>
              <CompanyJobGroup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
