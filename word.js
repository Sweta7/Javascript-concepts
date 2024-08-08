import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

/**
 * Fetches the content of a web page and extracts the text from all table rows within the <tbody> section.
 * @async
 * @param {string} url - The URL of the web page to fetch.
 * @returns {Promise<string[]>} An array containing the text content of each table row, excluding the header row.
 */
async function fetchDocContent(url) {
  const response = await fetch(url);
  const content = await response.text();

  // Load the HTML content into cheerio
  const $ = cheerio.load(content);
  const rows = [] 
  $("table > tbody > tr").each((index, element) => {
    rows.push($(element).text());
  });
return rows.slice(1);
}

/**
 * Parses the content array and constructs a grid representation.
 * @param {string[]} content - An array containing the text content of each table row.
 * @returns {string[][]} A 2D array representing the grid, with each element containing a character or a space.
 */
function parseContent(content) {
  let positions = [];

  // Extract character and coordinates from each element in array
  for (const line of content) {
    const match = line.match(/(\d+)([^\d]+)(\d+)/);

    if (match) {
      const x = parseInt(match[1], 10);
      const char = match[2];
      const y = parseInt(match[3], 10);
    
    // Push the parsed object into the positions array
      if (char && x !== undefined && y !== undefined) {
        positions.push({ char, x, y });
      }
    }
  }

  // Determine the grid size
  const maxX = Math.max(...positions.map(pos => pos.x));
  const maxY = Math.max(...positions.map(pos => pos.y));

  // Initialize the grid with spaces
  const grid = Array.from({ length: maxY + 1 }, () => Array(maxX + 1).fill(' '));
  //Place characters in the grid
  positions.forEach(({ char, x, y }) => {
      grid[y][x] = char;
  });
  return grid;
}

/**
 * Prints the grid to the console.
 * @param {string[][]} grid - A 2D array representing the grid.
 */
function printGrid(grid) {
  grid.forEach(row => {
      console.log(row.join(''));
  });
}

/**
 * Fetches the content of a web page, parses it into a grid representation, and prints the grid to the console.
 * @async
 * @param {string} url - The URL of the web page to fetch.
 */
async function displayGrid(url) {
  try {
      const content = await fetchDocContent(url);
      const grid = parseContent(content);
      printGrid(grid);
  } catch (error) {
      console.error('Error:', error);
  }
}

// Use provided Google Doc URL
const url = 'https://docs.google.com/document/d/e/2PACX-1vSHesOf9hv2sPOntssYrEdubmMQm8lwjfwv6NPjjmIRYs_FOYXtqrYgjh85jBUebK9swPXh_a5TJ5Kl/pub';
displayGrid(url);
