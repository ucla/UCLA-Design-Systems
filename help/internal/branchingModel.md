## Branch Info

1. "main" - This is the "production" branch. When the beta release is ready for production, merge the 'beta' branch into the 'mai'n branch. This will trigger a automatic semantic release and a version number will be assigned and the branch will be tagged. Release Notes will also automatically be generated.

1. "beta" - This is a release branch for 'beta'. Whenever the project is ready to create a beta release, merge the 'develop' branch into the 'beta' branch. This will trigger a automatic semantic release and a version number will be assigned and the branch will be tagged. Release Notes will also autmatically be generated.

1. "develop" - This is the "development" branch. All work that is in development get's merged into this branch. This branch can be merge into 'beta' when it's ready to have a beta release or merged into 'dev-deploy' to deploy code to the development servers on aws.

1. "dev-deploy" - This is a deployment branch to the development server environment on AWS. This environment is used to review all the development work. http://dev.designsystem.brand.ucla.edu.s3-website-us-west-2.amazonaws.com/

1. "prod-deploy" - This is a deployment branch to deploy code the the production server environment on AWS. This environment will be the live website that is public facing. Code should only deploy to this branch that is ready to be live to the public.

 - [Go Back to Main README](../../README.md)
