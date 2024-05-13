import { Button } from '@mantine/core';
import { Col, Row } from 'antd';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import React from 'react';

const SignUpForm: React.FC = () => {
  return (
    <div className='w-full'>
      <p className='lg:text-4xl text-2xl font-light text-gray-900 text-center'>
        Create Your Account
      </p>
      <p className='text-xs text-gray-600 text-center'>
        Enter your details to create an account
      </p>
      <div>
        <div className='login-form-inputs-container'>
          <Row gutter={[26, 26]}>
            <Col lg={12} sm={24} xs={24}>
              <span className='p-float-label w-full'>
                <InputText
                  id='fname'
                  className='p-inputtext-lg w-full outline-none bg-slate-100 p-2'
                />
                <label htmlFor='fname'>First Name</label>
              </span>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <span className='p-float-label full'>
                <InputText
                  id='lname'
                  className='p-inputtext-lg w-full outline-none bg-slate-100 p-2'
                />
                <label htmlFor='lname'>Last Name</label>
              </span>
            </Col>
            <Col span={24}>
              <span className='p-float-label w-full'>
                <InputText
                  id='email'
                  className='p-inputtext-lg w-full outline-none bg-slate-100 p-2'
                />
                <label htmlFor='email'>Email</label>
              </span>
            </Col>
            <Col span={24}>
              <span className='p-float-label rounded-md'>
                <Password
                  id='password'
                  className='w-full outline-none bg-slate-100 p-2 rounded-md'
                  toggleMask
                  inputClassName='w-full'
                />
                <label htmlFor='password'>Password</label>
              </span>
            </Col>
            <Col span={24}>
              <Button
                variant='filled'
                className='w-full bg-gray-900'
                classNames={{
                  label: 'font-normal',
                }}
              >
                Sign up
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
