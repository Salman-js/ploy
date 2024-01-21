import { JobCardProps } from '@/interface/props.interface';
import { ROUTES } from '@/router/constants';
import { Paper, Title } from '@mantine/core';
import { Avatar, Badge, Col } from 'antd';
import { AlarmClockOff, Calendar } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export type MiniApplicationCardProps = {
  job: Omit<JobCardProps, 'onClick'>;
  status: string;
};

const MiniApplicationCard: React.FC<MiniApplicationCardProps> = ({
  status,
  job,
}) => {
  const navigate = useNavigate();
  const upperCased = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.25, bounce: true }}
        className='w-[20em] m-1'
        onClick={() => navigate(`${ROUTES.APPLICATIONS}`)}
      >
        <Badge.Ribbon text={upperCased(status)} color='#293145'>
          <Paper
            p='md'
            radius='md'
            className='w-full bg-white dark:bg-gray-800 cursor-pointer shadow-md hover:shadow-lg transition-all'
          >
            <div className='w-full flex flex-row justify-start items-start space-x-2'>
              <Avatar src={job.image} size={60} shape='square' />
              <div>
                <Title
                  order={5}
                  className='text-zinc-600 dark:text-zinc-200 break-words '
                >
                  Job Title
                </Title>
              </div>
            </div>
            <div className='w-full flex flex-row justify-between items-center'>
              <div className='py-1 rounded-md text-zinc-400 text-xs flex flex-row items-center'>
                Company Name .
                <Calendar size={12} className='mr-2' /> 3 Days ago
              </div>
            </div>
          </Paper>
        </Badge.Ribbon>
      </motion.div>
    </AnimatePresence>
  );
};
export default MiniApplicationCard;
