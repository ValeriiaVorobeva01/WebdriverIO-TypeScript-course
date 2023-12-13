describe("app login", () => {

    it("valid user", async () => {

        await browser.url("https://www.saucedemo.com/v1/")
        const userNameTextBox = $("#user-name")
        const passwordTextBox = $("#password")
        const loginButton = $("#login-button")

        await userNameTextBox.setValue("standard_user")
        await passwordTextBox.setValue("secret_sauce")
        await loginButton.click()

        const productTitle = $(".product_label")
        await expect(productTitle).toBeDisplayed()
        
    })

})