import {
  JobMainTile,
  JobTypeTile,
  StickyJobMainTile,
} from '@/components/Jobs/mini.components.job';
import { Button } from '@mantine/core';
import { Row } from 'antd';
import { RcFile } from 'antd/es/upload';
import { useEffect, useRef, useState } from 'react';

export default function Apply() {
  const [showFixedDiv, setShowFixedDiv] = useState(false);
  const scrollableDivRef = useRef(null);
  const [file, setFile] = useState<RcFile | null>(null);
  const handleFileSelect = (selectedFile: RcFile) => {
    setFile(selectedFile);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (scrollableDivRef.current) {
        setShowFixedDiv(scrollableDivRef.current.scrollTop > 180);
      }
    };

    if (scrollableDivRef.current) {
      scrollableDivRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollableDivRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        scrollableDivRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  return (
    <div className='job-container'>
      <StickyJobMainTile visible={showFixedDiv} toApply />
      <div className='job-detail-container'>
        <div className='job-detail-main'>
          <JobMainTile toApply />
          <hr className='mt-3 mb-2 border-gray-300 dark:border-gray-600' />
          <Row gutter={[16, 16]} className='p-2'>
            <JobTypeTile title='Experience' value='3 years' />
            <JobTypeTile title='Level' value='Intermediate' />
            <JobTypeTile title='Job type' value='Full-time' />
            <JobTypeTile title='Offer Salary' value='$3000/month' />
          </Row>
          <hr className='mt-3 mb-2 border-gray-300 dark:border-gray-600' />
        </div>
      </div>
      <div className='application-form-container'>
        <div className='application-form-main'>App Form</div>
        <div>
          <div className='select-cv-container'>
            <div className='p-6 rounded-lg border border-gray-100 dark:border-gray-800 h-32 flex justify-center items-center hover:bg-slate-100 dark:hover:bg-gray-800 cursor-pointer w-full'>
              <p className='text-sm text-slate-800 dark:text-slate-100 text-center'>
                Select CV
              </p>
            </div>
          </div>
          <Button className='bg-slate-900 dark:bg-slate-100 rounded-lg dark:text-slate-900 text-white font-light text-sm w-full tracking-wide'>
            Apply
          </Button>
        </div>
      </div>
      {/* <Upload
        name='avatar'
        accept='.pdf'
        listType='picture-card'
        className='avatar-uploader'
        showUploadList
        multiple={false}
        maxCount={1}
        iconRender={() => <FileBadge2 />}
        beforeUpload={(file) => {
          handleFileSelect(file);
          return false;
        }}
        onChange={(e) => {
          if (!e.fileList.length) {
            setFile(null);
          }
        }}
      >
        <div className='flex flex-col justify-center items-center'>
          <div>
            <FileBadge2 size={40} color='#7e7a7a' />
          </div>
          <div style={{ marginTop: 8 }}>Upload CV</div>
        </div>
      </Upload> */}
    </div>
  );
}
