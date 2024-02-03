import { IApplication } from '@/interface/application.interface';
import React from 'react';

type modalComponentProps = {
  application: IApplication;
};

const ModalApplication: React.FC<modalComponentProps> = ({ application }) => {
  return (
    <div>
      <div>Application</div>
    </div>
  );
};
export default ModalApplication;
