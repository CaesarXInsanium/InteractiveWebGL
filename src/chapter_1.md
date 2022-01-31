# Introduction

## Human Visual System

`Retina`: section in back of eyes covered with cells that are excited when light interacts with them.

`Visual Acuity`: other method of saying resolution. Distance by which two points are differentiabnle from one another.

`Brightness`: how intense preception of object is

`Primary Color`: humans eye cells can only perceive one primary color each and all of reality is the interpolation accross all the cells and all of the things

## Synthetic-Camera Model

`Synthetic-Camera Model`: models of optical imaging systems lead to concept that comprise modern computer graphics

`Projector`: line moving from object in world space coming into to the screen space.

`Center of Projection`: location of camera. Point on which all light projectors converged and flip.

## Programmer's Interface

Interactive Computer Graphics involves writing code so that object that an user would see behave and repond in accordance to the input given by the user without having the developer explicity programming the movement and behavior

`Application Programming Interface`: method by which program can interact with code written by someone else in order to solve their own problems. allows layers of abstraction and shields from implementation details

`Driver`: interpret API calls and control hardware in order to achieve desired behavior. 

## Pen-Plotter Model

`Pen-Plotter`: device that produces images by moving pen held by gantry and can move in two dimensions. Used for drawing large blueprints and large diagrams. inspired the likes of HTML, PostScript and LOGO

Example
```Javascript
moveto(x,y);
lineto(x,y);
```

- very simple API but it allows from very complex drawing procedures.

this method is not efficient for 3D graphics.

- requires user to implement trignometric math in order to figure out which points in world space correspond to which points in paper space

- only function required to implement a rasterization API is writePixel

```python
def writePixel(x: int, y: int, color: Color):
  #implement Code here
  pass
```

## Thee Dimensional APIs

In order to implement synthetic camera models, 3 thing must be implemented

- Object
- viewers
- light sources
- material properties

`Vertex`: data structure representation a point in space. Can also contain other bits of relavant data


