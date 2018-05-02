/**
 * Returns the size of the grid
 * E.g. "10 x 10"
 * @returns {string}
 */
function gridSize() {
    let width = GRID[0].length;
    let height = GRID.length;
    return width.toString() + " x " + height.toString();
}

/**
 * Return the total number of cells in the grid
 * @returns {number}
 */
function totalCells() {
    let width = GRID[0].length;
    let height = GRID.length;
    return width * height;
}
