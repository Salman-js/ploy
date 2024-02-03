import { IJob } from '@/interface/job.interface';
import React from 'react';

type modalComponentProps = {
  job: IJob;
};

const ModalJob: React.FC<modalComponentProps> = ({ job }) => {
  return (
    <div>
      <div>Job</div>
    </div>
  );
};
export default ModalJob;
