## Bucket + Cloud(S3) URLs (BETA)

| Environment | Cloud URL | S3 Bucket URL |
|-|-|-|
| Production | tbd | tbd|
| Development | none | http://dev.designsystem.brand.ucla.edu.s3-website-us-west-2.amazonaws.com/ |

## CDN Distribution and Invalidation Information (BETA)
* This project's documentation and component public library in production environment is deployed behind Cloudfront CDN. To see updates instantly after updates have been to production, you must manually invalidate the files. For more on "how to invalidate" see the AWS docs [here](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html).
* A CDN distribution and DNS configuration have not been configured for the development environment public library. That means the URLs to the public library shown in the "Download" page in development will not work. To view the public styles and scripts, please navigate to the URL in the [S3 bucket](https://s3.console.aws.amazon.com/s3/buckets/dev.designsystem.brand.ucla.edu?region=us-west-2&tab=objects).

 - [Go Back to Main README](../../README.md)
