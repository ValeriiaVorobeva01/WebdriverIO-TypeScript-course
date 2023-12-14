import { expect } from '@wdio/globals'
import LoginPage from '../../pajeobject/login.page.js'
import SecurePage from '../../pajeobject/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
            
    })

    it('should not login with invalid password', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'Password')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your password is invalid!')
            
    })

    it('should not login with invalid', async () => {
        await LoginPage.open()

        await LoginPage.login('tom', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your username is invalid!'
        )
    })
})

