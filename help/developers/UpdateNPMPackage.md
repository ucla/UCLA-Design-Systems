# Learn How To Update the NPM Package

---

Updating the NPM Package will require contacting [John Kim](mailto:johnkim@stratcomm.ucla.edu) who has access to the account that manages the Design System NPM Package at [npmjs.com](https://npmjs.com). This package will allow people to include the UCLA Design System into their project node dependency using the `npm install` command.

To Describe the step to get the package into npmjs.

1. Have a clone of the Design System Locally.
1. Navigate to the `fractal` directory.
1. Check if the version is correct by opening `fractal/package.json` then checking the `version` value. If it's not corerect, update that version number and save the file.
1. In the same file check the `files` value to see if everything you want is included inside the package. If not you can update the array and then save the file.
1. Run `npm install --save`
1. Test what will be published with the package by running `npm publish --dry-run`. This will give a listing of all files that will be sent to the repository of npm packages.
1. If everything looks good then your local environment must be logged into the account that manages the Design System Package. Currently John Kim is the account owner, if authorized to do so, he may be able to help setup your local to login to npmjs.com. The command is `npm login`
1. finally run `npm publish`. This will now push all the files to npmjs.