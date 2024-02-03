/**
 * Routes
 */
export const ROUTES = {
  HOME: '/',
  SEARCH: '/search',
  COMPANY: '/company',
  APPLICATIONS: '/applications',
  MEETINGS: '/meetings',
  NOTIFICATIONS: '/notifications',
};

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
  ? import.meta.env.VITE_API_BASE_URL
  : 'http://localhost:8000';
