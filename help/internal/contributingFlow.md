## Contributing Flow (BETA)

1. Contributor creates a working branch based off of the "develop" branch
1. Following the "Contributing Flow", the contributor makes changes, commits and push changes to the their own working branch. They then create a pull request back into the "develop" branch.
1. PR is reviewed, tags are checked, and branch is merged into the "develop" branch
1. If the develop branch requires code to be deployed to the development website then a PR is created to 'dev-deploy'
1. Reviewers will review the PR and merge, then a git action will deploy the code to the AWS servers.
1. Once the dev website is reviewed and approved a beta release will be made by merging 'development' into 'beta'. The code may also be deployed to the production website by merging 'beta' into the 'prod-deploy' branch.
1. After 'beta' has been fully tested and verified by real world beta testers it is ready for a release
1. Merge 'beta' into 'main' and a release will be made.
1. Merge 'main' into 'prod-deploy' to deploy code to production.

 - [Go Back to Main README](./../README.md)
