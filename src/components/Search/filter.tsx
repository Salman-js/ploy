import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { Button, Checkbox, ConfigProvider, FloatButton, Tooltip } from 'antd';
import SearchInput from './search.input';
import { jobCategories } from '../ui/main.sidebar';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { IFilter } from '@/interface/search.interface';
import { objectToQueryString } from '@/utils/string.utils';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/router/constants';
interface filterComponentProps {
  filters: IFilter;
  handleChange: (
    dataIndex: 'experience' | 'jobType' | 'workStyle' | 'category',
    title: string,
    checked: boolean
  ) => void;
}
interface mainFilterProps {
  onApply?: () => void;
}
const MainFilterComp: React.FC<mainFilterProps> = ({ onApply }) => {
  const navigate = useNavigate();
  const initFilter: IFilter = {
    category: [],
    jobType: [],
    experience: [],
    title: '',
    workStyle: [],
  };
  const [filters, setFilters] = useState<IFilter>(initFilter);
  const handleSubFiltersChange = (
    dataIndex: 'experience' | 'jobType' | 'workStyle' | 'category',
    title: string,
    checked: boolean
  ) => {
    if (checked) {
      setFilters({
        ...filters,
        [dataIndex]: [...filters[dataIndex], title],
      });
    } else {
      setFilters({
        ...filters,
        [dataIndex]: filters[dataIndex].filter((value) => value !== title),
      });
    }
  };
  const items = [
    {
      title: 'Experience',
      component: (
        <FilterByExp filters={filters} handleChange={handleSubFiltersChange} />
      ),
    },
    {
      title: 'Job Type',
      component: (
        <FilterByJobType
          filters={filters}
          handleChange={handleSubFiltersChange}
        />
      ),
    },
    {
      title: 'Work Style',
      component: (
        <FilterByWorkStyle
          filters={filters}
          handleChange={handleSubFiltersChange}
        />
      ),
    },
    {
      title: 'Category',
      component: (
        <FilterByCategory
          filters={filters}
          handleChange={handleSubFiltersChange}
        />
      ),
    },
  ];
  const handleChangeTitle = (title: string) => {
    setFilters({
      ...filters,
      title,
    });
  };
  const handleObjToQuery = () => {
    const query = objectToQueryString(filters);
    navigate(`${ROUTES.SEARCH}?${query}`);
    if (onApply) {
      onApply();
    }
  };
  const handleClearFilters = () => {
    setFilters(initFilter);
  };
  return (
    <div className='flex flex-col'>
      <SearchInput
        value={filters?.title}
        onChange={(e) => handleChangeTitle(e.target.value)}
      />
      <div className='max-h-[66vh] overflow-auto'>
        <Accordion
          defaultIndex={[0, 1, 2, 3]}
          allowMultiple
          allowToggle
          className='pb-10'
        >
          {items.map((Item, index) => (
            <AccordionItem
              key={index}
              borderTopColor='transparent'
              borderBottomColor='transparent'
              className='bg-zinc-50 dark:bg-gray-800 rounded-xl mb-2'
            >
              <h2 className='text-zinc-700 dark:text-zinc-200 text-xl'>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    {Item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{Item.component}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className='flex flex-row space-x-2 p-2'>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: 'rgb(51 65 85)',
                colorPrimaryHover: 'rgb(63, 80, 103)',
                colorPrimaryActive: 'rgb(63, 80, 103)',
              },
            },
          }}
        >
          <Button
            type='primary'
            icon={<CheckOutlined />}
            onClick={handleObjToQuery}
          >
            Apply
          </Button>
          <Button
            icon={<CloseOutlined />}
            type='default'
            onClick={handleClearFilters}
          >
            Clear
          </Button>
        </ConfigProvider>
      </div>
    </div>
  );
};

export const FilterByExp: React.FC<filterComponentProps> = ({
  filters,
  handleChange,
}) => {
  const items: {
    title: string;
    value: 'Intern' | 'Entry' | 'Intermediate' | 'Senior';
  }[] = [
    {
      title: 'Internship',
      value: 'Intern',
    },
    {
      title: 'Entry level',
      value: 'Entry',
    },
    {
      title: 'Intermediate level',
      value: 'Intermediate',
    },
    {
      title: 'Senior level',
      value: 'Senior',
    },
  ];
  return (
    <div className='py-2'>
      {items.map((Item, index) => (
        <div key={index} className='my-1'>
          <Checkbox
            className='text-gray-900 checked:bg-gray-900 accent-gray-900'
            style={{ accentColor: 'black' }}
            checked={filters?.experience?.includes(Item.value)}
            onChange={(e) =>
              handleChange('experience', Item.value, e.target.checked)
            }
          >
            <span className='text-sm text-zinc-600 dark:text-zinc-200'>
              {Item.title}
            </span>
          </Checkbox>
        </div>
      ))}
    </div>
  );
};

export const FilterByJobType: React.FC<filterComponentProps> = ({
  filters,
  handleChange,
}) => {
  const items: {
    title: string;
    value: 'FullTime' | 'PartTime' | 'Contract';
  }[] = [
    {
      title: 'Full-time',
      value: 'FullTime',
    },
    {
      title: 'Part-time',
      value: 'PartTime',
    },
    {
      title: 'Contract',
      value: 'Contract',
    },
  ];
  return (
    <div className='py-2'>
      {items.map((Item, index) => (
        <div key={index} className='my-1'>
          <Checkbox
            checked={filters?.jobType?.includes(Item.value)}
            onChange={(e) =>
              handleChange('jobType', Item.value, e.target.checked)
            }
          >
            <span className='text-sm text-zinc-600 dark:text-zinc-200'>
              {Item.title}
            </span>
          </Checkbox>
        </div>
      ))}
    </div>
  );
};

export const FilterByWorkStyle: React.FC<filterComponentProps> = ({
  filters,
  handleChange,
}) => {
  const items: {
    title: string;
    value: 'Remote' | 'OnSite';
  }[] = [
    {
      title: 'Remote',
      value: 'Remote',
    },
    {
      title: 'On-site',
      value: 'OnSite',
    },
  ];
  return (
    <div className='py-2'>
      {items.map((Item, index) => (
        <div key={index} className='my-1'>
          <Checkbox
            checked={filters?.workStyle?.includes(Item.value)}
            onChange={(e) =>
              handleChange('workStyle', Item.value, e.target.checked)
            }
          >
            <span className='text-sm text-zinc-600 dark:text-zinc-200'>
              {Item.title}
            </span>
          </Checkbox>
        </div>
      ))}
    </div>
  );
};

export const FilterByCategory: React.FC<filterComponentProps> = ({
  filters,
  handleChange,
}) => {
  return (
    <div className='py-2'>
      {jobCategories.map((Item, index) => (
        <div key={index} className='my-1'>
          <Checkbox
            checked={filters?.category?.includes(Item.value ?? Item.title)}
            onChange={(e) =>
              handleChange(
                'category',
                Item.value ?? Item.title,
                e.target.checked
              )
            }
          >
            <span className='text-sm text-zinc-600 dark:text-zinc-200'>
              {Item.title}
            </span>
          </Checkbox>
        </div>
      ))}
    </div>
  );
};

export default MainFilterComp;
