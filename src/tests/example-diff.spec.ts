import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';

test.beforeEach(async ({}, testInfo) => {
  await allure.attachment('beforeEach-attachment', 'Данные перед тестом', 'text/plain');
});

test.afterEach(async ({}, testInfo) => {
  await allure.attachment('afterEach-attachment', 'Данные после теста', 'text/plain');
});

test('Главная страница содержит заголовок diff', async ({ page }) => {
  test.beforeEach(async ({}, testInfo) => {
    await allure.attachment('beforeEach-attachment', 'Данные перед тестом 2', 'text/plain');
  });

  test.afterEach(async ({}, testInfo) => {
    await allure.attachment('afterEach-attachment', 'Данные после теста 2', 'text/plain');
  });

  await allure.attachment('test-attachment', 'Данные внутри теста', 'text/plain');

  await allure.step('Переход на главную страницу', async () => {
    await page.goto('/');
    await allure.attachment('step-attachment', 'Данные внутри шага', 'text/plain');
  });

  await allure.step('Проверка заголовка', async () => {
    await expect(page).toHaveTitle(/Playwright/);
    await allure.attachment('title-step-attachment', 'Заголовок проверен', 'text/plain');
  });
});
