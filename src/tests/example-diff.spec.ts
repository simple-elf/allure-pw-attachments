import { expect, test } from '@playwright/test';
import * as allure from 'allure-js-commons';

test.beforeAll(async ({}, testInfo) => {
  await allure.attachment('beforeAll-attachment', 'Данные перед тестом All', 'text/plain');
});

test.beforeAll(async ({}, testInfo) => {
  await allure.step('Step before all', async () => {
    await allure.attachment('beforeAll2-attachment', 'Данные перед тестом All 2', 'text/plain');
  });
  await allure.attachment('beforeAll3-attachment', 'Данные перед тестом All 3', 'text/plain');
});

test.afterAll(async ({}, testInfo) => {
  await allure.attachment('afterAll-attachment', 'Данные после теста All', 'text/plain');
});

test.afterAll(async ({}, testInfo) => {
  await allure.step('Step after all', async () => {
    await allure.attachment('afterAll2-attachment', 'Данные после теста All 2', 'text/plain');
  });
  await allure.attachment('afterAll3-attachment', 'Данные после теста All 3', 'text/plain');
});

test.describe("Тест класс", async () => {
  test.beforeEach(async ({}, testInfo) => {
    await allure.attachment('beforeEach-attachment', 'Данные перед тестом', 'text/plain');
  });

  test.beforeEach(async ({}, testInfo) => {
    await allure.step('Step before each', async () => {
      await allure.attachment('beforeEach2-attachment', 'Данные перед тестом 2', 'text/plain');
    });
    await allure.attachment('beforeEach3-attachment', 'Данные перед тестом 3', 'text/plain');
  });

  test.afterEach(async ({}, testInfo) => {
    await allure.attachment('afterEach-attachment', 'Данные после теста', 'text/plain');
  });

  test.afterEach(async ({}, testInfo) => {
    await allure.step('Step after each', async () => {
      await allure.attachment('afterEach2-attachment', 'Данные после теста 2', 'text/plain');
    });
    await allure.attachment('afterEach3-attachment', 'Данные после теста 3', 'text/plain');
  });

  test('Главная страница содержит заголовок', async ({ page }) => {
    await allure.attachment('test-attachment', 'Данные внутри теста', 'text/plain');

    await allure.step('Переход на главную страницу', async () => {
      await page.goto('/');
      await allure.attachment('step-attachment', 'Данные внутри шага', 'text/plain');

      await allure.step('Переход на главную страницу 2', async () => {
        await allure.attachment('step2-attachment', 'Данные внутри шага 2', 'text/plain');
      });
    });

    await allure.step('Проверка заголовка', async () => {
      await expect(page).toHaveTitle(/Playwright/);
      await allure.attachment('title-step-attachment', 'Заголовок проверен', 'text/plain');
    });

    await allure.attachment('test2-attachment', 'Данные внутри теста 2', 'text/plain');

    await expect(page).toHaveTitle(/Playwright123/);
  });
})
