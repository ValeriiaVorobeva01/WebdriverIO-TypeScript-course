import { expect } from '@wdio/globals'
import LoginPage from '../../pajeobject/login.page.js'
import SecurePage from '../../pajeobject/secure.page.js'

describe ('Invalid login', () => {
    it('should not login with invalid', async () => {
        await LoginPage.open()

        await LoginPage.login('tom', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your username is invalid!'
        )
    })
})
