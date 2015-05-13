# CSS Grids!

LO's
- explain some benefits of how grid systems help with web design
- utilize css grids to structure html

## Opening Framing (5m)
I personally have always had a hard time with CSS. It's tricky, there's always something a little bit off about how you've sized this element or that one. At the crux of every web page is the overall layout of the content. It would be nice if we could compartmentalize in a nice little system we can organize ourselves.

There are a lot of different front end frameworks/gems that allow you to do this sort of behavior, but today I'd like to handroll it!

[A list of a bunch of them](http://designinstruct.com/web-design/responsive-css-grid/)

The more massive front-end frameworks also have a grid system, like bootstrap/foundation.

## I do(Code Along 30m)
> For this lesson, don't code and just watch me as I code. I will push up the files so you can have a reference. But I think you will gain more from just watching then following along.

The idea behind the grid system is that we can divide elements across the web page into "even" segments. We can declare classes for css that will pretty much only contain a width property

> The grid system we'll be building today will be a 12 column grid system. The reason we use 12 and that it is widely used is because it can be evenly divided by 1, 2, 3, 4 and 6.

Alright, let's set up the html for our grid system in an `index.html` file: (nothing really new here)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel=stylesheet href="styles.css" type="text/css">
</head>
<body>
</body>
</html>
```

CSS setup in `styles.css` file:
```css
.row,
.column {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.row:before,
.row:after {
    content: " ";
    display: table;
}

.row:after {
    clear: both;
}

.column {
    position: relative;
    float: left;
    height: 100%;
}
```
[Paul Irish on box-sizing Border Box](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)
- the reason we want `box-sizing: border box` is because if we say we want the width of column to be 25% it better be 25% and not 26.2% or something else

[On Clearfixes](http://nicolasgallagher.com/micro-clearfix-hack/)
- the TLDR version prevents things from being in the space of the row or column

Next I want to define all of the classes that will contain the different widths of the grids. Additionally I'm jsut going to add some classes that change the background color in `styles.css`:

```css
.column-1{
  width: 8.3333333333333%;
}

.column-2{
  width:16.6666666666667%;
}

.column-3{
  width:25%;
}

.column-4{
  width:33.3333333333333%;
}

.column-5{
  width:41.6666666666667%
}

.column-6{
  width:50%
}

.column-7{
  width:58.3333333333333%;
}

.column-8{
  width:66.6666666666667%;
}

.column-9{
  width:75%
}

.column-10{
  width:83.3333333333333%;
}

.column-11{
  width:91.6666666666667%;
}

.column-12{
  width:100%
}

.green {
  background: green;
}

.blue{
  background: blue;
}

.red{
  background:red;
}
```

Using the emmet package for atom just gonna generate an html site:

[Emmet Docs](http://docs.emmet.io/)

`header>nav>h1+p*6>lorem1`
`section>div>p*3>lorem80`
`aside>p*5>lorem5`(inside section)`
`footer>div+nav+div`
`p*3>lorem1`(inside nav)

Cool, now that we have some dummy content, let's add some classes to it! (Check out solution for final layout!)
