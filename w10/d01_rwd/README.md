# Responsive Web Design

- Use `@media` queries and `meta` tags to adjust layouts based on screen size
- Distinguish between dimensions expressed as viewport units, pixels, percentages, and ems
- Test a website in various browsers using cross-browser testing tools
- Incorporate progressive enhancement into the development of a web application
- Describe which CSS and Javascript properties are accepted by which browsers

---

Just jotting down ideas

- HTML5 shiv
  - https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js
- BrowserStack
- `@font-face` for IE7
```
@font-face {
    font-family: 'OpenSans';
    src: url('fonts/OpenSans-Light-webfont.eot');
    src: url('fonts/OpenSans-Light-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/OpenSans-Light-webfont.woff') format('woff'),
         url('fonts/OpenSans-Light-webfont.ttf') format('truetype'),
         url('fonts/OpenSans-Light-webfont.svg#OpenSansLight') format('svg');
    font-weight: 300;
    font-style: normal;
}
```

1. Write semantically-correct HTML
  - Test it at http://validator.w3.org/
  - Why is this important?
    - Different browsers fix incorrect HTML different ways
- Add CSS3 for most common user-view
  - Validate it at http://jigsaw.w3.org/css-validator/#validate_by_input
  - How to organize CSS?
    - Fonts faces, colors, font weights, etc. all in one place
    - Line heights, font sizes, etc in another place
    - Establish base CSS in px, then use em
      - Why?
- Add auxilliary stylesheets for other view types
  - `<link rel="stylesheet" media="screen and (min-width:500px)" href="whatever.css" />`

- Why use relative units?
- `<wbr />` and `&shy;`
  - Shy is better
- `max-width` and `min-width`
- What's wrong with `:hover`?
  - Smartphones can't really hover
- Giving `<img />` a background image
- page-break
- margin and padding percentages are for the WIDTH of the containing block
