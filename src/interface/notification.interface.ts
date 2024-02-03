import { IApplication } from './application.interface';
import { IJob } from './job.interface';
import { IMeeting } from './meeting.interface';

export interface INotification extends INewNotification {
  id: string;
}

export interface INewNotification {
  type: 'job' | 'meeting' | 'application';
  job?: IJob;
  meeting?: IMeeting;
  application?: IApplication;
}
