import LoginForm from '@/components/Auth/form.login';
import SignUpForm from '@/components/Auth/form.signup';
import {
  signInWithGithub,
  signInWithGoogle,
} from '@/utils/Auth/socials.auth.utils';
import { Button } from '@mantine/core';
import { Divider } from 'antd';
import { GithubIcon } from 'lucide-react';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const Login: React.FC = () => {
  const [activePage, setActivePage] = useState<'login' | 'signup'>('login');
  const handleChangeActivePage = () => {
    if (activePage === 'login') {
      setActivePage('signup');
    } else {
      setActivePage('login');
    }
  };
  const handleContinueWithGoogle = () => {
    signInWithGoogle();
  };
  const handleContinueWithGithub = () => {
    signInWithGithub();
  };
  return (
    <div className='login-container'>
      <div className='login-main-container'>
        <div className='login-image-container'>
          <div>
            <img src='/Images/white-logo.png' className='w-6' alt='' />
          </div>
          <div className='w-2/3'>
            <p className='text-5xl font-light text-white'>
              Your Gateway to Professional Success.
            </p>
          </div>
        </div>
        <div className='login-form-container'>
          <div>
            <p className='text-xl text-gray-900 text-center'>Ploy</p>
          </div>

          <div className='login-main-form-content'>
            {activePage === 'login' ? <LoginForm /> : <SignUpForm />}
            <Divider type='horizontal' className='text-sm text-gray-500 py-0'>
              Or
            </Divider>
            <div className='w-full flex flex-col space-y-2'>
              <Button
                leftSection={<FcGoogle size={20} />}
                variant='default'
                className='w-full'
                classNames={{
                  label: 'font-normal',
                }}
                onClick={handleContinueWithGoogle}
              >
                Continue with Google
              </Button>
              <Button
                leftSection={
                  <GithubIcon style={{ width: '1rem', height: '1rem' }} />
                }
                variant='filled'
                className='w-full bg-gray-900'
                classNames={{
                  label: 'font-normal',
                }}
                onClick={handleContinueWithGithub}
              >
                Continue with Github
              </Button>
            </div>
          </div>
          <div className='mt-3'>
            {activePage === 'login' ? (
              <p className='lg:text-xs text-base text-gray-600 text-center'>
                Don't have an account?{' '}
                <span
                  className='text-gray-900 ml-1 cursor-pointer'
                  onClick={handleChangeActivePage}
                >
                  Sign Up
                </span>
              </p>
            ) : (
              <p className='lg:text-xs text-base text-gray-600 text-center'>
                Already have an account?{' '}
                <span
                  className='text-gray-900 ml-1 cursor-pointer'
                  onClick={handleChangeActivePage}
                >
                  Sign In
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
