import fs from 'fs';
import path from 'path';

const ENV = process.env.NODE_ENV || 'local';

const getPropertiesFilePath = () => {
  switch (ENV) {
    case 'development':
      return path.resolve(process.cwd(), 'local-properties.properties');
    case 'production':
      return path.resolve(process.cwd(), 'prod-properties.properties');
    default:
      return path.resolve(process.cwd(), 'local-properties.properties');
  }
};

let BACKEND_URL = 'http://localhost:3000';

if (typeof window === 'undefined') {
  const propertiesFilePath = getPropertiesFilePath();
  const properties = fs.readFileSync(propertiesFilePath, 'utf-8')
    .split('\n')
    .reduce((acc, line) => {
      const [key, value] = line.split('=');
      acc[key.trim()] = value.trim();
      return acc;
    }, {} as Record<string, string>);
  BACKEND_URL = properties.BACKEND_URL;
}

export { BACKEND_URL };
