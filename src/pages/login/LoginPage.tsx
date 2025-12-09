import Page from '@/components/Page'
import type { JSX } from 'react'
import styles from '@/styles/loginPage.module.scss'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SignInIcon from '@/assets/icons/sign_in.svg?react'
import LoginIcon from '@/assets/icons/login.svg?react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function LoginPage(): JSX.Element {
  const [searchParams] = useSearchParams()
  const { t } = useTranslation()

  const getDefaultTab = (): string => {
    const value = searchParams.get('defaultValue')
    if (value) {
      return 'register'
    }
    return 'login'
  }

  return (
    <Page description={t('general.emergencyMedicalInfo')}>
      <section className={styles.container}>
        <Tabs className={styles.tabs} defaultValue={getDefaultTab()}>
          <TabsList>
            <TabsTrigger value="login">
              <LoginIcon />
              {t('auth.loginText')}
            </TabsTrigger>
            <TabsTrigger value="register">
              <SignInIcon />
              {t('auth.registerText')}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </section>
    </Page>
  )
}

export default LoginPage
