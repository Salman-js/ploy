import { IFilter } from '@/interface/search.interface';

export const sentenceCase = (str: string): string => {
  if (!str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export function objectToQueryString(obj: IFilter): string {
  const queryParams: string[] = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value !== undefined && value !== null) {
        if (Array.isArray(value) && value.length > 0) {
          queryParams.push(`${key}=${value.join(',')}`);
        } else if (!Array.isArray(value) && value !== '') {
          queryParams.push(`${key}=${encodeURIComponent(value)}`);
        }
      }
    }
  }

  return queryParams.join('&');
}
