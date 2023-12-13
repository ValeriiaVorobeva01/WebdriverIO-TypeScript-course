describe('Name of the group', () => {
    it('should behave...', async () => {
        browser.url('https://qavbox.github.io/demo/')
        browser.pause(2000)
        // await $('=SignUp Form').click() // любой элемент, который содержит текст =
        // await browser.pause(2000)

        // await $('h3').getText() // тэг содержит только текст

        // console.log(await (await $('label=Full Name')).getAttribute('id')) // элемент с ид

        await (await $('=WebTable')).click()
        await browser.pause(2000)
        await $('table[id=\'table01\'] tbody tr:nth-child(1) td:nth-child(2)').getText()
        await browser.pause(2000)
    })
}) 