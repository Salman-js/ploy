import { Paper, Title } from '@mantine/core';
import React from 'react';
import './ui.css';
import { Avatar, Col, Button as AntButton } from 'antd';
import {
  AlarmClockOff,
  Bookmark,
  Building,
  Calendar,
  Clock,
  User,
} from 'lucide-react';
import { JobCardProps } from '../../interface/props.interface';
import { ToastAction } from '@/shad/ui/toast';
import { useToast } from '@/shad/ui/use-toast';

export function JobCard({ image, title, category, onClick }: JobCardProps) {
  const { toast } = useToast();
  return (
    <Col lg={8} md={12} sm={24} onClick={onClick}>
      <Paper
        p='xl'
        radius='md'
        className='w-full h-56 bg-slate-100 dark:bg-gray-800 cursor-pointer shadow-md hover:shadow-lg transition-all'
      >
        <div className='w-full flex flex-row justify-start items-start space-x-2'>
          <Avatar src={image} size={60} shape='square' />
          <div>
            <Title
              order={5}
              className='text-zinc-700 dark:text-zinc-200 transition-all hover:underline break-words '
            >
              Job Title
            </Title>
            <Title
              size={12}
              className='text-zinc-500 dark:text-zinc-400 text-xs'
            >
              Company Name . Company Location
            </Title>
          </div>
        </div>
        <div className='flex flex-row space-x-2 justify-start items-center mt-2'>
          <div className='flex flex-row items-center space-x-2 py-1 text-xs text-zinc-500 dark:text-zinc-400 text-semibold'>
            <Clock size={12} className='mr-2' /> Fulltime
          </div>
          <span className='text-xl text-zinc-500 dark:text-zinc-400 text-semibold flex items-center pb-2'>
            .
          </span>
          <div className=' flex flex-row items-center space-x-2 py-1 text-xs text-zinc-500 dark:text-zinc-400 text-semibold'>
            <Building size={12} className='mr-2' /> Remote
          </div>
          <span className='text-xl text-zinc-500 dark:text-zinc-400 text-semibold flex items-center pb-2'>
            .
          </span>
          <div className=' flex flex-row items-center space-x-2 py-1 text-xs text-zinc-500 dark:text-zinc-400 text-semibold'>
            <User size={12} className='mr-2' /> Entry-level
          </div>
        </div>
        <div className='w-full flex flex-row justify-between items-center mt-2 ml-2'>
          <div className='py-1 rounded-md text-zinc-400 text-xs flex flex-row items-center'>
            <Calendar size={12} className='mr-2' /> 3 Days ago .
            <AlarmClockOff size={12} className='mx-2' /> 10 Days left
          </div>
          <AntButton
            onClick={(e) => {
              toast({
                title: 'Job Post Saved',
                description: 'Job Title',
                action: (
                  <ToastAction altText='Goto saved to undo'>Undo</ToastAction>
                ),
              });
              e.stopPropagation();
            }}
            icon={<Bookmark className='text-gray-900 dark:text-gray-200' />}
            shape='circle'
            type='text'
          />
        </div>
        <div className='flex flex-row space-x-2 justify-start mt-2'>
          <div className='px-2 py-1 rounded-md bg-slate-200 dark:bg-gray-700 text-xs text-gray-900 dark:text-sky-300 text-semibold'>
            ReactJs
          </div>
          <div className='px-2 py-1 rounded-md bg-slate-200 dark:bg-gray-700 text-xs text-gray-900 dark:text-sky-300 text-semibold'>
            NextJs
          </div>
          <div className='px-2 py-1 rounded-md bg-slate-200 dark:bg-gray-700 text-xs text-gray-900 dark:text-sky-300 text-semibold'>
            NestJs
          </div>
        </div>
      </Paper>
    </Col>
  );
}
