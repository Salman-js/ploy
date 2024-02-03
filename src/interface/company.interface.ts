import { IJob } from './job.interface';
import { IUser } from './user.interface';

export interface ICompany extends INewCompany {
  id: string;
}

export interface INewCompany {
  name: string;
  sector: string;
  subSector: string;
  logo: string;
  location: string;
  jobs: IJob[];
  jobsCount: number;
  followers: IUser[];
}
