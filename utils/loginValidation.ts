import { z } from 'zod';

const usernameRegex = /^[a-zA-Z0-9]{1,25}$/;

export const loginSchema = z.object({
  userName: z.string().nonempty('Username is required').regex(usernameRegex, 'Username must be 25 characters or less and can contain numbers but no special characters or spaces').or(z.string().email('Invalid email address')),
  password: z.string().nonempty('Password is required'),
});
