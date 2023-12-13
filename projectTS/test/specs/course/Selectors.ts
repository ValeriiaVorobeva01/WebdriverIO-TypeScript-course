import locators from "./Locators.ts"

describe('Name of the group', () => {

    it('should behave...', async () => {
        browser.url('https://qavbox.github.io/demo/')
        browser.pause(2000)
        await $('=SignUp Form').click() // любой элемент с текстом = SignUp Form
        await (await locators.getTextBowIndex(1)).setValue('qa')
        
        // await $('h3').getText() // используем имя тэга
        // console.log(await (await $('label=Full Name')).getAttribute('id'))

        // await (await $('=WebTable')).click()
        // await browser.pause(2000)
        // await $('table[id=\'table01\'] tbody tr:nth-child(1) td:nth-child(2)').getText()
        // await browser.pause(2000)

        // await (await locators.getTableData(1,2)).getText()
        await browser.pause(2000)

        // await $('#username') // using id
        // await $('.EnterText') // using classname
        // console.log(await $$('[role=link]').length) // узнать кол-во
        // console.log(await $$('<a>').length)
    })

}) 