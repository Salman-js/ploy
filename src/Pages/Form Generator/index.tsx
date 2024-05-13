import { INewFormField } from '@/interface/formFactory.interface';
import { PlusOutlined } from '@ant-design/icons';
import { ActionIcon, Button } from '@mantine/core';
import { Trash2Icon } from 'lucide-react';
import { Moment } from 'moment';
import { CascadeSelect } from 'primereact/cascadeselect';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { SelectItemOptionsType } from 'primereact/selectitem';
import { useState } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Popconfirm } from 'antd';
import FormGenerator from '@/components/Form Generator/form.generator';
import { InputNumber } from 'primereact/inputnumber';

export default function FormFactory() {
  const [fields, setFields] = useState<INewFormField[]>([]);
  const typeOptions: SelectItemOptionsType = [
    {
      label: 'Text',
      types: [
        {
          label: 'Short Text',
          value: 'short-text',
        },
        {
          label: 'Long Text',
          value: 'long-text',
        },
      ],
    },
    {
      label: 'Number',
      value: 'number',
    },
    {
      label: 'Date',
      value: 'date',
    },
    {
      label: 'Choice',
      types: [
        {
          label: 'One Choice (Radio)',
          value: 'one-choice',
        },
        {
          label: 'Multiple Choice (Checkbox)',
          value: 'multiple-choice',
        },
      ],
    },
  ];
  const formatOptions: SelectItemOptionsType = [
    {
      label: 'Phone',
      value: 'phone',
    },
    {
      label: 'Email',
      value: 'email',
    },
    {
      label: 'Website',
      value: 'website',
    },
  ];
  const handleAddNewField = () => {
    const newField: INewFormField = {
      order: fields.length + 1,
      required: false,
      title: 'Title',
      type: 'short-text',
    };
    setFields((prevFields) => [...prevFields, newField]);
  };
  const handleRemoveField = (ind: number) => {
    setFields((prevFields) =>
      prevFields.filter((field, index) => index !== ind)
    );
  };
  const handleFormFieldChange = (
    propName: keyof INewFormField,
    ind: number,
    value: string | number | Moment | Date | boolean
  ) => {
    setFields((prevFields) =>
      prevFields.map((field, index) =>
        index === ind
          ? {
              ...field,
              [propName]: value,
            }
          : field
      )
    );
  };

  const handleFormFieldOptionsChange = (
    ind: number,
    optionIndex: number,
    value: string
  ) => {
    const newOptions = fields[ind]?.options.map((opt, index) =>
      index === optionIndex ? value : opt
    );
    setFields((prevFields) =>
      prevFields.map((field, index) =>
        index === ind
          ? {
              ...field,
              options: newOptions,
            }
          : field
      )
    );
  };
  const handleAddNewFormFieldOption = (ind: number) => {
    setFields((prevFields) =>
      prevFields.map((field, index) =>
        index === ind
          ? {
              ...field,
              options: [...(field.options ?? []), ''],
            }
          : field
      )
    );
  };

  const handleRemoveFormFieldOption = (ind: number, optionIndex: number) => {
    const newOptions = fields[ind]?.options.filter(
      (opt, optInd) => optInd !== optionIndex
    );
    setFields((prevFields) =>
      prevFields.map((field, index) =>
        index === ind
          ? {
              ...field,
              options: newOptions,
            }
          : field
      )
    );
  };
  return (
    <div className='form-generator-container'>
      <div className='create-form-container'>
        <h2 className='text-xl font-semibold tracking-wide text-gray-900 dark:text-slate-100 mb-4'>
          Form generator
        </h2>
        {fields.map((field, index) => (
          <div className='w-full flex flex-col justify-center' key={index}>
            <div className='w-full flex flex-col justify-center shadow-sm p-3 rounded-lg space-y-6'>
              <div className='w-full flex flex-row space-x-3'>
                <div>
                  <div className='p-inputgroup flex-1'>
                    <span className='p-float-label w-full'>
                      <InputText
                        id='title'
                        className='p-inputtext-lg w-full outline-none bg-slate-100 p-2'
                        value={field.title}
                        onChange={(e) =>
                          handleFormFieldChange('title', index, e.target.value)
                        }
                      />
                      <label htmlFor='title'>Title</label>
                    </span>
                    <span className='p-inputgroup-addon'>
                      <Checkbox
                        onChange={(e) =>
                          handleFormFieldChange(
                            'required',
                            index,
                            e.target.checked
                          )
                        }
                        checked={field.required}
                        tooltip='Required'
                        tooltipOptions={{ position: 'bottom' }}
                      />
                    </span>
                  </div>
                </div>
                <div>
                  <span className='p-float-label w-full'>
                    <CascadeSelect
                      value={field.type}
                      onChange={(e) =>
                        handleFormFieldChange('type', index, e.value)
                      }
                      options={typeOptions}
                      optionLabel='label'
                      optionGroupLabel='label'
                      optionValue='value'
                      optionGroupChildren={['types', 'subtypes']}
                      breakpoint='767px'
                      id='type'
                      placeholder='Select input type'
                      style={{ minWidth: '14rem' }}
                    />
                    <label htmlFor='title'>Type</label>
                  </span>
                </div>
                {field.type === 'short-text' ? (
                  <div>
                    <span className='p-float-label w-full'>
                      <Dropdown
                        value={field.format}
                        onChange={(e) =>
                          handleFormFieldChange('format', index, e.value)
                        }
                        id='format'
                        options={formatOptions}
                        optionLabel='label'
                        placeholder='Select format'
                        style={{ minWidth: '14rem' }}
                      />
                      <label htmlFor='format'>Format</label>
                    </span>
                  </div>
                ) : null}
                <div>
                  <Popconfirm
                    title='Remove this field?'
                    onConfirm={() => handleRemoveField(index)}
                    okText='Yes'
                    okType='danger'
                    cancelText='No'
                  >
                    <ActionIcon
                      variant='default'
                      size='lg'
                      className='text-slate-900 text-xs'
                    >
                      <Trash2Icon className='text-slate-900' />
                    </ActionIcon>
                  </Popconfirm>
                </div>
              </div>
              {field.type === 'multiple-choice' ||
              field.type === 'one-choice' ? (
                <div className='w-1/2 flex flex-col space-y-2'>
                  {field.options?.map((option, optIndex) => (
                    <div className='flex flex-row space-x-2'>
                      <span className='p-float-label w-full'>
                        <InputText
                          className='p-inputtext-lg w-full outline-none bg-slate-100 p-2'
                          value={option}
                          onChange={(e) =>
                            handleFormFieldOptionsChange(
                              index,
                              optIndex,
                              e.target.value
                            )
                          }
                        />
                      </span>
                      <div>
                        <Popconfirm
                          title='Remove this option?'
                          onConfirm={() =>
                            handleRemoveFormFieldOption(index, optIndex)
                          }
                          okText='Yes'
                          okType='danger'
                          cancelText='No'
                        >
                          <ActionIcon
                            variant='default'
                            size='lg'
                            className='text-slate-900'
                          >
                            <Trash2Icon className='text-slate-900' />
                          </ActionIcon>
                        </Popconfirm>
                      </div>
                    </div>
                  ))}
                  <Button
                    className='bg-transparent dark:text-white text-slate-900 text-xs w-full tracking-wide'
                    leftSection={<PlusOutlined />}
                    variant='outline'
                    onClick={() => handleAddNewFormFieldOption(index)}
                  >
                    Add option
                  </Button>
                </div>
              ) : null}
              {field.type === 'number' ? (
                <div className='mt-4'>
                  <div className='w-1/2 flex flex-row space-x-2'>
                    <div>
                      <span className='p-float-label w-full'>
                        <InputNumber
                          id='title'
                          className='p-inputtext-lg w-full outline-none bg-slate-100'
                          inputClassName='outline-none bg-slate-100 rounded-lg p-2'
                          value={field.min}
                          onChange={(e) =>
                            e.value > field.max
                              ? handleFormFieldChange('min', index, field.max)
                              : handleFormFieldChange('min', index, e.value)
                          }
                        />
                        <label htmlFor='title'>Min.</label>
                      </span>
                    </div>
                    <div>
                      <span className='p-float-label w-full'>
                        <InputNumber
                          id='title'
                          className='p-inputtext-lg w-full outline-none bg-slate-100'
                          inputClassName='outline-none bg-slate-100 rounded-lg p-2'
                          value={field.max}
                          onChange={(e) =>
                            e.value < field.min
                              ? handleFormFieldChange('max', index, field.min)
                              : handleFormFieldChange('max', index, e.value)
                          }
                        />
                        <label htmlFor='title'>Max.</label>
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
        <div className='w-full flex justify-center'>
          <Button
            className='bg-transparent dark:text-white text-slate-900 text-xs w-full tracking-wide'
            leftSection={<PlusOutlined />}
            variant='outline'
            onClick={handleAddNewField}
          >
            Add field
          </Button>
        </div>
      </div>
      <div className='create-form-preview-container'>
        <h2 className='text-xl font-semibold tracking-wide text-gray-900 dark:text-slate-100 mb-4'>
          Preview
        </h2>
        {fields.map((field, index) => (
          <div className='w-full flex flex-col justify-center' key={index}>
            {<FormGenerator field={field} />}
          </div>
        ))}
      </div>
    </div>
  );
}
