import AWS from 'aws-sdk';

const s3 = new AWS.S3();

export const uploadToS3 = async (bucket: string, key: string, body: Buffer | string) => {
  try {
    const params = { Bucket: bucket, Key: key, Body: body };
    await s3.upload(params).promise();
  } catch (error) {
    console.error('Error uploading to S3:', error);
    throw new Error('S3 upload operation failed');
  }
};

export const downloadFromS3 = async (bucket: string, key: string) => {
  try {
    const params = { Bucket: bucket, Key: key };
    const data = await s3.getObject(params).promise();
    return data.Body;
  } catch (error) {
    console.error('Error downloading from S3:', error);
    throw new Error('S3 download operation failed');
  }
};