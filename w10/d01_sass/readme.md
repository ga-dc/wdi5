# Sass

## Learning Objectives

- Explain what a preprocessor is and what problem it solves
- Use variables and nesting to dry up CSS
- Use color functions to create dynamic color schemes
- Explain what `&` is and why we use it
- Use @include and @extend to create mixins and inherit from other rules

## Problems with CSS
- Not DRY: need to keep reusing values for things like colors and sizes even when they should all change at once
- Not modular or encapsulated: doesn't have a good way to namespace where things should be, everything is "global"
- white space

## What can Sass do?

- http://codepen.io/jshawl/pen/cLJal
- http://codepen.io/jshawl/pen/nHDLz
- http://codepen.io/jshawl/pen/wpeit
- http://codepen.io/jshawl/pen/bcjyH
- http://codepen.io/jshawl/pen/cJjIm

## What is preprocessing?

Sass is a meta-language we write that compiles to CSS. It's like a DSL for CSS that allows us
to use programming like features that are not natively available to CSS.

## Variables

```scss
$brand: #BADA55;
a{
  color: $brand;
}
```

## Nesting

```scss
h1{
  text-decoration:none;
  a:hover{
    text-decoration:underline;
  }
}
```

## The & selector

```scss
a{
  color: #BADA55;
  &:hover{
    color: blue;
  }
}
```

## We do: Local Setup w/o rails

    $ gem install sass
    $ sass scss/styles.scss:css/styles.css
    $ sass --watch scss:css

## You do: Refactor the fashion blog.

## Mixins && Inheritance

```scss
@mixin clearfix(){
  content: '';
  display:table;
  clear:both;
}

body:after{
  @include clearfix();
}
```

**Color functions** - `darken()`, `lighten()`, and `rgba()`

**Exercise**: Mixins && Inheritance

## Compass && Autoprefixer

There are many common use-cases for mixins:

- clearfix
- vendor prefixes
- reusable styles

Compass is a collection of mixins and functions you can use in your own project. It's like the jQuery of CSS.

Autoprefixer is a post-processor. It minifies and auto-prefixes your css.

## We do: Setup with rails

## `@import` vs the asset pipeline.

use `@import` instead of sprockets to import your sass files: http://pivotallabs.com/structure-your-sass-files-with-import/

## You do:

Check out Sass' control directives - http://sass-lang.com/documentation/file.SASS_REFERENCE.html#control_directives__expressions

Is Sass a programming language? Why or why not?

When would you use a loop, a conditional, or a function?
