# Learn How To Contribute

---

## Table of Contents

* [Ways to contribute](#ways-to-contribute)
* [Dev Workflow](#dev-workflow)

---

# Ways to contribute

These are the main ways to contribute to this project:
- opening an issue
- proposing a new feature idea or enhancement
- writing documentation
- fixing bugs

For more information, visit [Code Contributions documentation](/fractal/docs/07-contribute/01-index.md) on the Fractal website.

---

# Dev Workflow

1. If you haven't done so already, start by [setting up your local environment](./getSetup.md).

2. [Branch off](https://docs.github.com/en/get-started/quickstart/hello-world#creating-a-branch) of the `develop` branch to make sure you have the latest updates.

  - Prefix your branch name with `"CL-"` and the corresponding issue number. e.g. If you are working on **issue #30 Accordion bug**, name your branch "**CL-30-accordion-bug**".

  ```
  git checkout -b CL-{{issue number}}-{{new branch name}}
  ```

3. All edits should be made in the ***/fractal/*** folder. See more information about the [project directory](./projectHierarchy.md).

4. After making your changes locally, [commit your changes](https://docs.github.com/en/get-started/quickstart/hello-world#making-and-committing-changes) so others have a log of your updates. Please be sure to use the [conventional commit](https://cheatography.com/albelop/cheat-sheets/conventional-commits/) standard.

  ```
  git commit -am "<type>[optional scope]: <description of your updates>"
  ```

5. [Push your new branch](https://github.com/git-guides/git-push) to the remote repository.

  ```
  git push --set-upstream origin CL-{{issue number}}-{{new branch name}}
  ```

6. If you've already pushed your current branch, you might just need to push your changes.

  ```
  git push
  ```

7. When you have completed your work, submit a [pull request (PR)](https://github.com/ucla/UCLA-Design-Systems/compare) and set the destination branch to `develop` Be descriptive in your answers. The review process will begin and feedback (if any) will be added to the pull request.
  - Review ["Making a Pull Request" tutorial](https://docs.github.com/en/get-started/quickstart/hello-world#opening-a-pull-request) if needed.

---

:arrow_left: [Go Back to Main README](../../README.md)