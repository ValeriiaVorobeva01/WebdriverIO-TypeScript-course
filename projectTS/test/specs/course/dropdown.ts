// создаём класс с функцией, которая возвращает текст выбранного значения 
export class Select {
    async getSelectedOption(options: any) {
        let selectedText = ""

        for(let option of options) {
            if(await option.isSelected()) {
                selectedText = await option.getText()
                break
            }
        }
        return selectedText
    }

    async getSelectedValue(options: any) {
        let selectedText = ""

        for(let option of options) {
            if(await option.isSelected()) {
                selectedText = await option.getValue()
                break
            }
        }
        return selectedText
    }
}

describe ('DropDown', () => {
    it('verify dropdown', async () => {
        browser.url('https://qavbox.github.io/demo/signup')
        await browser.pause(2000)
        let select = await $("select[name='sgender']")
        let options = await select.$$("option")
        console.log("items count -" + await options.length)
        expect(options.length).toBe(4)

        await select.selectByIndex(1)
        // expect (await (await $("option[value=\'male\']")).isSelected()).toBe(true)
        expect(await new Select().getSelectedOption(options)).toEqual("Male")

        browser.pause(1000)
        await select.selectByVisibleText("Select:")
        expect (await (await $("option[value=\'select\']")).isSelected()).toBe(true)

        await select.selectByAttribute("value", "na")

        await browser.pause(2000)

    })
})