import { INotification } from '@/interface/notification.interface';
import React from 'react';
import ModalJob from '../Jobs/modal.job';
import ModalMeeting from '../Meetings/modal.meeting';
import ModalApplication from '../Applications/modal.application';

type modalComponentProps = {
  notification: INotification;
};

const ModalNotification: React.FC<modalComponentProps> = ({ notification }) => {
  const { type, application, job, meeting } = notification;
  return (
    <>
      {type === 'job' ? (
        <ModalJob job={job} />
      ) : type === 'meeting' ? (
        <ModalMeeting meeting={meeting} />
      ) : type === 'application' ? (
        <ModalApplication application={application} />
      ) : null}
    </>
  );
};
export default ModalNotification;
