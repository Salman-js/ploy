import { Button, Paper } from '@mantine/core';
import React from 'react';
import { Col, Drawer } from 'antd';
import { ChevronRight } from 'lucide-react';
export const ViewAllJobsButton = () => {
  return (
    <Col lg={8} md={12} sm={24}>
      <Paper
        p='xl'
        radius='md'
        className='w-full h-56 bg-slate-100 dark:bg-slate-600 cursor-pointer shadow-md hover:shadow-lg transition-all flex justify-center items-center'
      >
        <Button
          className='bg-slate-200 dark:bg-slate-500 rounded-lg dark:text-zinc-300 text-zinc-600 text-lg'
          rightSection={<ChevronRight />}
          size='xl'
        >
          View All
        </Button>
      </Paper>
    </Col>
  );
};

export const JobDrawer = ({ open, onClose }) => {
  return (
    <Drawer
      title='Basic Drawer'
      placement='bottom'
      onClose={onClose}
      open={open}
      className='rounded-xl'
      height={500}
      maskStyle={{
        backdropFilter: 'blur(3px)',
      }}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};
