import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';

test.beforeAll(async ({}, testInfo) => {
  await allure.attachment('attachment', 'Данные перед тестом All', 'text/plain');
});

test.beforeAll(async ({}, testInfo) => {
  await allure.step('Step before all', async () => {
    await allure.attachment('attachment', 'Данные перед тестом All 2', 'text/plain');
  });
  await allure.attachment('attachment', 'Данные перед тестом All 3', 'text/plain');
});

test.afterAll(async ({}, testInfo) => {
  await allure.attachment('attachment', 'Данные после теста All', 'text/plain');
});

test.afterAll(async ({}, testInfo) => {
  await allure.step('Step after all', async () => {
    await allure.attachment('attachment', 'Данные после теста All 2', 'text/plain');
  });
  await allure.attachment('attachment', 'Данные после теста All 3', 'text/plain');
});

test.describe("Тест класс", async () => {
  test.beforeEach(async ({}, testInfo) => {
    await allure.attachment('attachment', 'Данные перед тестом', 'text/plain');
  });

  test.beforeEach(async ({}, testInfo) => {
    await allure.step('Step before each', async () => {
      await allure.attachment('attachment', 'Данные перед тестом 2', 'text/plain');
    });
    await allure.attachment('attachment', 'Данные перед тестом 3', 'text/plain');
  });

  test.afterEach(async ({}, testInfo) => {
    await allure.attachment('attachment', 'Данные после теста', 'text/plain');
  });

  test.afterEach(async ({}, testInfo) => {
    await allure.step('Step after each', async () => {
      await allure.attachment('attachment', 'Данные после теста 2', 'text/plain');
    });
    await allure.attachment('attachment', 'Данные после теста 3', 'text/plain');
  });

  test('Главная страница содержит заголовок', async ({ page }) => {
    await allure.attachment('attachment', 'Данные внутри теста', 'text/plain');

    await allure.step('Переход на главную страницу', async () => {
      await page.goto('/');
      await allure.attachment('attachment', 'Данные внутри шага', 'text/plain');

      await allure.step('Переход на главную страницу 2', async () => {
        await allure.attachment('attachment', 'Данные внутри шага 2', 'text/plain');
      });
    });

    await allure.step('Проверка заголовка', async () => {
      await expect(page).toHaveTitle(/Playwright/);
      await allure.attachment('attachment', 'Заголовок проверен', 'text/plain');
    });

    await allure.attachment('attachment', 'Данные внутри теста 2', 'text/plain');

    await expect(page).toHaveTitle(/Playwright123/);
  });

  test('Главная страница содержит заголовок 2', async ({ page }) => {
    await allure.attachment('attachment', 'Данные внутри теста', 'text/plain');

    await allure.step('Переход на главную страницу', async () => {
      await page.goto('/');
      await allure.attachment('attachment', 'Данные внутри шага', 'text/plain');

      await allure.step('Переход на главную страницу 2', async () => {
        await allure.attachment('attachment', 'Данные внутри шага 2', 'text/plain');
      });
    });

    await allure.step('Проверка заголовка', async () => {
      await expect(page).toHaveTitle(/Playwright/);
      await allure.attachment('attachment', 'Заголовок проверен', 'text/plain');
    });

    await allure.attachment('attachment', 'Данные внутри теста 2', 'text/plain');

    // await expect(page).toHaveTitle(/Playwright123/);
  });
})
