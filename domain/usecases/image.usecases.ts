import S3 from "aws-sdk/clients/s3"

export class ImageUsecases {
  private readonly s3 = new S3({
    region: "eu-central-1",
    accessKeyId: process.env.ACCESS_KEY_AWS,
    secretAccessKey: process.env.SECRET_KEY_AWS
  })
  
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