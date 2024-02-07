import AboutTab from '@/components/Profile/tab.about';
import CareerTab from '@/components/Profile/tab.career';
import ContactTab from '@/components/Profile/tab.contact';
import { PloyButton } from '@/components/ui/ui.components';
import { fallback } from '@/components/ui/ui.utils';
import { FormOutlined } from '@ant-design/icons';
import { Image, Tabs } from 'antd';
import { MapPin } from 'lucide-react';
import React from 'react';

const Profile: React.FC = () => {
  return (
    <main className='profile-container'>
      <div className='profile-main'>
        <div className='main-profile-container'>
          <div className='profile-image-container'>
            <Image
              src='error'
              fallback={fallback.image}
              width={100}
              height={100}
            />
          </div>
          <div className='main-profile-detail-container'>
            <div className='detail-container'>
              <p className='text-lg font-semibold main-text-color'>
                Salman M.{' '}
                <span className='ml-1 handle-text-color font-normal text-base'>
                  {' '}
                  . @salman
                </span>
              </p>
              <p className='text-xl font-light sub-text-color'>Web Developer</p>
              <p className='text-sm font-light mt-1 sub-text-color'>
                <MapPin size={15} className='sub-text-color inline' />{' '}
                <span>Ethiopia</span>
              </p>
            </div>
            <PloyButton
              type='text'
              className='rounded-full'
              icon={<FormOutlined />}
            />
          </div>
        </div>
        <Tabs
          items={[
            {
              label: 'About',
              key: 'about',
              children: <AboutTab />,
            },
            {
              label: 'Contact',
              key: 'contact',
              children: <ContactTab />,
            },
            {
              label: 'Career',
              key: 'career',
              children: <CareerTab />,
            },
          ]}
        />
      </div>
    </main>
  );
};
export default Profile;
