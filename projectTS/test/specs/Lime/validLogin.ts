describe ('Login valid', () => {
    it('login', async () => {
        browser.url('https://cabinet-ru-lime-vvorobeva.te.lime.local/login')
        await browser.pause(1000)
        // заполняем поле
        await $('#login-mobile').setValue('79953512245')
        // проверяем значение в поле
        console.log('getvalue - ' + await (await $('#login-mobile')).getValue())
        expect(await $('#login-mobile').getValue()).toEqual('+7(995) 351-2245')
        // заполняем поле
        await browser.pause(1000)
        await (await $("input[id='login-password']")).setValue('123qwe')

        await browser.pause(1000)
        await $('').click()

        await browser.pause(3000)       
        await expect('<h1>').toHaveText('Мой заём')
    })
})