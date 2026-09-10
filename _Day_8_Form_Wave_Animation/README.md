# Day 8 Form Wave Animation

## **Description of project**

-   We're going to build a simple login form with a wave effect on the labels.
-   For example if I click in the input, the label will then have a wave animation.
-   We're going to basically wrap a span around each letter of the inputs using JavaScript.
-   Then we're going to add a transition so the letters moves up when we focus on the input.
-   And we're also going to add a dynamic transition delay so that it gives that wave effect, where each letter goes up at a different time.

## **Coding Notes**

## *<b>HTML</b>*

## What the form tag does

The `<form>` tag creates an HTML form, which is a section of a page where users enter information and submit it.

It is used for things like:

- login screens
- signup forms
- contact pages
- search boxes
- checkout forms

### In plain terms:
It tells the browser:

- “These inputs are related”
- “This is where the user enters data”
- “When the user clicks submit, send that data somewhere”

### Example:
```html
<form>
  <input type="text" name="email">
  <input type="password" name="password">
  <button>Submit</button>
</form>
```

This groups the inputs so they can be submitted together.

### Important attributes:
- `action` = where to send the data
- `method` = how to send it (`GET` or `POST`)

Example:
```html
<form action="/login" method="POST">
```

That means when the user submits, the browser sends the data to `/login` using POST.

### In your project
In this login page, the form is used to collect:

- email
- password

and then the login button is part of that form. It’s not doing anything fancy by itself; it mainly organizes the inputs so the browser can handle them as a single form.

`required` tells the browser that the input must contain a value before the form can be submitted.

In your project:

```html
<input type="text" required>
<input type="password" required>
```

This means:

- the email field cannot be empty
- the password field cannot be empty
- the browser automatically shows a validation message if either is blank
- the form submission is stopped until both fields contain something

Without `required`, the browser would allow the form to submit with empty fields.

It only checks that the fields are not empty. It does not verify that the email is actually valid or that the password is secure. For email validation, you could use:

```html
<input type="email" required>
```

`type="email"` checks that the value has a basic email format, such as:

```text
person@example.com
```

Combined with `required`:

```html
<input type="email" required>
```

- `type="email"` checks the format.
- `required` prevents the field from being empty.

You can also add a custom rule with `pattern`:

```html
<input
  type="email"
  required
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
```

Keep in mind that browser validation only provides basic checking. A server should validate the email again before accepting or storing it.


## *<b>CSS</b>*


## *<b>Javascript</b>*
