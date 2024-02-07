import { Button, Drawer } from 'antd';
import MainFilterComp from './filter';
import { useState } from 'react';
import { FilterOutlined } from '@ant-design/icons';

const MiniFilter = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        icon={<FilterOutlined />}
        onClick={() => setOpen(true)}
        type='text'
        className='btm-nav-btn'
      />
      <Drawer
        placement='right'
        onClose={handleClose}
        open={open}
        className='rounded-l-xl'
        width={350}
        maskStyle={{
          backdropFilter: 'blur(3px)',
        }}
      >
        <div className='sidebar-menu-container'>
          <MainFilterComp onApply={handleClose} />
        </div>
      </Drawer>
    </>
  );
};

export default MiniFilter;
