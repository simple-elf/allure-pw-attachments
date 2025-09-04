import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';

test.beforeEach(async ({}, testInfo) => {
  await allure.attachment('attachment', 'Данные перед тестом', 'text/plain');
});

test.afterEach(async ({}, testInfo) => {
  await allure.attachment('attachment', 'Данные после теста', 'text/plain');
});

test('Главная страница содержит заголовок', async ({ page }) => {
  await allure.attachment('attachment', 'Данные внутри теста', 'text/plain');

  await allure.step('Переход на главную страницу', async () => {
    await page.goto('/');
    await allure.attachment('attachment', 'Данные внутри шага', 'text/plain');
  });

  await allure.step('Проверка заголовка', async () => {
    await expect(page).toHaveTitle(/Playwright/);
    await allure.attachment('attachment', 'Заголовок проверен', 'text/plain');
  });
});
