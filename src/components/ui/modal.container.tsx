import { IApplication } from '@/interface/application.interface';
import { IJob } from '@/interface/job.interface';
import { IMeeting } from '@/interface/meeting.interface';
import { sentenceCase } from '@/utils/string.utils';
import { Modal } from 'antd';
import React, { useState } from 'react';
import ModalJob from '../Jobs/modal.job';
import ModalMeeting from '../Meetings/modal.meeting';
import ModalApplication from '../Applications/modal.application';
import ModalNotification from '../Notifications/modal.notification';
import { INotification } from '@/interface/notification.interface';

type modalContainerProps = {
  open?: boolean;
  type?: 'job' | 'meeting' | 'notification' | 'application' | null;
  item?: IJob | IMeeting | INotification | IApplication | null;
  width?: number;
};

const ModalContainer: React.FC<modalContainerProps> = ({
  open = false,
  type = null,
  item = null,
  width = 600,
}) => {
  const [modalData, setModalData] = useState<modalContainerProps>({
    open,
    type,
    item,
    width,
  });
  return (
    <Modal
      title={sentenceCase(type)}
      open={modalData.open}
      width={modalData.width}
      footer={[]}
      onCancel={() => setModalData({ open: false })}
      destroyOnClose
    >
      {type === 'job' ? (
        <ModalJob job={modalData.item as IJob} />
      ) : type === 'meeting' ? (
        <ModalMeeting meeting={modalData.item as IMeeting} />
      ) : type === 'notification' ? (
        <ModalNotification notification={modalData.item as INotification} />
      ) : type === 'application' ? (
        <ModalApplication application={modalData.item as IApplication} />
      ) : null}
    </Modal>
  );
};

export default ModalContainer;
