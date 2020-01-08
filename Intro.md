
# Introduction to D3JS

<p align="center">
  <img src="https://github.com/XinYangSAU/D3JS/blob/master/1.png" alt="common" height=300/>
</p>

In this chapter, you’ll learn the basics of D3JS:

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `1. Introduction `

![#1589F0](https://placehold.it/15/1589F0/000000?text=+) `2. Understanding SVGs (Scalable Vector Graphics)`

The reason why D3 uses SVGs rather than images to display data is they don't lose any quality if they're resized, and they don't take up much space.

Something that you will notice about this code is that you need to define this SVG tag to surround everything that we want to render. That SVG tag represents the "canvas" that we'll be drawing on. Any SVG that we try to  draw outside of the canvas won't appear on the screen.

## 1. Introduction to D3JS
### What is D3JS ?
### Why D3JS?

## 2. Understanding SVGs
#### What is SVGs?
### SVG Coordinates

## 3. Adding SVGs with D3

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

## 4. Selections and Data Joins
Now that you know how to work with SVGs and JavaScript, it's time to actually do something with them.
The whole point of D3 is that we need to tie these SVGs to data, giving us Data Driven Documents. Once we can associate these elements with a piece of data, this lets us tweak their attributs to show something about the data that they represent.
One of the key features behind the D-3 library is the ability to perform a data join. D3 reads in an array of data and associates each item of the array with an SVG. 

## 5. Loading External Data


