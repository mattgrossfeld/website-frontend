import { z } from 'zod';
import dayjs from 'dayjs';

const nameRegex = /^[a-zA-Z]{1,25}$/;
const usernameRegex = /^[a-zA-Z0-9]{1,25}$/;
const displayNameRegex = /^(?!\s*$)[a-zA-Z0-9 ]{1,25}$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

const eighteenYearsAgo = dayjs().subtract(18, 'years').toDate();

export const registerSchema = z.object({
  firstName: z.string().nonempty().regex(nameRegex, 'First name must be 25 characters or less and contain no numbers or special characters or spaces'),
  lastName: z.string().nonempty().regex(nameRegex, 'Last name must be 25 characters or less and contain no numbers or special characters or spaces'),
  userName: z.string().nonempty().regex(usernameRegex, 'Username must be 25 characters or less and can contain numbers but no special characters or spaces'),
  displayName: z.string().nonempty().regex(displayNameRegex, 'Display name must be 25 characters or less and can contain numbers and spaces but no special characters. The name cannot be whitespace characters only'),
  email: z.string().nonempty().email('Invalid email address').max(50, 'Email must be 50 characters or less'),
  password: z.string().nonempty().regex(passwordRegex, 'Password must be at least 8 characters long and contain at least one special character and one number'),
  dateOfBirth: z.date().max(eighteenYearsAgo, 'You must be 18 years or older'),
});
