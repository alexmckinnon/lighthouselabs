/** @constant {string} */
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

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
    let col = getColumnIndex(letter);
    return GRID[row - 1][col];
}

/**
 * Return the array index of the column from letter
 * @param {string} letter
 * @returns {number}
 */
function getColumnIndex(letter) {
    return ALPHABET.indexOf(letter.toUpperCase());
}

/**
 * Return the letter of the column from array index
 * @param {number} index
 * @returns {string}
 */
function getColumnLetter(index) {
    return ALPHABET.charAt(index);
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

/**
 * Return the contents of the entire row
 * @param {number} row
 * @returns {Array}
 */
function lightRow(row) {
    return GRID[row - 1];
}

/**
 * Return the contents of the entire column
 * @param {string} letter
 * @returns {Array}
 */
function lightColumn(letter) {
    let col = getColumnNumber(letter);
    return GRID.map(function(row) {
        return row[col];
    });
}