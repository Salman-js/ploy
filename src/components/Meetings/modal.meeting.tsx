import { IMeeting } from '@/interface/meeting.interface';
import React from 'react';

type modalComponentProps = {
  meeting: IMeeting;
};

const ModalMeeting: React.FC<modalComponentProps> = ({ meeting }) => {
  return (
    <div>
      <div>Meeting</div>
    </div>
  );
};
export default ModalMeeting;
