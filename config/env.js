import { config } from 'dotenv';

// Fix template literal syntax and default env
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

// Add default port value for safety
export const PORT = process.env.PORT || 3000;
export const { NODE_ENV } = process.env;