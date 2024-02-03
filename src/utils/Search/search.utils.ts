/* eslint-disable @typescript-eslint/no-explicit-any */
import { IFilter } from '@/interface/search.interface';

export function isFilterChanged(currentFilter: IFilter): boolean {
  const initFilter: IFilter = {
    category: [],
    jobType: [],
    experience: [],
    title: '',
    workStyle: [],
  };
  // Compare properties one by one
  for (const key in initFilter) {
    if (
      Object.prototype.hasOwnProperty.call(initFilter, key) &&
      !arraysEqual(initFilter[key], currentFilter[key])
    ) {
      // If any property is different, return true
      return true;
    }
  }

  // If no difference is found, return false
  return false;
}

function arraysEqual(array1: any[], array2: any[]): boolean {
  // Check if both are arrays
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }

  // Check array lengths
  if (array1.length !== array2.length) {
    return false;
  }

  // Compare array elements
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

export function parseQueryString(queryString) {
  if (!queryString) {
    return null; // Return null for empty query string
  }
  const params = new URLSearchParams(queryString);
  const result = {};
  for (const [key, value] of params.entries()) {
    if (key === 'title') {
      result[key] = value;
    } else {
      result[key] = value.split(',');
    }
  }

  return result;
}

export const filterPropertiesToString = (prop: string): string => {
  switch (prop) {
    case 'category':
      return 'Category';
      break;
    case 'experience':
      return 'Experience';
      break;
    case 'jobType':
      return 'Job Type';
      break;
    case 'workStyle':
      return 'Work Style';
      break;
    case 'title':
      return 'Title';
      break;
    default:
      return '';
  }
};
