---
title: Alerts
---
{{render '@support'}}

Notify users of an important change or new piece of information.

## Usage

### Usability Guidance 

* Use alerts to validate steps taken by users or denote a system change.
* Use alerts sparingly. Show one at a time to avoid overwhelming users.
* Be polite and encouraging, and inform users how to respond to or fix a problem.

### Code Guidance 

* Be sure to include the default "alert" classname in addition to a specific "alert" classname. This will allow the element to inherit default alert styles.
* Alerts will take the full width of the container.
* Adding the "inline-block" classname to an alert element will allow for usage of an alert element that only takes the width of the text content of the alert.

### Accessibility Requirements 

* Design alerts to visually contrast with surrounding content.
* Use a high-contrast outline or background color and an icon for high visibility.
* Use the ARIA `role="alert"` to notify assistive technology of time-sensitive information.

**Further Reading**

* [Using the alert role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role) (Mozilla)

## Primary Alert


### Code 

```
{{view '@alerts--primary'}}
```

## Secondary Alert

### Code 

```
{{view '@alerts--secondary'}}
```

## Success Alert

### Code 

```
{{view '@alerts--success'}}
```

## Error Alert

### Code 

```
{{view '@alerts--error'}}
```

## Warning Alert

### Code 

```
{{view '@alerts--warning'}}
```
