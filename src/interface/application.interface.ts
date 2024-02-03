import { Moment } from 'moment';
import { IJob } from './job.interface';
import { IUser } from './user.interface';

export interface IApplication extends INewApplication {
  id: string;
}

export interface INewApplication {
  applicant: IUser;
  job: IJob;
  date: Date | Moment;
}
