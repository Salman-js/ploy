import { Moment } from 'moment';

export interface IUser extends ILoginType {
  id: string;
  name: string;
  role: 'MANAGER' | 'POFFICER';
  lastNotificationCheckTime?: Date | Moment;
}
export interface ILoginType {
  username: string;
  password: string;
}
