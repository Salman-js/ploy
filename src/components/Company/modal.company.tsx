import { ICompany } from '@/interface/company.interface';
import React from 'react';

type modalComponentProps = {
  company: ICompany;
};

const ModalCompany: React.FC<modalComponentProps> = ({ company }) => {
  return (
    <div>
      <div>Job</div>
    </div>
  );
};
export default ModalCompany;
