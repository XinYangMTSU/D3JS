<p align="center">
  <h1> Learn D3.js in 30 minutes </h1>
</p>

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/1.png" alt="common" width = 800 height=300/>
</p>

<p align="center">
  by Xin Yang
</p>

# `1. Introduction to D3.js`

## `1.1 What is D3.js ?`

  D3.js is a data-driven JavaScript library for manipulating DOM elements.
  
  D3.js is a JavaScript library for manipulating documents based on data, which produces dynamic and interactive data     
  visualizations.
  
  The data is showcased with the help of HTML, SVG and CSS, through D3.js and by binding DOM framework or Document Object Model elements.
  
  It uses HTML, CSS, and SVG to create visual representations of data which can be viewed on any modern browser.

It also provides some awesome features for interactions and animations.

In this tutorial, we will explore the basic concepts and features of D3.js. 
  
### Why D3.js?
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `1. Free and Open source `

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `2. Flexibility `

![#1589F0](https://placehold.it/15/1589F0/000000?text=+) `3. Elegance `

![#1589F0](https://placehold.it/15/1589F0/000000?text=+) `4. Community `

## `1.2 Setting up the Environment`

## Web Browser - Chrome
## Text Editor - Atom
## Python - HTTP Server

## `1.3 Understanding SVGs`
### What is SVGs?

#### SVG stands for Scalable Vector Graphic. It is a vector image format. Basically, it is a language that allows to build shapes with code. A d3.js chart is actually a set of svg shapes put together. For instant, a scatterplot is just composed by several circles as the one shown below. This document of the d3 graph gallery showcases the different shapes offered by Svg.

Scalable Vector Graphics (SVG) is a way to render graphical elements and images in the DOM.
D3 uses SVG to create all its visuals, and therefore it is a core building block of the library.

The reason why D3 uses SVGs rather than images to display data is they don't lose any quality if they're resized, and they don't take up much space.

Something that you will notice about this code is that you need to define this SVG tag to surround everything that we want to render. That SVG tag represents the "canvas" that we'll be drawing on. Any SVG that we try to  draw outside of the canvas won't appear on the screen.

### SVG Coordinates

SVG has a coordinate system that starts from the top left corner (0;0). Positive x-axis goes to the right, while the positive y-axis heads to the bottom. Thus, the height of the SVG has to be taken into consideration when it comes to calculating the y coordinate of an element.

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/svg.png" alt="common"/>
</p>

### Let’s write some code!

### Example 1:
<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/2.png" alt="common"/>
</p>

### Example 2:
<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/3.png" alt="common"/>
</p>

### Example 3:
<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/4.png" alt="common"/>
</p>

### Example 4:
<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/5.png" alt="common"/>
</p>

# 2. Getting started with D3

## `2.1 Adding SVGs with D3`

As D3.js is a JavaScript library, you can simply include it in your HTML file inside a script tag.

## `<script src='https://d3js.org/d3.v4.min.js'></script>`

### D3 Select - use D3 grab hold of elements on the screen
D3 select uses CSS selectors to return page elemetns, in a similar way to how jQuery works.
The regular select function will return one element, and selectAll will return all of the matching elements on the page.

### D3 Append - how to add SVGs onto your selection
Once we have an element selected, we can use D3's append method to add something to it. 
Append takes one argument, which is the type of the element that we want to add to the screen.

### D3 Attr - set attributes of SVGs to make them appear on the screen
To set the attributes of an SVG, we can pass values in with the attr method, which is a special D3 function that can alter attributes.
We pass in the attribute we want to set as the first argument to this attr method, and the value that we want to give it as the second argument.

### Method Chaining in D3 
We're passing the result of our first method call onto our second method call, which are're then passing on to our third method call, and so on...

## Here in the example below, a rectangle is being drawn using D3 in an SVG container.

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/rec.png" alt="common"/>
</p>

## `2.2 Selections and Data Joins`

Now that you know how to work with SVGs and JavaScript, it's time to actually do something with them.
The whole point of D3 is that we need to tie these SVGs to data, giving us Data Driven Documents. Once we can associate these elements with a piece of data, this lets us tweak their attributs to show something about the data that they represent.
One of the key features behind the D-3 library is the ability to perform a data join. D3 reads in an array of data and associates each item of the array with an SVG. 

## `2.3 Loading External Data`

# `3. Scales and Axes`

## `3.1 Linear Scale`
## `3.2 Band Scale`

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/bandScale.png" alt="common"/>
</p>

## `3.3 Margins and Groups`

### Margin Convention

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/margin.png" alt="common"/>
</p>

Introduction to SVG groups, to structure elements together on the page

Using transformations to alter SVGs's position

Following the D3 margin convention to give us a space to put our axes

### SVG Groups

Groups are invisible containers for structuring SVGs

Have translation attributes for moving multiple SVGs at once

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/svgGroup.png" alt="common"/>
</p>

# `4. Make it Interactive`

# `5. Some cool examples of D3 projects`

The visualization will be far more useful if the user could explore the data with some more advanced features.
