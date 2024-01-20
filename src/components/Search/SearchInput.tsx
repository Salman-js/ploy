'use client';
import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
  rem,
} from '@mantine/core';
import { ArrowRight, Search } from 'lucide-react';

export default function SearchInput(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      radius='xl'
      size='sm'
      placeholder='Search'
      rightSectionWidth={42}
      leftSection={<Search size={20} />}
      className='mb-3'
      rightSection={
        <ActionIcon
          size={28}
          radius='xl'
          variant='filled'
          className='bg-gray-900'
        >
          <ArrowRight size={20} className='overflow-hidden ' />
        </ActionIcon>
      }
      {...props}
    />
  );
}
