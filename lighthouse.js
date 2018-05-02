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

/**
 * Return the contents of a specific cell
 * @param {string} coordinates
 * @returns {*}
 */
function lightCell(coordinates) {
    let [letter,row] = coordinates.split('');
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    letter = ALPHABET.indexOf(letter.toUpperCase());
    let col = getColumnNumber(letter);
    return GRID[row - 1][col];
}

/**
 * Check if cell contains a rock
 * Rock identified by '^'
 * @param {string} coordinates
 * @returns {boolean}
 */
function isRock(coordinates) {
    let contents = lightCell(coordinates);
    return (contents == '^');
}

/**
 * Check if cell contains a strong current
 * Strong current identified by '~'
 * @param {string} coordinates
 * @returns {boolean}
 */
function isCurrent(coordinates) {
    let contents = lightCell(coordinates);
    return (contents == '~');
}