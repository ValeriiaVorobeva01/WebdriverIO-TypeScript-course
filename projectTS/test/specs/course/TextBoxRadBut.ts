
describe ('Text vs value', () => {
    it('verify textBox', async () => {
        browser.url('https://qavbox.github.io/demo/signup')
        await browser.pause(2000)
        // заполняем поле
        await $('#username').setValue('qavbox')
        // проверяем значение в поле
        console.log('getvalue - ' + await (await $('#username')).getValue())
        expect(await $('#username').getValue()).toEqual('qavbox')
        // удаляем значение из поля
        await $('#username').clearValue()
        expect(await $('#username').getValue()).toEqual('')
        await browser.pause(2000)

    })

    xit('verify radioButton', async () => {
        browser.url('https://qavbox.github.io/demo/signup')
        await browser.pause(2000)
        let exps = await $$("input[name='experience']")
        expect(exps.length).toEqual(8) // проверяем кол-во баттонов
        // фильтруем массив, отбираем нужный элемент
        exps.filter(async el => {
            if(await el.getValue() === "three") {
                await el.click()
                expect(await el.isSelected()).toBe(true)
            }
        })
        // кликаем на другой баттон
        await browser.pause(2000)
        await (await $("input[name='experience'][value='six']")).click()
        expect(await $("input[name='experience'][value='six']").isSelected()).toBe(true)
        await browser.pause(2000)
    })

    it('verify checkBox', async () => {
        browser.url('https://qavbox.github.io/demo/signup')
        await browser.pause(2000)
        let exps = await $$("input[name='language']")
        expect(exps.length).toEqual(7) // проверяем кол-во чек боксов
        // фильтруем массив, отбираем нужный элемент
        exps.filter(async el => {
            if((await el.getValue()).includes("testing")) {
                await el.click()
                expect(await el.isSelected()).toBe(true)
                await browser.pause(1000)
            }
        })
        // кликаем на чек боксы
        await browser.pause(2000)
        await (await $("input[name='language'][value='testng']")).click()
        expect(await $("input[name='language'][value='testng']").isSelected()).toBe(true)

        await browser.pause(2000)
        await (await $("input[name='language'][value='html']")).click()
        expect(await $("input[name='language'][value='html']").isSelected()).toBe(true)

        await browser.pause(4000)
    })
})