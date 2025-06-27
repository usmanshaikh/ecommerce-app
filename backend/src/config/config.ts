import dotenv from 'dotenv';
import Joi from 'joi';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
  PORT: Joi.number().default(3000),
  MONGODB_URL: Joi.string().required().description('MongoDB connection URL'),
  JWT_SECRET: Joi.string().required().description('JWT secret key'),
  JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().default(30).description('Access token expiration time in minutes'),
  JWT_REFRESH_EXPIRATION_DAYS: Joi.number().default(30).description('Refresh token expiration time in days'),

  // Redis configuration
  REDIS_HOST: Joi.string().required().description('Redis server host'),
  REDIS_PORT: Joi.number().default(6379).description('Redis server port'),
  REDIS_PASSWORD: Joi.string().allow('').description('Password for Redis server'),

  // AWS configuration
  AWS_ACCESS_KEY_ID: Joi.string().required().description('AWS access key ID'),
  AWS_SECRET_ACCESS_KEY: Joi.string().required().description('AWS secret access key'),
  AWS_REGION: Joi.string().allow('').required().description('AWS region'),
  AWS_S3_BUCKET_NAME: Joi.string().required().description('Aws S3 bucket name'),

  // Stripe configuration
  STRIPE_SECRET_KEY: Joi.string().required().description('Stripe secret key'),
}).unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

// Replace placeholder <DATABASE> in MongoDB URL based on environment
envVars.MONGODB_URL = envVars.MONGODB_URL.replace(/<DATABASE>/g, envVars.NODE_ENV);

export default {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  origin_url: envVars.ORIGIN_URL,
  mongoose: {
    url: envVars.MONGODB_URL,
  },
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes: envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    verifyEmailExpirationMinutes: envVars.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
  },
  redis: {
    host: envVars.REDIS_HOST,
    port: envVars.REDIS_PORT,
    password: envVars.REDIS_PASSWORD,
  },
  aws: {
    accessKeyId: envVars.AWS_ACCESS_KEY_ID,
    secretAccessKey: envVars.AWS_SECRET_ACCESS_KEY,
    region: envVars.AWS_REGION,
    s3BucketName: envVars.AWS_S3_BUCKET_NAME,
  },
  stripeSecretKey: envVars.STRIPE_SECRET_KEY,
};
