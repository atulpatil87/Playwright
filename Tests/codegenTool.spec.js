import { test, expect } from '@playwright/test';

// npx playwright codegen https://staging.mentr-me.com/australia-nz/ms-it/university-of-cincinnati
test('test', async ({ page }) => {
  await page.goto('https://staging.mentr-me.com/australia-nz/ms-it/university-of-cincinnati');
  //await page.getByRole('button').click();
  await page.getByRole('heading', { name: 'University of Cincinnati', exact: true }).click();
  await page.getByText('M.S. in Computer Science', { exact: true }).click();
  await page.getByRole('img', { name: 'Logo of University of Cincinnati' }).click();
  await page.getByText('Australia + NZTop colleges in').click();
  await page.getByText('Computer Science', { exact: true }).click();
  await page.getByText('Specialization', { exact: true }).first().click();
  await page.getByText('years (full time)').click();
  await page.getByText('Duration', { exact: true }).click();
  await page.getByText('$60,020 overall').click();
  await page.getByText('Tuition Fee', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^fallIntake$/ }).first().click();
  await page.locator('.MuiCardContent-root').first().click();
  await page.locator('.MuiTableCell-root > div > img').first().click();
  await page.getByRole('row', { name: '310' }).getByRole('img').click();
  await page.getByRole('row', { name: '54' }).getByRole('img').click();
  await page.getByRole('row', { name: '105' }).getByRole('img').click();
  await page.locator('.jss13 > .MuiBox-root > div > div > img').click();
  await page.getByText('Want to know your Admission').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Evaluate Chances' }).nth(1).click();
  const page1 = await page1Promise;
  await page.getByRole('heading', { name: 'Class Profile of M.S. in' }).click();
  await page.getByText('Want to Score 8+ Band in IELTS?Kickstart your IELTS Prep for FREE and get').click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Start My Prep Now' }).click();
  const page2 = await page2Promise;
  await page.getByRole('button', { name: 'Book a Free Session' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Get Started' }).nth(1).click();
  const page3 = await page3Promise;
  //await page.getByRole('button').click();
});