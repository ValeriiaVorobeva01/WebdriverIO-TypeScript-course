import { expect } from '@wdio/globals'
import LoginPage from '../../pajeobject/login.page.js'
import SecurePage from '../../pajeobject/secure.page.js'

describe('Invalid login', () => {
    it('should not login with invalid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'Password')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your password is invalid!')
            
    })
})