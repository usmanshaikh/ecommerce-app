import AWS from 'aws-sdk';
import multerS3 from 'multer-s3';
import multer from 'multer';
import type { Request } from 'express';
import config from '../config/config';

AWS.config.update({
  accessKeyId: config.aws.accessKeyId,
  secretAccessKey: config.aws.secretAccessKey,
  region: config.aws.region,
});

const s3 = new AWS.S3();

export const productImageUpload = multer({
  storage: multerS3({
    s3,
    bucket: config.aws.s3BucketName,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: (req: Request, file: Express.Multer.File, cb: (error: any, metadata?: any) => void) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req: Request, file: Express.Multer.File, cb: (error: any, key?: string) => void) => {
      const fileName = `products/${Date.now().toString()}-${file.originalname}`;
      cb(null, fileName);
    },
  }),
});
