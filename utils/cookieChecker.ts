import Cookies from 'js-cookie';

export const checkCookie = (): boolean => {
  console.log("All cookies:", Cookies.get());
  const token = Cookies.get('csrf');
  console.log("CSRF token:", token);
  return !!token;
};
