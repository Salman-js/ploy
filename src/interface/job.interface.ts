import { Moment } from 'moment';
import { ICompany } from './company.interface';

export interface IJob extends INewJob {
  id: string;
}
export interface INewJob {
  title: string;
  postDate: Date | Moment;
  dueDate: Date | Moment;
  company: ICompany;
}
