# Lighthouse Labs 21 Day Coding Challenge

https://coding-challenge.lighthouselabs.ca/

## Overview

Welcome to the Lighthouse Labs 21-Day Coding Challenge! Over the next 21 days you will be responsible for managing the Lighthouse9000™ and making sure it runs as smoothly as possible. As the Lighthouse operator, you will need to solve daily coding challenges to power the lighthouse and keep passing ships (and their passengers) safe.

## Challenges

### Day 1

Write a function called gridSize() that will tell you the size of your grid in the format width x height.

### Day 2

Write a new function called totalCells() which will return the total number of cells in your grid.

### Day 3

Write a function called lightCell() that takes in the coordinates in the form of 'A3' or 'J9' and returns the contents of that specific cell.

### Day 4

Write a function called isRock() which will take in a coordinate in the form of 'C7' and return a true or a false boolean value depending on whether there is a rock in that cell or not.

### Day 5

Write a function called isCurrent() which will take in a coordinate in the form of 'A4' and return a true or a false boolean value depending on whether there is a strong current in that cell or not.

### Day 6

Write a function named lightRow() that takes in the number of the row and returns the contents.

### Day 7

Write a function called lightColumn() that takes in the letter of the column from the grid, and returns an array that is the contents of that grid column.

### Day 8

Upgrade the lightCell() method so that if an invalid cell is passed in, it returns false.

### Day 9

Write a function called isSafe() which will take in a coordinate in the form of 'H2' and return a true or a false boolean. The isSafe() function should check to see if there is a rock or current or not in that cell.

### Day 10

Write a function called allRocks() which when called will return an array of the coordinates of all the rocks in your grid.

### Day 11

Write a function called allCurrents() which, when called, will return an array of the coordinates of all the strong currents in your grid.

### Day 12

Write a function called firstRock() which will return the coordinates of the first rock in your grid.

### Day 13

Write a function called firstCurrent() which will return the coordinates of the first current in your grid.

### Day 14

Write a function called isDangerous() that will take a cell in the format 'G7' and check if there is a rock or a strong current in it, OR in the cells immediately above, below, left, or right of it.

### Day 15

Write a function called distressBeacon() that takes a coordinate in the format 'H2' and returns a different coordinate in the same format.

### Day 16

Add a rock to your grid in cell J9.

### Day 17

Write a function percentageReport() that returns what percentage of your grid is rocks and what percentage has strong currents. This data should be sent as an array of two values, in that order.

### Day 18

Update percentageReport() to send back three values. The first should be the number of open water cells, the second should be the number of rock cells, and the third should be the number of strong current cells.

### Day 19

 Write another function called safetyReport(), which returns the percentage of your grid that contains calm waters - you must use the reduce() function in your code. The return value should be a string in the form "##%". If there are any decimals, it should be rounded to 1 decimal point.

### Day 20

Write a function called calcDistance() which will take two coordinates in the form of 'A3' and calculate the distance between the two points.

### Day 21

Write a function evaluateRoute() which will take an array of cells in the form: ["A1", "B2", "C3", "D4"] (there could be any number of cells), and return a boolean true or false according to the following rules:

- If any cells have rocks, it should return false.
- If more than two cells have strong currents, it should return false.
- Otherwise, it should return true.