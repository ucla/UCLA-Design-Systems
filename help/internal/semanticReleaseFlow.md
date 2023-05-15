## Semantic Versioning Automation

This project uses the semantic-release npm package to automate the versioning.

To make a Beta relase just merge the 'develop' branch into the 'beta' branch and a git action script will be triggered which will create a tagged version of the project and will create release notes. 

The semantic-release plugin will read the commit messages to determine the versioning so it's important to follow the [convetional commit](https://www.conventionalcommits.org/en/v1.0.0/) standards.

 - [Go Back to Main README](./../README.md)