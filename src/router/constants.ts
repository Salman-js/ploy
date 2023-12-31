/**
 * Routes
 */
export const ROUTES = {
  HOME: '/',
  SEARCH: '/search',
};

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
  ? import.meta.env.VITE_API_BASE_URL
  : 'http://localhost:8000';
