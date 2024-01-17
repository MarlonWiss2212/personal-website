import { expect } from "vitest";
import { loadEnvConfig } from '@next/env'
import { ImageUsecases } from "./image.usecases";
import S3 from "aws-sdk/clients/s3";

describe("Image UseCases", () => {
  let s3: S3
  let imageUsecases: ImageUsecases;

  beforeEach( () => {
    loadEnvConfig(process.cwd())

    //TODO: TEST BUCKET IN FUTURE
    s3 = new S3({
      region: "eu-central-1",
      accessKeyId: process.env.ACCESS_KEY_AWS,
      secretAccessKey: process.env.SECRET_KEY_AWS
    })
    imageUsecases = new ImageUsecases(s3)
    vitest.spyOn(s3, "getSignedUrlPromise");
  });

  afterEach(() => {
    vitest.resetAllMocks();
  });
  
  it("should return the generated link", async () => {
    const link = "/link"
    vitest.spyOn(s3, "getSignedUrlPromise").mockResolvedValueOnce(link);
    const result = await imageUsecases.getImage("/link")
    expect(result).toBe(link)
  })
})