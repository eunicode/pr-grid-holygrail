# Creating the Holy Grail Layout with Grid

Practice using the CSS Grid Layout Module by creating the Holy Grail Layout.

## Description

The [Holy Grail Layout](https://en.wikipedia.org/wiki/Holy_Grail_(web_design)) is an ideal website layout with a full bleed header, a full bleed footer, and three columns. The center column contains the main content, and the left and right columns contain supplemental content like ads or navigation ([Source](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/)).

This website achieves the Holy Grail Layout with the added bonuses of a mobile first approach and responsiveness. The base layout has a single column, and is the layout for narrow or mobile viewports. Using media queries, browser viewports with widths of 50em or wider have a two column layout, and viewports with widths of 65em or wider have a three column layout.

The single column layout is constrained at 50rem. This is so that the single column layout can be the fallback layout for browsers without Grid support because the single column layout will still look good in wide viewports.
The single column layout uses the flexible fr unit. The column's width is 1fr, which means the column takes up all the available space. The column's width will be flexible because it will stretch and shrink as the viewport stretches or shrinks. 

The two column layout also uses the flexible fr unit. Each column's width is 1fr, which means each column takes up half the available space. As the viewport width changes, the browser will automatically divvy the space.  

The three column layout also uses the flexible fr unit. The columns' widths are 1fr, 3fr, and 1fr respectively. The center column will automatically be three times the width of its flanking columns, or take up 60% of the viewport width. 

With Grid, all this is achieved with minimal markup and CSS.

## Features

- Mobile-first approach
- Responsive, fluid single, two column, three column layouts with media queries
- Sticky footer
- Minimal markup and CSS thanks to Grid
- Code adheres to Airbnb's style guide, is linted with ESLint and formatted with Prettier
- Production JavaScript files are transpiled, concatenated and minified

## Demo 

Check out the live website here: https://eunicode.github.io/pr-grid-holygrail/

## Tech stack

- HTML
- SCSS
- JavaScript

## Tools

- Gulp

## Lessons learned
CSS Grid
- Create gutters with `grid-gap`
- Create explicit grids with `grid-template-rows` and `grid-template-columns`
- Generate rows with `grid-auto-rows`
- The `auto` keyword value vs the `fr` flex value
- The `min-content` keyword value
- Flexible track sizing with `minmax()` function
- Control grid item placment with grid lines
- Shorthand syntax and negative indices (grid lines)
- Control grid item placement with grid template areas
- Use media queries to adjust the position of Grid items to create different layouts at different breakpoints

CSS Flexbox
- Create a sticky footer with flexbox: use `flex-grow` or `margin-top: auto`

Babel

- Install Babel core, preset-env and register to enable use of ES6 in gulpfile

Gulp

- Update Gulp v3 API to Gulp v4 API
- How to clean out build folder (`del` package)
- Copy files with gulp
- Transpile Sass to CSS
- Transpile ES6+ to ES5
- Uglify and concatenate JS files
- Create sourcemaps for CSS and JS files

Other
- Use ESLint to lint code
- Use Prettier to format code