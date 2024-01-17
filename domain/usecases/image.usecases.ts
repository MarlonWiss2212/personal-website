import S3 from "aws-sdk/clients/s3"

export class ImageUsecases {
  private readonly s3;

  constructor(s3Client: S3) {
    this.s3 = s3Client
  }
  
  /**
   * 
   * @param key - The key of the image in the bucket
   * @returns - The image url
   */
  async getImage(key: string): Promise<string> {
    return await this.s3.getSignedUrlPromise('getObject', {
      Key: key,
      Bucket: process.env.BUCKET_NAME_AWS,
      Expires: 60 * 60 * 4
    });
  }
}