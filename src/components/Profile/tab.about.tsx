import { IUser } from '@/interface/user.interface';
import React from 'react';
import { PloyButton } from '../ui/ui.components';
import { FormOutlined } from '@ant-design/icons';
import { Link } from 'lucide-react';

type contactTabProps = {
  user?: IUser;
};

const AboutTab: React.FC<contactTabProps> = ({ user }) => {
  return (
    <div className='profile-info-container'>
      <div className='profile-info-header'>
        <div>
          <h4 className='detail-header-title'>About Salman</h4>
        </div>
        <PloyButton
          type='text'
          className='rounded-full'
          icon={<FormOutlined />}
        />
      </div>
      <div className='profile-info-main'>
        <div className='w-full lg:w-2/3 profile-info'>
          <p className='text-base text-slate-700 dark:text-slate-100 tracking-wide mt-2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            distinctio cumque vero iure eius quae nemo, quia at maiores quos.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis odit
            facere deserunt obcaecati reprehenderit beatae eius nulla molestias
            sint provident praesentium voluptas, consequuntur laborum
            necessitatibus quod eaque magnam error laboriosam sequi sapiente
            earum suscipit corporis. Fuga recusandae architecto ut aperiam.
          </p>
          <p className='text-base text-slate-700 dark:text-slate-100 tracking-wide mt-2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            distinctio cumque vero iure eius quae nemo, quia at maiores quos.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis odit
            facere deserunt obcaecati reprehenderit beatae eius nulla molestias
            sint provident praesentium voluptas, consequuntur laborum
            necessitatibus quod eaque magnam error laboriosam sequi sapiente
            earum suscipit corporis. Fuga recusandae architecto ut aperiam.
          </p>
          <p className='text-base text-slate-700 dark:text-slate-100 tracking-wide mt-2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            distinctio cumque vero iure eius quae nemo, quia at maiores quos.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis odit
            facere deserunt obcaecati reprehenderit beatae eius nulla molestias
            sint provident praesentium voluptas, consequuntur laborum
            necessitatibus quod eaque magnam error laboriosam sequi sapiente
            earum suscipit corporis. Fuga recusandae architecto ut aperiam.
          </p>
          <p className='text-base text-slate-700 dark:text-slate-100 tracking-wide mt-2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            distinctio cumque vero iure eius quae nemo, quia at maiores quos.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis odit
            facere deserunt obcaecati reprehenderit beatae eius nulla molestias
            sint provident praesentium voluptas, consequuntur laborum
            necessitatibus quod eaque magnam error laboriosam sequi sapiente
            earum suscipit corporis. Fuga recusandae architecto ut aperiam.
          </p>
          <p className='text-base text-slate-700 dark:text-slate-100 tracking-wide mt-2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            distinctio cumque vero iure eius quae nemo, quia at maiores quos.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis odit
            facere deserunt obcaecati reprehenderit beatae eius nulla molestias
            sint provident praesentium voluptas, consequuntur laborum
            necessitatibus quod eaque magnam error laboriosam sequi sapiente
            earum suscipit corporis. Fuga recusandae architecto ut aperiam.
          </p>
        </div>
        <div className='profile-extra-container'>
          <div className='p-4 rounded-xl border border-gray-400'>
            <h4 className='text-lg text-slate-800 dark:text-slate-100 tracking-wide'>
              Websites and Socials
            </h4>
            <p className='text-base mt-4 detail-title flex flex-row items-center'>
              <Link className='detail-title inline my-auto' />{' '}
              <a href='#'>
                <span className='my-auto font-light ml-3'>
                  https://salman.io
                </span>
              </a>
            </p>
            <p className='text-base mt-4 detail-title flex flex-row items-center'>
              <Link className='detail-title inline my-auto' />{' '}
              <a href='#'>
                <span className='my-auto font-light ml-3'>
                  https://salman.io
                </span>
              </a>
            </p>
            <p className='text-base mt-4 detail-title flex flex-row items-center'>
              <Link className='detail-title inline my-auto' />{' '}
              <a href='#'>
                <span className='my-auto font-light ml-3'>
                  https://salman.io
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutTab;
