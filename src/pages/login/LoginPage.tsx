import Page from '@/components/Page'
import type { JSX } from 'react'
import styles from '@/styles/loginPage.module.scss'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SignInIcon from '@/assets/icons/sign_in.svg?react'
import LoginIcon from '@/assets/icons/login.svg?react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

function LoginPage(): JSX.Element {
  return (
    <Page description="EMERGENCY MEDICAL INFORMATION">
      <section className={styles.container}>
        <Tabs className={styles.tabs} defaultValue="login">
          <TabsList>
            <TabsTrigger value="login">
              <LoginIcon />
              Login
            </TabsTrigger>
            <TabsTrigger value="register">
              <SignInIcon />
              Register
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
