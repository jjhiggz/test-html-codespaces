// @ts-check
const { test, expect } = require('@playwright/test');

const cleanArrFromEmptyItems = (arr) => arr.filter((item) => item !== '');

test.beforeEach(async ({ page }) => {
  await page.goto('localhost:5551');
});

test("has the title of 'My First Webpage' set in Head", async ({ page }) => {
  await expect(page).toHaveTitle(/My First Website - Main page/);
});

test('has the meta tag for document charset encoding that comes with Emmet HTML boilerplate set in head', async ({
  page,
}) => {
  const charsetMeta = page.locator("meta[charset='UTF-8']");
  await expect(charsetMeta).toBeAttached();
});

test('has the responsive tag that comes with Emmet HTML boilerplate is set in head', async ({
  page,
}) => {
  const responsiveTag = page.locator("meta[name='viewport']");
  await expect(responsiveTag).toHaveAttribute('content', 'width=device-width, initial-scale=1.0');
});

test("has the page heading (<h1></h1>) of 'My First Webpage' set on the page", async ({ page }) => {
  const headingText = await page.textContent('h1');
  await expect(headingText).toBe('Main Page');
});

test('has three section headings (<h2></h2>) total set on the page', async ({ page }) => {
  const locator = page.locator('h2');
  await expect(locator).toHaveCount(3);
});

test('section headings content matches the requirements (Section One, Section Two, Section Three)', async ({
  page,
}) => {
  const locator = page.locator('h2');
  await expect(locator).toContainText(['Section One', 'Section Two', 'Section Three']);
});

test('has three paragraphs (<p></p>) set on the page', async ({ page }) => {
  const locator = page.locator('p');
  await expect(locator).toHaveCount(3);
});

test('the first paragraph has 20 words', async ({ page }) => {
  const firstParagraphLength = page
    .locator('p')
    .nth(0)
    .textContent()
    .then((content) => cleanArrFromEmptyItems(content?.trim().split(' ')).length);
  expect(await firstParagraphLength).toEqual(20);
});

test('the second paragraph has 30 words', async ({ page }) => {
  const firstParagraphLength = page
    .locator('p')
    .nth(1)
    .textContent()
    .then((content) => cleanArrFromEmptyItems(content?.trim().split(' ')).length);
  expect(await firstParagraphLength).toEqual(30);
});

test('the third paragraph has 50 words', async ({ page }) => {
  const firstParagraphLength = page
    .locator('p')
    .nth(2)
    .textContent()
    .then((content) => cleanArrFromEmptyItems(content?.trim().split(' ')).length);
  expect(await firstParagraphLength).toEqual(50);
});
