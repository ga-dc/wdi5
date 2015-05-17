# W10D01 Homework

The Portfolio Standup is **this Thursday, May 28th** starting at 1:30pm.

If you have not yet signed up for a time slot, you can do so here: <https://docs.google.com/spreadsheets/d/199rhWBQOytSUgIZEHDx_JtVdoawSJxF8/edit#gid=0>

In order to prepare for Thursday, you will create a portfolio page that incorporates Sass and Responsive Web Design.

## Wat do?

Create a portfolio page that incorporates Sass and Responsive Web Design by following the steps below. Then, publish it on `github.io`.

1. Create a new repository.
- Checkout a new branch called `step1html`.
- Create an `index.html` portfolio page.
  - You **may not** include any CSS or Javascript (yet) -- just plain old HTML.
  - You **must** run your HTML through the validator at <http://validator.w3.org/#validate_by_input> and fix any errors (in red). Bonus points for fixing warnings (in yellow).
  - Things you might want to include:
    - A link to your Github repository
    - A brief bio about yourself
    - A photo of you
    - A link to your LinkedIn, Twitter, and other social media pages
- **Push your progress to Github.**
- Checkout a new branch called `step2normalize`.
- Normalize the CSS of your `index.html`.
  - You can use an existing library, or do it yourself! The goal is to remove the most obvious default styling provided by your web browser, like margins around `<body>`. Note that you're not doing any styling yet; just removing the default styling!
- **Push**, and checkout a new branch called `step3theme`.
- Add a new stylesheet called `themes.css` to your `index.html`.
  - In this stylesheet, define the styles that don't affect how things are **arranged** on your page, just how they **look**: font colors, font faces, font weights, italics, text decorations, background colors, box shadows, border radii... These are things you would want to be constant regardless of whether your website is being viewed on a Jumbotron or a Tamagatchi.
- Validate your CSS at <http://jigsaw.w3.org/css-validator/#validate_by_input> and fix any errors.
- **Push**, and checkout a new branch called `step4desktop`.
- Add a new stylesheet called `desktop.css` to your `index.html`.
  - In this stylesheet, define the styles that **do** affect how things are arranged on your page.
- **Validate**, **push**, and checkout a new branch called `step5mobile`.
- Add a new stylesheet called `mobile.css` to your `index.html`.
  - In this stylesheet, define the styles that affect how things are arranged on your page, should it be viewed on a screen measuring 320px wide by 480px tall.
  - Really useful stuff:
    - <https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en>
    - When you "inspect element" in Chrome, at the top-left of the Inspector window, there's a little mobile phone-looking icon. Click it to enable Device Mode.
- **Validate**, **push**, and checkout a new branch called `step6together`.
- Update your page so that it automatically switches between the appropriate stylesheets. You may do this using `@media` queries or the `media` attribute of `<link>`.
- **Validate**, **push**, and checkout a new branch called `step7sass`.
- Use SASS to compile and minify your stylesheets.
  - Replace repeated values with variables (hex values, font families, etc)
  - Nest at least one selector to organize your styles.
  - Use at least one `@extend` or `@include`.
- **Push**, checkout a new branch called `gh-pages`, and **push**.
  - Your page will now be published online! If your repository is named `myportfolio`, and your username is `HumptyDumpty1337`, it will be visible at `https://HumptyDumpty1337.github.io/myportfolio`.

## Holy cow, this looks like a lot of work!

If any of your stylesheets is more than 50 lines long, you're working too hard!

Don't feel like you have to make your page crazy-fancy! Your page should just look *intentional*, like you put some of yourself into it. You have lots of time over the rest of class to soup it up.
