import AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

class FileService {
  private s3: AWS.S3;
  private upload: multer.Multer;

  constructor() {
    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });

    this.upload = multer({
      storage: multerS3({
        s3: this.s3,
        bucket: process.env.AWS_S3_BUCKET!,
        acl: 'public-read',
        key: (req, file, cb) => {
          cb(null, `${Date.now().toString()}-${file.originalname}`);
        },
      }),
    });
  }

  getFileUploadMiddleware() {
    return this.upload.single('file');
  }
}

export default new FileService();