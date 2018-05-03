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

    let letter = coordinates[0];
    let row = coordinates.substr(1) - 1;

    if (GRID[row] === undefined) {
        return false;
    }

    let col = getColumnIndex(letter);
    let result = GRID[row][col];

    if (result === undefined) {
        return false;
    }

    return result;

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
    let col = getColumnIndex(letter);
    return GRID.map(function(row) {
        return row[col];
    });
}

/**
 * Check if cell is empty
 * @param {string} coordinates
 * @returns {boolean}
 */
function isSafe(coordinates) {
    let contents = lightCell(coordinates);
    return (contents) ? false : true;
}

/**
 * Return array of all cell coordinates
 * @returns {Array}
 */
function allCells() {

    let cells = [];
    let columns = [];
    let rows = [];

    for (let column of GRID[0].keys()) {
        columns.push(getColumnLetter(column));
    }

    for (let row of GRID.keys()) {
        rows.push((row + 1).toString());
    }

    for (let row of rows) {
        for (let col of columns) {
            cells.push(col + row);
        }
    }

    return cells;

}

/**
 * Return array of all rock coordinates
 * @returns {Array}
 */
function allRocks() {

    let cells = allCells();
    let rocks = [];

    for (let cell of cells) {
        if (isRock(cell)) {
            rocks.push(cell);
        }
    }

    return rocks;
}

/**
 * Return array of all current coordinates
 * @returns {Array}
 */
function allCurrents() {

    let cells = allCells();
    let currents = [];

    for (let cell of cells) {
        if (isCurrent(cell)) {
            currents.push(cell);
        }
    }

    return currents;
}

/**
 * Return the coordinates of the first rock
 * @returns {string}
 */
function firstRock() {
    let rocks = allRocks();
    return rocks[0];
}

/**
 * Return the coordinates of the first current
 * @returns {string}
 */
function firstCurrent() {
    let currents = allCurrents();
    return currents[0];
}