const puppeteer = require('puppeteer');

// Load .env file with CHROME_URL_WS set to current instance of Dev. Chrome
require('dotenv').config();

async function main() {
	const browser = await puppeteer.connect({
		browserWSEndpoint: process.env.CHROME_URL_WS,
	});

	const page = await browser.newPage();
	await page.goto('https://garden.org/plants/view/6');
}

main();


  
