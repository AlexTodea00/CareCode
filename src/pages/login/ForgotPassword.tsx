import Page from '@/components/Page'
import { useEffect, useState, type JSX } from 'react'
import styles from '@/styles/loginPage.module.scss'
import * as yup from 'yup'
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/utils/general'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, type Resolver } from 'react-hook-form'
import TextFormField from '@/components/TextFormField'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { supabase } from '@/utils/supabase'
import { toast } from 'sonner'

type FormType = {
  email: string
  password: string
  confirmPassword: string
}

Fix yup validation

const ForgotPasswordSchema: yup.ObjectSchema<FormType> = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(EMAIL_REGEX, 'Invalid email format'),
  password: yup
    .string()
    .when()
    .required('Password is required')
    .matches(PASSWORD_REGEX, 'Password must match requirements'),
  confirmPassword: yup
    .string()
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value
    }),
})

export default function ForgotPassword(): JSX.Element {
  const [isEmailRedirected, setIsEmailRedirected] = useState(false)
  const [isResetSent, setIsResetSent] = useState(false)

  const form = useForm<FormType>({
    resolver: yupResolver(ForgotPasswordSchema) as Resolver<FormType>,
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (dta: FormType): Promise<void> => {
    console.log('dasdasas')

    if (isEmailRedirected) {
      try {
        await supabase.auth.updateUser({ password: dta.password })
      } catch {
        toast.error('Something went wrong')
      }
    } else {
      console.log('here')

      try {
        console.log('cal')

        await supabase.auth.resetPasswordForEmail(dta.email)
        setIsResetSent(true)
      } catch {
        toast.error('Something went wrong')
      }
    }
  }

  useEffect(() => {
    supabase.auth.onAuthStateChange(async event => {
      if (event == 'PASSWORD_RECOVERY') {
        setIsEmailRedirected(true)
      }
    })
  }, [])

  return (
    <Page description="EMERGENCY MEDICAL INFORMATION">
      <section className={styles.container}>
        <h2 className={styles.title}>Password reset</h2>
        <p>
          In order to reset your password, we need the email you used to create
          your account
        </p>
        <Form {...form}>
          {!isResetSent ? (
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
              <TextFormField
                className="mt-4"
                form={form}
                label="Email*"
                placeholder={'Enter your email'}
                name={'email'}
              />
              {isEmailRedirected && (
                <>
                  <TextFormField
                    className="mt-4"
                    form={form}
                    label="Password*"
                    placeholder={'Enter your password'}
                    name={'email'}
                  />
                  <TextFormField
                    className="mt-4"
                    form={form}
                    label="Email*"
                    placeholder={'Enter your email'}
                    name={'email'}
                  />
                </>
              )}
              <Button className="w-full mt-2">Submit</Button>
            </form>
          ) : (
            <div>Done</div>
          )}
        </Form>
      </section>
    </Page>
  )
}
