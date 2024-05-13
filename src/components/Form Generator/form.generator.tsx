import { IFormField } from '@/interface/formFactory.interface';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from 'primereact/checkbox';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import React from 'react';

type formGeneratorProps = {
  field: IFormField;
};

const FormGenerator: React.FC<formGeneratorProps> = ({ field }) => {
  return field.type === 'short-text' ? (
    <span className='p-float-label w-full'>
      <InputText
        id='title'
        className='p-inputtext-lg w-full outline-none bg-slate-100 p-2'
      />
      <label htmlFor='title'>{field.title}</label>
    </span>
  ) : field.type === 'long-text' ? (
    <span className='p-float-label w-full'>
      <InputTextarea
        id='title'
        className='p-inputtext-lg w-full outline-none bg-slate-100 p-2'
      />
      <label htmlFor='title'>{field.title}</label>
    </span>
  ) : field.type === 'number' ? (
    <span className='p-float-label w-full'>
      <InputNumber
        id='title'
        className='p-inputtext-lg w-full outline-none bg-slate-100'
        inputClassName='outline-none bg-slate-100 rounded-lg p-2'
      />
      <label htmlFor='title'>{field.title}</label>
    </span>
  ) : field.type === 'multiple-choice' ? (
    <div className='flex-col space-y-3'>
      <p>{field.title}</p>
      {field.options?.map((opt, ind) => (
        <div className='flex align-items-center'>
          <Checkbox inputId={opt} name='options' value={opt} checked />
          <label htmlFor={opt} className='ml-2'>
            {opt}
          </label>
        </div>
      ))}
    </div>
  ) : field.type === 'one-choice' ? (
    <div className='flex-col space-y-3'>
      <p>{field.title}</p>
      {field.options?.map((opt, ind) => (
        <div className='flex align-items-center'>
          <RadioButton inputId={opt} name='options' value={opt} checked />
          <label htmlFor={opt} className='ml-2'>
            {opt}
          </label>
        </div>
      ))}
    </div>
  ) : field.type === 'date' ? (
    <span className='p-float-label w-full'>
      <Calendar
        className='p-inputtext-lg w-full outline-none bg-slate-100'
        inputClassName='outline-none bg-slate-100 rounded-lg p-2'
      />
      <label htmlFor='title'>{field.title}</label>
    </span>
  ) : null;
};
export default FormGenerator;
