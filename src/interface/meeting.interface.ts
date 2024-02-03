import { Moment } from 'moment';
import { ICompany } from './company.interface';
import { IUser } from './user.interface';

export interface IMeeting extends INewMeeting {
  id: string;
}

export interface INewMeeting {
  company: ICompany;
  applicant: IUser;
  dateTime: Date | Moment;
}
