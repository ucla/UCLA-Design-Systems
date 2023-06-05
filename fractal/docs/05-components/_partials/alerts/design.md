---
handle: alerts-design
---
An alert keeps users informed of important and sometimes time-sensitive changes.

#### When to use

Use alerts to validate steps taken by users or denote a system change. Use alerts aparingly. Show one at a time to avoid overwhelming users.

**System status messages.** An alert may be a notification that keeps people informed of the status of the system and may or may not require the user to respond. Such notifications may be errors, warning, and general updates.

**Validation messages.** An alert may be a validation message that informs a user they just took an action that needs to be corrected or a confirmation that a task was completed successfully.

**Broad context.** Alers should refer to something relatively broad such as the state of a system, the topic of a page or a unit or department status. For specific field feedback or page elements, see Forms/Error Messages.

#### Anatomy

![Alerts Anatomy](/theme-assets/img/docs/components/alerts/anatomy.svg)

**1. Title (required)**

**2. Leading icon**

**3. Container (required)**

**4. Trailing Dismiss Icon**

Alert will disappear on click.

#### Best practices

**Consider next steps.** When the user is required to do something in response to an alert, let them know what they need to do, and make that task as easy as possible. Think about how much context to provide with your message. For example, a notification of a system change may require more contextual information than a validation message. Write the message in concise, human-readable language; avoid jargon and computer code.

**Be polite.** Be polite in error messages &mdash; don't blame the user.

**Don't overdo it.** Too many notifications will either overwhelm or annoy the user and are likely to be ignored.

**Allow a user to dismiss a notification wherever appropriate.**

**Understand the user's context.** Don't include notifications that aren't related to the user's current goal.

#### Examples

<iframe id="docIframe" class="docs-iframe mt-5"
  src=""
></iframe>

```html
{{render '@alerts'}}
```

<script>
  if (window.frctl.env === "static") {
  document.getElementById("docIframe").src = "../../components/preview/alerts.html"
  } else {
  document.getElementById("docIframe").src = "../../components/preview/alerts"
  }
</script>