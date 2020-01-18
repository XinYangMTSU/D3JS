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

<h3>
  
  D3.js is a `data-driven JavaScript library` for manipulating DOM documents based on data, which produces dynamic and interactive data visualizations. 
  
  The data is showcased with the help of `HTML`, `SVG` and `CSS`, through D3.js and by binding Document Object Model elements.
  
  It uses HTML, CSS, and SVG to create visual representations of data which can be viewed on any modern browser.

It also provides some awesome features for interactions and animations.

In this tutorial, we will explore the basic concepts and features of D3.js. 
</h3>

## `1.2 Why D3.js?`

<h3>
  
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `1. Free and Open source `

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `2. Flexibility `

![#1589F0](https://placehold.it/15/1589F0/000000?text=+) `3. Elegance `

![#1589F0](https://placehold.it/15/1589F0/000000?text=+) `4. Community `

</h3>

## `1.3 Examples`

Total Solar Eclipse :
https://www.washingtonpost.com/graphics/national/eclipse/?utm_term=.e6ff1881391e

Next America :
https://www.pewresearch.org/next-america/#Two-Dramas-in-Slow-Motion

# `2. Getting started with D3`

## `2.1 Setting up the Environment`

### Web Browser - Chrome
### Text Editor - Atom
### Python - HTTP Server: python -m http.server

For most of the visualizations, it is important to note that they'll need to run over a local HTTP server because our page will be sharing files between different folders. There are a few different programs that you can use for this but for this course I'll be be using the HTTP server that comes in built with Python. If you have Python already installed on your machine then it's super easy to get started. If not, then just downnload Python from the official website and make sure that you get the latest version for whichever operating system you use.

We can see that the server is working on port 8000. If we nagivate to our browser to local host 8000, then we should be able to see the files from the directory that we're looking at.

As long as you are're always looking at your page through a local host server, then your visualization should show up.

Now that we'are finished with set up we're ready to start learning about SVGs and how to add them into the screen.

## `2.2 Understanding SVGs`

In this section, I'm going to go over some of the basics of SVGs, which D3 uses to visualize data on the screen. I'll teach you about how they're positioned, I'll show you some rules about placing SVGs, and I'll show you waht the syntax looks like in HTML.

### What are SVGs?

SVG stands for Scalable Vector Graphics, are shapes that we can make in a browser window with code.  All that we need to do is pass in some simple information, such where we want to position a shape and how big it should be, and we'll be using some similar syntax and HTML to do this.

`SVG stands for Scalable Vector Graphic. It is a vector image format. Basically, it is a language that allows to build shapes with code. A d3.js chart is actually a set of svg shapes put together. For instant, a scatterplot is just composed by several circles as the one shown below. This document of the d3 graph gallery showcases the different shapes offered by Svg.`

#### `Draw shapes with computer code`
#### `Rectangles, Circles, eclipse, lines, texts, and paths`
#### `Markup code similar to HTML`
#### `Small file size, don't lose any qulity re resized.`


### Why does D3 use SVGs?

Scalable Vector Graphics (SVG) is a way to render graphical elements and images in the DOM.
D3 uses SVG to create all its visuals, and therefore it is a core building block of the library.

The reason why D3 uses SVGs rather than images to display data is they don't lose any quality if they're resized, and they don't take up much space.

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/google.png" alt="common"/>
</p>

You can either include SVGs directly in an HTML file as you can see here, or you can add them in with JavaScript, as we'll do later and throughout most of the course.

Something that you will notice about this code is that you need to define this SVG tag to surround everything that we want to render. That SVG tag represents the "canvas" that we'll be drawing on. Any SVG that we try to  draw outside of the canvas won't appear on the screen.


### Introduction to the SVG Coordinate System

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

### Example 5:
<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/circle.png" alt="common"/>
</p>

### Example 6:
<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/eclipse.png" alt="common"/>
</p>

### Example 7:
<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/line.png" alt="common"/>
</p>

### Example 8:
<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/text.png" alt="common"/>
</p>

### Example 9:
The final type of SVGs that D3 uses is called a path. A path is the most powerful kind of SVG that we have avaible, and it can be used to create lines, curves, arcs and all kinds of complex shapes. 
<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/path.png" alt="common"/>
</p>


## `2.3 Adding SVGs with D3`

Although we've defined SVGs in this example using HTML-like syntax, when we use them in D3 code, we'll almost always be adding them to the canvas with JavaScript.
Now that we know a little bit more about SVGs, I'm going to show you how to add them in D3, rather then in HTML file.
I'll be introducing you to D3 select, D3 append, and D3 attr, which will be using together to make new shapes on the screen.

As D3.js is a JavaScript library, you can simply include it in your HTML file inside a script tag.

### `<script src='https://d3js.org/d3.v4.min.js'></script>`

### D3 `select` - use D3 grab hold of elements on the screen
D3 select uses CSS selectors to return page elemetns, in a similar way to how jQuery works.
The regular select function will return one element, and selectAll will return all of the matching elements on the page.

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/select.png" alt="common"/>
</p>

### D3 `append` - how to add SVGs onto your selection
Once we have an element selected, we can use D3's append method to add something to it. 
Append takes one argument, which is the type of the element that we want to add to the screen.

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/append.png" alt="common"/>
</p>

### D3 `attr` - set attributes of SVGs to make them appear on the screen
To set the attributes of an SVG, we can pass values in with the attr method, which is a special D3 function that can alter attributes.
We pass in the attribute we want to set as the first argument to this attr method, and the value that we want to give it as the second argument.

### `Method Chaining` in D3 

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/chain.png" alt="common"/>
</p>

Although we could write our code as it is on the left, in D3 we will almost always be writing it out as it is on the right.
This is called method chaining, we're passing the result of our first method call onto our second method call, which are're then passing on to our third method call, and so on...

Our call to D3 select here returns SVG canvas, and we're calling our append method on this, which returns a blank rect tag. We're then calling our attr method on that rect tag, which returns the same red tag with an x value of 25, ....

The indents here are useful to break up our code, and to show which methods are being applied to which D3 selection.

Something that might not be obvious is that each of these method calls returns something. We are only able to chain these methods together because each of the attr methods are returning the element that they're changing.  

## Here in the example below, a rectangle is being drawn using D3 in an SVG container.

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/rec.png" alt="common"/>
</p>

## `2.4 Selections and Data Joins`

Now that you know how to work with SVGs and JavaScript, it's time to actually do something with them.
`The whole point of D3 is that we need to tie these SVGs to data, giving us Data Driven Documents.` Once we can associate these elements with a piece of data, this lets us tweak their attributs to show something about the data that they represent.
One of the key features behind the D-3 library is the ability to perform a data join. D3 reads in an array of data and associates each item of the array with an SVG. 

Let's take a look at a simple example!

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/join.png" alt="common"/>
</p>

Now our SVGs are reflecting something about the data. In the next section, we'll be working with a more complex array of data and learning how to load that data from a file.

## `2.5 Loading External Data`

Now that we can see how D3 binds data to SVGs on a basic level, I'm going to show you how to do the same thing with a real dataset so that we don't have to store everything in a variable. We can load data from CSV, TSV, and JSON files.

D3 has a variety of different functiosn to handle data from external sources. 

CSV - Comma seperated Values

TSV - Tap seperated Values

JSON - JavaScript Object Notation

D3 gives us these three functions to load in these files as array.

Once the data has been loaded in. We can then access this data using the data arguments of this anonymous function.

# `3. Scales and Axes`

What are Scales, and why do we need them? Scales are functions that map from an input domain to an output range.

## `3.1 Linear Scale`

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/linearScale.png" alt="common"/>
</p>

## `3.2 Band Scale`

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/bandScale.png" alt="common"/>
</p>

## `3.3 Margins and Groups`

### SVG Groups

Groups are invisible containers for structuring SVGs

Have translation attributes for moving multiple SVGs at once

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/svgGroup.png" alt="common"/>
</p>

### Margin Convention

The way that we implement the margin convention in D3 is by attaching everything to an SVGs group element.
SVG group elements are containers for different shapes as elements groups don't have visual presence by themselves. 
They are useful in D3 as they can bundle graphical elements together and apply transformations to many shapes at once.

This code lays out the standard set up for our SVG canvas.

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/margin.png" alt="common"/>
</p>

Introduction to SVG groups, to structure elements together on the page

Using transformations to alter SVGs's position

Following the D3 margin convention to give us a space to put our axes

Let's work this margin convention into a bar chart to see how this looks like in practice.
We'll be appending all of our rectangles to a group element and we'll need to leave enough space in the left and bottom margin
for an x and y axes. We can always adjust these values later on if we end up needing a little more space than expected.

## `3.4 Axes and Labels`

For most types of charts, it's important to have some kind of axes that give us a reference point to interpret data. 

Using D3 axes generators in our bar chart to show the scale of our chart
adding axis labels to tell us what we're looking at

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/svgCo.png" alt="common"/>
</p>

# `4. Make it Interactive`

## Adding tooltips to let the user view the data that an SVG represents
## Using plug-in library to expand on the power of D3: d3-tip
## Using D3 formatting to render out text

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/tooltip.png" alt="common"/>
</p>

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/event.png" alt="common"/>
</p>

# `5. Some cool examples of D3 projects`

https://sxywu.com/travel/

The visualization will be far more useful if the user could explore the data with some more advanced features.
