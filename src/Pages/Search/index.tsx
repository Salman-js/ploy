import SearchJobGroup from '@/components/Jobs/search.group.job';
import { SegmentedLabeledOption, SegmentedValue } from 'antd/es/segmented';
import { Segmented, Tag } from 'antd';
import { useEffect, useState } from 'react';
import SearchCompanyGroup from '@/components/Company/search.group.company';
import { useLocation } from 'react-router-dom';
import {
  filterPropertiesToString,
  parseQueryString,
} from '@/utils/Search/search.utils';
import { IFilter } from '@/interface/search.interface';
import { CloseOutlined } from '@ant-design/icons';
import MiniFilter from '@/components/Search/mini.filter';

export default function Search() {
  const [selectedType, setSelectedType] = useState('jobs');
  const location = useLocation();
  const [filters, setFilters] = useState<IFilter>(
    parseQueryString(location.search)
  );

  const items: (SegmentedValue | SegmentedLabeledOption)[] = [
    {
      label: 'Jobs',
      value: 'jobs',
    },
    {
      label: 'Companies',
      value: 'companies',
    },
  ];
  const handleRemoveFilter = (dataIndex: keyof IFilter | string) => {
    const newFilter = filters;
    delete newFilter[dataIndex];
    setFilters(newFilter);
  };
  useEffect(() => {
    setFilters(parseQueryString(location.search));
  }, [location]);
  return (
    <main className='search-container'>
      <div className='w-full flex flex-row justify-between items-center'>
        <Segmented
          options={items}
          size='large'
          value={selectedType}
          className='mb-4'
          onChange={(option) => {
            setSelectedType(option.toString());
          }}
        />
        <div className='block lg:hidden'>
          <MiniFilter />
        </div>
      </div>
      <div className='w-full flex flex-row justify-start space-x-2'>
        <div>
          <h2 className='text-xl font-semibold tracking-wide text-gray-900 dark:text-slate-100'>
            Applied filters:
          </h2>
        </div>
        <div>
          {filters
            ? Object.entries(filters)
                .map(([key, value]) => ({
                  key,
                  value,
                }))
                .map((item) => (
                  <Tag
                    key={item.key}
                    className='font-bold dark:bg-gray-800 dark:text-gray-200'
                    closable
                    closeIcon={
                      <CloseOutlined className='text-gray-900 dark:text-gray-200 ml-2' />
                    }
                    onClose={() => handleRemoveFilter(item.key)}
                  >
                    <span className='font-normal'>
                      {filterPropertiesToString(item.key)}:{' '}
                    </span>
                    {String(item.value)}
                  </Tag>
                ))
            : null}
        </div>
      </div>
      <div className='search-jobs-container'>
        {selectedType === 'jobs' ? <SearchJobGroup /> : <SearchCompanyGroup />}
      </div>
    </main>
  );
}
