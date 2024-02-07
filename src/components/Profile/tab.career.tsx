import { IUser } from '@/interface/user.interface';
import React from 'react';
import { PloyButton } from '../ui/ui.components';
import { FormOutlined } from '@ant-design/icons';
import { Link } from 'lucide-react';
import ExperienceGroup from './group.exp';
import Skill from './item.skill';

type contactTabProps = {
  user?: IUser;
};

const CareerTab: React.FC<contactTabProps> = ({ user }) => {
  return (
    <div className='profile-info-container'>
      <div className='profile-info-header'>
        <div>
          <h4 className='detail-header-title'>Experience</h4>
        </div>
        <PloyButton
          type='text'
          className='rounded-full'
          icon={<FormOutlined />}
        />
      </div>
      <div className='profile-info-main'>
        <div className='w-full lg:w-2/3 profile-info'>
          <ExperienceGroup />
        </div>
        <div className='profile-extra-container'>
          <div className='p-4 rounded-xl border border-gray-400'>
            <h4 className='text-lg text-slate-800 dark:text-slate-100 tracking-wide'>
              Skills
            </h4>
            <div className='flex flex-wrap gap-2 mt-3'>
              <Skill skill='ReactJs' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CareerTab;
