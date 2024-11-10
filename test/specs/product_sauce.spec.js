import { driver, $, expect } from "@wdio/globals";
import scroll from "../helper/scroll.js";

describe("HALAMAN DETAIL PRODUK", () => {
  beforeEach(async () => {
    const viewMenu = $("~View menu");
    await viewMenu.click();

    const catalogButton = $('//*[@text="Catalog"]');
    await catalogButton.click();

    const firstProduct = $('//*[@content-desc="Product Image"]');
    await firstProduct.click();

    const productTitle = $("id=com.saucelabs.mydemoapp.android:id/productTV");
    await expect(productTitle).toHaveText("Sauce Labs Backpack");
  });

  describe("Fitur Review", () => {
    it("Memberikan satu bintang pada review produk", async () => {
      const star = $("id=com.saucelabs.mydemoapp.android:id/start1IV");
      await star.click();

      const submittedReview = $("id=com.saucelabs.mydemoapp.android:id/sortTV");
      await expect(submittedReview).toHaveText(
        expect.stringContaining("Thank you")
      );

      const continueButton = $("~Closes review dialog");
      await continueButton.click();
    });

    it("Memberikan dua bintang pada review produk", async () => {
      const star = $("id=com.saucelabs.mydemoapp.android:id/start2IV");
      await star.click();

      const submittedReview = $("id=com.saucelabs.mydemoapp.android:id/sortTV");
      await expect(submittedReview).toHaveText(
        expect.stringContaining("Thank you")
      );

      const continueButton = $("~Closes review dialog");
      await continueButton.click();
    });

    it("Memberikan tiga bintang pada review produk", async () => {
      const star = $("id=com.saucelabs.mydemoapp.android:id/start3IV");
      await star.click();

      const submittedReview = $("id=com.saucelabs.mydemoapp.android:id/sortTV");
      await expect(submittedReview).toHaveText(
        expect.stringContaining("Thank you")
      );

      const continueButton = $("~Closes review dialog");
      await continueButton.click();
    });

    it("Memberikan empat bintang pada review produk", async () => {
      const star = $("id=com.saucelabs.mydemoapp.android:id/start4IV");
      await star.click();

      const submittedReview = $("id=com.saucelabs.mydemoapp.android:id/sortTV");
      await expect(submittedReview).toHaveText(
        expect.stringContaining("Thank you")
      );

      const continueButton = $("~Closes review dialog");
      await continueButton.click();
    });

    it("Memberikan lima bintang pada review produk", async () => {
      const star = $("id=com.saucelabs.mydemoapp.android:id/start5IV");
      await star.click();

      const submittedReview = $("id=com.saucelabs.mydemoapp.android:id/sortTV");
      await expect(submittedReview).toHaveText(
        expect.stringContaining("Thank you")
      );

      const continueButton = $("~Closes review dialog");
      await continueButton.click();
    });
  });

  describe("Fitur Pilih Warna", () => {
    beforeEach(async () => {
      await scroll(1000, 500);
    });

    it("Memilih warna hitam", async () => {
      const black = $("~Black color");
      await black.click();

      const isSelected = $("~Indicates when color is selected");
      await expect(isSelected).toExist();
    });

    it("Memilih warna biru", async () => {
      const blue = $("~Blue color");
      await blue.click();

      const isSelected = $("~Indicates when color is selected");
      await expect(isSelected).toExist();
    });

    it("Memilih warna abu", async () => {
      const gray = $("~Gray color");
      await gray.click();

      const isSelected = $("~Indicates when color is selected");
      await expect(isSelected).toExist();
    });

    it("Memilih warna hijau", async () => {
      const green = $("~Green color");
      await green.click();

      const isSelected = $("~Indicates when color is selected");
      await expect(isSelected).toExist();
    });

    describe("Fitur Cart", () => {
      beforeEach(async () => {
        await driver.reset;
        await scroll(1000, 500);
      });

      it("Memilih warna hitam dan quantity satu", async () => {
        const black = $("~Black color");
        await black.click();

        const addToCartButton = $("~Tap to add product to cart");
        await addToCartButton.click();

        const quantityText = await $(
          "id=com.saucelabs.mydemoapp.android:id/noTV"
        ).getText();
        const quantityInCartText = await $(
          "id=com.saucelabs.mydemoapp.android:id/cartTV"
        ).getText();
        await expect(quantityInCartText).toBe(quantityText);

        const cartButton = $("id=com.saucelabs.mydemoapp.android:id/cartIV");
        await cartButton.click();

        const quantity = parseInt(quantityText, 10);
        const totalItems = await $(
          "id=com.saucelabs.mydemoapp.android:id/itemsTV"
        ).getText();
        const items = parseInt(totalItems.split(" ")[0], 10);
        await expect(items).toBe(quantity);

        const priceText = await $(
          "id=com.saucelabs.mydemoapp.android:id/priceTV"
        ).getText();
        const price = parseFloat(priceText.split(" ")[1]);
        const totalPriceText = await $(
          "id=com.saucelabs.mydemoapp.android:id/totalPriceTV"
        ).getText();
        const totalPrice = parseFloat(totalPriceText.split(" ")[1]);
        const expectedTotal = parseFloat((price * items).toFixed(2));
        await expect(totalPrice).toBe(expectedTotal);

        // const productInCart = await $('id=com.saucelabs.mydemoapp.android:id/titleTV').getText()
        // const productTitle = await $('id=com.saucelabs.mydemoapp.android:id/productTV').getText()
        // await expect(productInCart).toBe(productTitle)

        // const colorInCart = $('id=com.saucelabs.mydemoapp.android:id/colorIV')
        // const colorSelected = $('//*[resource-id="com.saucelabs.mydemoapp.android:id/colorIV"]')
        // await expect(colorInCart).toBe(colorSelected)
      });

      it("Memilih warna hijau dan quantity 5", async () => {
        const green = $("~Green color");
        await green.click();

        const increaseButton = $("~Increase item quantity");
        for (let i = 1; i < 5; i++) {
          await increaseButton.click();
        }

        const addToCartButton = $("~Tap to add product to cart");
        await addToCartButton.click();

        const quantityText = await $(
          "id=com.saucelabs.mydemoapp.android:id/noTV"
        ).getText();
        const quantityInCartText = await $(
          "id=com.saucelabs.mydemoapp.android:id/cartTV"
        ).getText();
        await expect(quantityInCartText).toBe(quantityText);

        const cartButton = $("id=com.saucelabs.mydemoapp.android:id/cartIV");
        await cartButton.click();

        const quantity = parseInt(quantityText, 10);
        const totalItems = await $(
          "id=com.saucelabs.mydemoapp.android:id/itemsTV"
        ).getText();
        const items = parseInt(totalItems.split(" ")[0], 10);
        await expect(items).toBe(quantity);

        const priceText = await $(
          "id=com.saucelabs.mydemoapp.android:id/priceTV"
        ).getText();
        const price = parseFloat(priceText.split(" ")[1]);
        const totalPriceText = await $(
          "id=com.saucelabs.mydemoapp.android:id/totalPriceTV"
        ).getText();
        const totalPrice = parseFloat(totalPriceText.split(" ")[1]);
        await expect(totalPrice).toBe(price * items);
      });

      it("Memilih warna biru dengan quantity 0", async () => {
        const blue = $("~Blue color");
        await blue.click();

        const decreaseButton = $("~Decrease item quantity");
        await decreaseButton.click();

        const addToCartButton = $("~Tap to add product to cart");
        await expect(addToCartButton).not.toBeEnabled();
      });

      it("Memilih warna abu dan quantity 30", async () => {
        const gray = $("~Gray color");
        await gray.click();

        const increaseButton = $("~Increase item quantity");
        for (let i = 1; i < 30; i++) {
          await increaseButton.click();
        }

        const addToCartButton = $("~Tap to add product to cart");
        await addToCartButton.click();

        const quantityText = await $(
          "id=com.saucelabs.mydemoapp.android:id/noTV"
        ).getText();
        const quantityInCartText = await $(
          "id=com.saucelabs.mydemoapp.android:id/cartTV"
        ).getText();
        await expect(quantityInCartText).toBe(quantityText);

        const cartButton = $("id=com.saucelabs.mydemoapp.android:id/cartIV");
        await cartButton.click();

        const quantity = parseInt(quantityText, 10);
        const totalItems = await $(
          "id=com.saucelabs.mydemoapp.android:id/itemsTV"
        ).getText();
        const items = parseInt(totalItems.split(" ")[0], 10);
        await expect(items).toBe(quantity);

        const priceText = await $(
          "id=com.saucelabs.mydemoapp.android:id/priceTV"
        ).getText();
        const price = parseFloat(priceText.split(" ")[1]);
        const totalPriceText = await $(
          "id=com.saucelabs.mydemoapp.android:id/totalPriceTV"
        ).getText();
        const totalPrice = parseFloat(totalPriceText.split(" ")[1]);
        const expectedTotal = parseFloat((price * items).toFixed(2));
        await expect(totalPrice).toBe(expectedTotal);
      });

      it("Menghapus produk pada keranjang", async () => {
        const blue = $("~Blue color");
        await blue.click();

        const addToCartButton = $("~Tap to add product to cart");
        await addToCartButton.click();

        const cartButton = $("id=com.saucelabs.mydemoapp.android:id/cartIV");
        await cartButton.click();

        const removeItemButton = $("~Removes product from cart");
        await removeItemButton.click();

        const cartTitle = $(
          "id=com.saucelabs.mydemoapp.android:id/noItemTitleTV"
        );
        await expect(cartTitle).toHaveText("No Items");

        const goShoppingButton = $(
          "id=com.saucelabs.mydemoapp.android:id/shoppingBt"
        );
        await expect(goShoppingButton).toExist();
      });

      it("Mengubah quantity produk pada keranjang", async () => {
        const blue = $("~Blue color");
        await blue.click();

        const addToCartButton = $("~Tap to add product to cart");
        await addToCartButton.click();

        const cartButton = $("id=com.saucelabs.mydemoapp.android:id/cartIV");
        await cartButton.click();

        const increaseButton = $("~Increase item quantity");
        for (let i = 1; i < 5; i++) {
          await increaseButton.click();
        }

        const quantityText = await $(
          "id=com.saucelabs.mydemoapp.android:id/noTV"
        ).getText();
        const quantityInCartText = await $(
          "id=com.saucelabs.mydemoapp.android:id/cartTV"
        ).getText();
        await expect(quantityInCartText).toBe(quantityText);

        const quantity = parseInt(quantityText, 10);
        const totalItems = await $(
          "id=com.saucelabs.mydemoapp.android:id/itemsTV"
        ).getText();
        const items = parseInt(totalItems.split(" ")[0], 10);
        await expect(items).toBe(quantity);

        const priceText = await $(
          "id=com.saucelabs.mydemoapp.android:id/priceTV"
        ).getText();
        const price = parseFloat(priceText.split(" ")[1]);
        const totalPriceText = await $(
          "id=com.saucelabs.mydemoapp.android:id/totalPriceTV"
        ).getText();
        const totalPrice = parseFloat(totalPriceText.split(" ")[1]);
        const expectedTotal = parseFloat((price * items).toFixed(2));
        await expect(totalPrice).toBe(expectedTotal);
      });
    });

    afterEach(async () => {
      const viewMenu = $("~View menu");
      await viewMenu.click();

      const resetApp = $('//*[@text="Reset App State"]');
      await resetApp.click();

      const resetAppConfirm = $("id=android:id/button1");
      await resetAppConfirm.click();
      await resetAppConfirm.click();
    });
  });

  after(async () => {
    await driver.pause(2000);
  });
});
