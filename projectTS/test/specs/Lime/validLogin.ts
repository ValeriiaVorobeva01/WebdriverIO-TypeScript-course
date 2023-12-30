describe ('Login valid', () => {
    it('login', async () => {
        browser.url('https://cabinet-ru-lime-vvorobeva.te.lime.local/login')
        
        await browser.pause(1000)
        await $('#login-mobile').setValue('79953512245')
        // console.log('getvalue - ' + await (await $('#login-mobile')).getValue())
        // expect(await $('#login-mobile').getValue()).toEqual('+7(995) 351-2245')
        
        await browser.pause(1000)
        await (await $("input[id='login-password']")).setValue('123qwe')

        await browser.pause(2000)
        await (await $("//div[@class='login-form__footer']//button[@type='submit']")).click()

        await browser.pause(5000) 
        expect(await (await $('h1')).getText()).toEqual('Мой заём')    
        
    })
})