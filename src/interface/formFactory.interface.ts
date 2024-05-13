import { Moment } from 'moment';

export interface INewFormField {
  order: number;
  title: string;
  required: boolean;
  type:
    | 'short-text'
    | 'long-text'
    | 'number'
    | 'date'
    | 'one-choice'
    | 'multiple-choice';
  format?: 'email' | 'phone' | 'website';
  min?: number;
  max?: number;
  minDate?: Moment;
  maxDate?: Moment;
  options?: string[];
}

export interface IFormField extends INewFormField {
  id?: string;
}
