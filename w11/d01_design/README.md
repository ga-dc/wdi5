# W11D01: Digital Product Design

## Learning Objectives

- Apply basic principles of design to a project
- Embed fonts into a website
- Incorporate fonts from a CDN
- Distinguish between appropriate uses of different image types
- Use pure CSS transitions and animations in place of Javascript
- Explain what "keyframes", "easing", "tweening" are and how they relate to CSS

## Intro

- The biggest "suck" about being a developer
  - Even if your product has the most amazing functionality ever, ultimately how it *looks* and not how it works will create the all-important first impression.
  - In most cases, a non-functional product that looks really slick is "better" than a functioning product that looks like poo.

- The double-edged sword of design
  - Everyone's opinion of design is just as valid as everyone else's opinion.
  - If Joe the Plumber thinks your interface is ugly, he won't use your product.

- The popularity of Bootstrap
  - Developers hate on Bootstrap because "everything looks like Bootstrap"
  - Joe the Plumber probably doesn't care; just sees a slick-looking interface
  - ...but we're going to leave it to you to figure out Bootstrap
    - You pretty much just link to it and it goes to work

## Easy wins

What can you quickly and easily do to your web product that will make it look compelling?

### Brainstorm (15 minutes)

With your table, compile a list of 3 websites whose interfaces you like. On the whiteboard, write down the design aspects they have in common.

Things to consider:
  - Widths of elements relative other elements
  - Fonts
  - Color schemes
    - Off-white backgrounds with white accents
  - Border styles and radii
  - Animations

## Do not underestimate the power of the Fonts

- What's the significance of this order?
  - `font-family: "Helvetica Neue", Helvetica, sans-serif;`
    - Determines which fonts it should "fall back" on
- Some fonts aren't web-safe. Embed to be sure.

```
@font-face
{
  font-family: "Comic Sans";
  src: url("Comic Sans.eot?") format("eot"), url("Comic Sans.ttf") format("truetype");
}
div
{
  font-family: "Comic Sans";
}
```

- eot: Embedded OpenType
  - For < IE9
- ttf and otf: TrueType Format and OpenType Format
  - Fonts that you can install directly onto your computer
  - ttc: TrueType collection, includes bold and stuff
- woff: Web Open Font Format
  - Can't be installed directly onto your computer
- svg: Scalable Vector Graphic
  - iOS
  - In a moment!

- Which font to use?
  - "Keep it exactly the same, or change it a lot"
  - Crazy fonts for headers, boring fonts for text

## SVGs and image formats

- Show PNG and JPG; zoom in
  - What's the difference?
    - Visually, not much
    - But the PNG is like 10 times bigger
- Show JPG, PNG, and SVG
  - JPG
    - Biggest
    - Little discolored bits
  - PNG
    - Smallest
    - Color is consistent
  - SVG
    - Can be zoomed-in infinitely

- Differences
  - Compression
    - PNG
      - "Lossless": No matter how much you compress it, you can uncompress it and get all of the original data out
    - JPG
      - "Lossy": To compress, it permanently removes parts of the image
  - Transparency
    - PNG has it
    - JPG doesn't

- TLDR: PNG is better for graphics, JPG is better for photos, where "better" is file size when viewing with decent quality

- What about SVG?
  - Rename to .txt, look at code
  - It's code, not an image at all!

## Animations

- animation-duration
  - How long each animation should take
- animation-iteration-count
  - How many times it should repeat
- animation-direction
  - Should it repeat from the top, or go backwards and then forwards?
- animation-timing-function
  - "Easing"
    - Determines the duration of "tweening" between "keyframes"
      - "Keyframe"
        - Sort of a "checkpoint" in the process of an animation where you specify how it should look
      - "Tweening"
        - The transitions between keyframes

- Keyframes
  - Simplest: `from` and `to`
  - More complicated: define the different percentages of progress

- You can't animate everything
  - Only things that can be incremented

#### Animate the cat!

## Transitions

- Just specify the properties you want to change on a particular event

## Transform

- scale
- translate
  - Move, basically
- skew
- perspective
- rotate

#### Add transitions to the cat

When it's hovered over, it should do backflips.

