import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { Checkbox } from 'antd';
import SearchInput from './SearchInput';

export const MainFilterComp = () => {
  const items = [
    {
      title: 'Experience',
      component: <FilterByExp />,
    },
    {
      title: 'Job Type',
      component: <FilterByJobType />,
    },
    {
      title: 'Work Style',
      component: <FilterByWorkStyle />,
    },
  ];
  return (
    <Accordion defaultIndex={[0, 1, 2]} allowMultiple allowToggle>
      <SearchInput className='mb-3' />
      {items.map((Item, index) => (
        <AccordionItem
          key={index}
          borderTopColor='transparent'
          borderBottomColor='transparent'
          className='bg-white dark:bg-slate-500 rounded-xl mb-2'
        >
          <h2 className='text-zinc-700 dark:text-zinc-200 text-xl my-2'>
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
  );
};

export const FilterByExp = () => {
  const items = [
    {
      title: 'Internship',
    },
    {
      title: 'Entry level',
    },
    {
      title: 'Intermidiate level',
    },
    {
      title: 'Senior level',
    },
  ];
  return (
    <div className='py-2'>
      {items.map((Item, index) => (
        <div key={index} className='my-1'>
          <Checkbox>
            <span className='text-sm text-zinc-600 dark:text-zinc-200'>
              {Item.title}
            </span>
          </Checkbox>
        </div>
      ))}
    </div>
  );
};

export const FilterByJobType = () => {
  const items = [
    {
      title: 'Full-time',
    },
    {
      title: 'Part-time',
    },
    {
      title: 'Contract',
    },
  ];
  return (
    <div className='py-2'>
      {items.map((Item, index) => (
        <div key={index} className='my-1'>
          <Checkbox>
            <span className='text-sm text-zinc-600 dark:text-zinc-200'>
              {Item.title}
            </span>
          </Checkbox>
        </div>
      ))}
    </div>
  );
};

export const FilterByWorkStyle = () => {
  const items = [
    {
      title: 'Remote',
    },
    {
      title: 'On-site',
    },
  ];
  return (
    <div className='py-2'>
      {items.map((Item, index) => (
        <div key={index} className='my-1'>
          <Checkbox>
            <span className='text-sm text-zinc-600 dark:text-zinc-200'>
              {Item.title}
            </span>
          </Checkbox>
        </div>
      ))}
    </div>
  );
};
