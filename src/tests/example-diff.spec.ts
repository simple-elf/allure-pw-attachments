import {expect, test} from "@playwright/test";
import * as allure from "allure-js-commons";

test.beforeAll(async ({}, testInfo) => {
  await allure.attachment('beforeAll-attachment', 'Данные перед тестом All', 'text/plain');
});

test.afterAll(async ({}, testInfo) => {
  await allure.attachment('afterAll-attachment', 'Данные после теста All', 'text/plain');
});

test.describe("Тест класс", async () => {
  test.beforeEach(async ({}, testInfo) => {
    await allure.attachment('beforeEach-attachment', 'Данные перед тестом', 'text/plain');
  });

  test.afterEach(async ({}, testInfo) => {
    await allure.attachment('afterEach-attachment', 'Данные после теста', 'text/plain');
  });

  test('Главная страница содержит заголовок', async ({ page }) => {
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
})
