const ENV = process.env.NODE_ENV || 'local';

const getBackendUrl = () => {
  switch (ENV) {
    case 'development':
      return process.env.NEXT_PUBLIC_BACKEND_URL_DEV || 'https://localhost:3000';
    case 'production':
      return process.env.NEXT_PUBLIC_BACKEND_URL_PROD || 'http://prod.example.com';
    default:
      return process.env.NEXT_PUBLIC_BACKEND_URL_LOCAL || 'http://localhost:3000';
  }
};

export const BACKEND_URL = getBackendUrl();
