
describe ('Text vs value', () => {
    it('multiple els', async () => {
        browser.url('https://qavbox.github.io/demo/signup')
        await browser.pause(2000)
        // // смотрим массив
        // console.log(await $$("input[type='text']").length)

        // // для каждого эл
        // await browser.pause(2000)
        // await $$("input[type='text']").forEach(el => {
        //     console.log(el.getAttribute("id"))
        // })

        // или фильтр
        let textItems = await $$("input[type='text']")
        let items = textItems.filter(el => {
                console.log(el.getAttribute("id"))
        })
        await browser.pause(2000)
        console.log(await textItems[2].getAttribute("id"))

        // // --------------------для списка с текстом---------------------------
        // let options = await $$("#tools option")
        // await options.filter( el => {
        //     console.log(el.getText())
        // })
        // await browser.pause(2000)
        // console.log(options[1].getText())

        // await browser.pause(2000)
    })
})