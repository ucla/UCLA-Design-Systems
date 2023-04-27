# Managing Colors templates and documentation

Author: Allison Lu, alu@stratcomm.ucla.edu

This is experimentation and by no means the most effective way to execute this nor the final product. I wanted to create a "grid" of swatches for each color, similar to what we have here: https://ucla.invisionapp.com/dsm/ucla/brand-components/folder/colors/5b5f4e308c401c00112c6e3b.

## TODO:
* create a "top" Handlebars template that is more abstract than what we have now, so that when we make a change to the template, we don't have to make the change for ALL templates.
* create Design Tokens to make data variables usable beyond documentation. (more about design tokens here: https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421)


## Relevant files:
```
/
├─ src/
   ├─ components/    # Components
   │  └─ 98-colors   # …that render color component previews
   │      ├─ colors--x.hbs        # Handlebar templates for Brand color categories
   │      ├─ colors.config.json   # Configuration file containing context data
   │      └─ README.md            # This file
   │
   └─ docs/          # Documentation
      ├─ 04-colors/  # contains markdown files that renders the component views from the Handlebar files
      └─ scss        # Stylesheets
          ├─ _colors-docs.scss  # styles for component view from Handlebar files
          └─ _colors.scss       # color variables only

```
