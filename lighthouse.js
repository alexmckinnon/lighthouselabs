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
 * Return the row number from given coordinates
 * @returns {number}
 */
function getRow(coordinates) {
    return parseInt(coordinates.substr(1));
}

/**
 * Return the column letter from given coordinates
 * @param {string} coordinates
 * @returns {string}
 */
function getColumn(coordinates) {
    return coordinates[0];
}

/**
 * Get the previous letter in the alphabet
 * @param {string} letter
 * @returns {string}
 */
function getPreviousLetter(letter) {
    let index = getColumnIndex(letter) - 1;
    if (index < 0) {
        return false;
    }
    return getColumnLetter(index);
}

/**
 * Get the next letter in the alphabet
 * @param {string} letter
 * @returns {string}
 */
function getNextLetter(letter) {
    let index = getColumnIndex(letter) + 1;
    if (index < 0) {
        return false;
    }
    return getColumnLetter(index);
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
 * Return array of all open water coordinates
 * @returns {Array}
 */
function allOpenWater() {

    return allCells().reduce(function(total, cell) {
        if (isSafe(cell)) {
            total.push(cell);
        }
        return total;
    }, [])
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

/**
 * Return the cell directly above given coordinates
 * @param {string} coordinates
 * @returns {string|bool}
 */
function getCellAbove(coordinates) {
    let row = getRow(coordinates);
    let letter = getColumn(coordinates);
    let cell = letter + (row - 1).toString();

    if (allCells().includes(cell)) {
        return cell;
    }

    return false;
}

/**
 * Return the cell directly below given coordinates
 * @param {string} coordinates
 * @returns {string|bool}
 */
function getCellBelow(coordinates) {
    let row = getRow(coordinates);
    let letter = getColumn(coordinates);
    let cell = letter + (row + 1).toString();

    if (allCells().includes(cell)) {
        return cell;
    }

    return false;
}

/**
 * Return the cell to the left of given coordinates
 * @param {string} coordinates
 * @returns {string|bool}
 */
function getCellLeft(coordinates) {
    let row = getRow(coordinates);
    let letter = getColumn(coordinates);
    let prevLetter = getPreviousLetter(letter);
    if (!prevLetter) {
        return false;
    }
    let cell = prevLetter + row.toString();

    if (allCells().includes(cell)) {
        return cell;
    }

    return false;
}

/**
 * Return the cell to the right of given coordinates
 * @param {string} coordinates
 * @returns {string|bool}
 */
function getCellRight(coordinates) {
    let row = getRow(coordinates);
    let letter = getColumn(coordinates);
    let nextLetter = getNextLetter(letter);
    if (!nextLetter) {
        return false;
    }
    let cell = nextLetter + row.toString();

    if (allCells().includes(cell)) {
        return cell;
    }

    return false;
}

/**
 * Check if cell or surrounding cells contain a rock or current.
 * @param {string} coordinates
 * @returns {boolean}
 */
function isDangerous(coordinates) {
    if (!isSafe(coordinates)) {
        return true;
    }
    let cellAbove = getCellAbove(coordinates);
    if (cellAbove && !isSafe(cellAbove)) {
        return true;
    }
    let cellBelow = getCellBelow(coordinates);
    if (cellBelow && !isSafe(cellBelow)) {
        return true;
    }
    let cellLeft = getCellLeft(coordinates);
    if (cellLeft && !isSafe(cellLeft)) {
        return true;
    }
    let cellRight = getCellRight(coordinates);
    if (cellRight && !isSafe(cellRight)) {
        return true;
    }
    return false;
}

/**
 * Return an adjacent cell that is not dangerous
 * @param {string} coordinates
 * @returns {boolean}
 */
function distressBeacon(coordinates) {
    let cellRight = getCellRight(coordinates);
    if (cellRight && !isDangerous(cellRight)) {
        return cellRight;
    }
    let cellBelow = getCellBelow(coordinates);
    if (cellBelow && !isDangerous(cellBelow)) {
        return cellBelow;
    }
    let cellLeft = getCellLeft(coordinates);
    if (cellLeft && !isDangerous(cellLeft)) {
        return cellLeft;
    }
    let cellAbove = getCellAbove(coordinates);
    if (cellAbove && !isDangerous(cellAbove)) {
        return cellAbove;
    }
}

/**
 * Add a rock to the grid at the given coordinates
 * @param {string} coordinates
 * @param {string} value
 */
function updateCell(coordinates, value) {
    let letter = getColumn(coordinates);
    let row = getRow(coordinates) - 1;
    let col = getColumnIndex(letter);
    GRID[row][col] = value;
}

/** Add a rock to J9 */
updateCell("J9", "^");

/**
 * Return count of open water, rocks, and strong currents in the grid.
 * @returns {Array}
 */
function percentageReport() {
    let water = allOpenWater().length;
    let rocks = allRocks().length;
    let currents = allCurrents().length;

    return [water, rocks, currents];
}

/**
 * Return percentage of safe (open water) cells in the grid
 * Response string format of "##%"
 * @returns {string}
 */
function safetyReport() {

    let cells = allCells();
    let water = allOpenWater();
    let percent = Math.round(water.length / cells.length * 1000) / 10;

    return percent.toString() + '%';
}

/**
 * Return the distance between two coordinates
 * Formula for distance is sqrt((x2 - x1)^2 + (y2 - y1)^2)
 * @param {string} c1
 * @param {string} c2
 * @returns {number}
 */
function calcDistance(c1, c2) {

    let x1 = getColumnIndex(getColumn(c1));
    let x2 = getColumnIndex(getColumn(c2));
    let y1 = getRow(c1);
    let y2 = getRow(c2);

    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    return Math.round(distance * 100) / 100;

}