'use client';
import { RootState } from '@/store/store';
import { TextInput, TextInputProps, ActionIcon } from '@mantine/core';
import { ArrowRight, Search } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function SearchInput(props: TextInputProps) {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <TextInput
      radius='xl'
      size='sm'
      placeholder='Search'
      rightSectionWidth={42}
      leftSection={<Search size={20} />}
      className='mb-3'
      styles={{
        input: {
          backgroundColor: theme === 'dark' ? 'rgb(51 65 85)' : 'white',
          color: theme === 'dark' ? 'white' : 'rgb(51 65 85)',
        },
      }}
      rightSection={
        <ActionIcon
          size={28}
          radius='xl'
          variant='filled'
          className='dark:bg-gray-100 bg-gray-900'
        >
          <ArrowRight
            size={20}
            className='overflow-hidden text-gray-100 dark:text-gray-900'
          />
        </ActionIcon>
      }
      {...props}
    />
  );
}
