# Responsive Web Design

- Use `@media` queries and `meta` tags to adjust layouts based on screen size
- Distinguish between dimensions expressed as viewport units, pixels, percentages, and ems
- Test a website in various browsers using cross-browser testing tools
- Incorporate progressive enhancement into the development of a web application
- Describe which CSS and Javascript properties are accepted by which browsers

---

## Intro

- 10 minutes:
  - http://motherfuckingwebsite.com/
  - http://bettermotherfuckingwebsite.com/

## Steps to making a responsive website

Three main things to remember:
1. Progressively enhance
2. Validate, validate, validate
3. Test across browsers


- Make a website via progressive enhancement
  - What is progressive enhancement?
  - How would this apply to web browsers?

### 1. Write your HTML
- What tags should you NOT use?
```
<center>
<b>
<i>
<u>
<br /> (In moderation)
<hr /> (In moderation)
<h4>
<h5>
<h6>
<center>
<big>
```
- Validate!
  - validator.w3.org
  - Why is this important?
    - Different tags are supported by different browsers, including FUTURE browsers

#### You do
- Turn to your partner, get 3 sentences, make a website about them

### 2. Normalize your CSS and HTML
- Why is this important?
  - Makes sure you don't have default browser styles messing up everything
  - Example: By default `<body>`has margins in Chrome
- Normalize HTML
  - HTML5 shiv
    - https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js
    - Adds in `<section>` and stuff for IE9-
- Normalize CSS
  - Normalize CSS
    - http://necolas.github.io/normalize.css/
  - Hand-rolled (VALIDATE)
    - http://jigsaw.w3.org/css-validator
```
*
{
	margin:0;
	border:0;
	padding:0;
	border-collapse:collapse;
	border-spacing:0;
	font-weight:inherit;
	font-size:inherit;
	font-style:inherit;
	color:inherit;
	background-color:transparent;
	box-sizing:border-box;
	font-family:inherit
}
*:focus
{
	outline:0
}
```

### 3. Define your themes
- The things you want to be constant across all pages of your site, regardless of what kind of device you're using
- Not doing arrangement/layout yet!
  - Why?
- What might we include?
```
color
background-color
font-family
text-decoration
font-weight
font-size
border-style
border-color
border-radius
NOT border-width
```

- How to organize CSS?
  - Couple options:
    - Order of appearance
    - Tags first, then classes, then IDs
  - Whatever works best for you!
- **VALIDATE!!**

### 4. Define default layout
- Most basic layout, using most basic CSS properties
- Make it work on old browsers
- Relative units
  - `em` vs `px` vs `%`
  - Why use relative units?
- `<wbr />` and `&shy;`
  - Shy is better
- `max-width` and `min-width`
- Margin and padding percentages are for the WIDTH of the containing block

### 5. Define other layouts
- Media queries
  - `<link rel="stylesheet" media="screen and (min-width:500px)" href="whatever.css" />`
    - Note that this still loads everything at the start. If effectively just wraps a media query around it.
  - `@media (max-width:700px){}`
    - https://developer.mozilla.org/en-US/docs/Web/CSS/@media
- `vh` vs `vw` vs `rem`
- What's wrong with `:hover`?
  - Smartphones can't really hover
- Giving `<img />` a background image
- `page-break`
