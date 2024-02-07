import { IUser } from '@/interface/user.interface';
import { Mail, Phone } from 'lucide-react';
import React from 'react';
import { PloyButton } from '../ui/ui.components';
import { FormOutlined } from '@ant-design/icons';

type contactTabProps = {
  user?: IUser;
};

const ContactTab: React.FC<contactTabProps> = ({ user }) => {
  return (
    <div className='profile-info-container'>
      <div className='profile-info-header'>
        <div>
          <h4 className='detail-header-title'>Contact Info.</h4>
        </div>
        <PloyButton
          type='text'
          className='rounded-full'
          icon={<FormOutlined />}
        />
      </div>
      <div className='profile-info-main'>
        <div className='profile-info'>
          <p className='text-lg font-semibold mt-4 detail-title flex flex-row items-center'>
            <Mail className='detail-title inline my-auto' />{' '}
            <span className='my-auto font-light ml-3'>
              salmanmoh.eth@gmail.com
            </span>
          </p>
          <p className='text-lg font-semibold mt-4 detail-title flex flex-row items-center'>
            <Phone className='detail-title inline my-auto' />{' '}
            <span className='my-auto font-light ml-3'>(+251)-911-915-279</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContactTab;
