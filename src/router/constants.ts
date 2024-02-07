/**
 * Routes
 */
export const ROUTES = {
  HOME: '/',
  AUTH: '/auth',
  SEARCH: '/search',
  COMPANY: '/company',
  JOB: '/job',
  APPLICATIONS: '/applications',
  MEETINGS: '/meetings',
  NOTIFICATIONS: '/notifications',
  ME: '/me',
};

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
  ? import.meta.env.VITE_API_BASE_URL
  : 'http://localhost:8000';
