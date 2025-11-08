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
import { MY_ACCOUNT_PATH, PASSWORD_RESET } from '@/utils/paths'
import { CheckCircleIcon } from 'lucide-react'
import { Spinner } from '@/components/ui/spinner'
import { useNavigate } from 'react-router-dom'

type FormType = {
  email: string
  showPassword: boolean
  password: string
  confirmPassword: string
}

const ForgotPasswordSchema: yup.ObjectSchema<FormType> = yup.object().shape({
  showPassword: yup.boolean(),
  email: yup.string().when('showPassword', {
    is: false,
    then: schema =>
      schema
        .required('Email is required')
        .matches(EMAIL_REGEX, 'Invalid email format'),
    otherwise: schema => schema.notRequired(),
  }),

  password: yup.string().when('showPassword', {
    is: true,
    then: schema =>
      schema
        .required('Password is required')
        .matches(PASSWORD_REGEX, 'Password must match requirements'),
    otherwise: schema => schema.notRequired(),
  }),

  confirmPassword: yup.string().when('showPassword', {
    is: true,
    then: schema =>
      schema
        .required('Please confirm your password')
        .oneOf([yup.ref('password')], 'Passwords must match'),
    otherwise: schema => schema.notRequired(),
  }),
})

export default function ForgotPassword(): JSX.Element {
  const [isResetSent, setIsResetSent] = useState(false)
  const navigate = useNavigate()

  const form = useForm<FormType>({
    resolver: yupResolver(ForgotPasswordSchema) as Resolver<FormType>,
    defaultValues: {
      email: '',
      showPassword: false,
      password: '',
      confirmPassword: '',
    },
  })

  const showPassword = form.watch('showPassword')
  const [isRequestLoading, setIsRequestLoading] = useState(false)

  const onSubmit = async (dta: FormType): Promise<void> => {
    setIsRequestLoading(true)
    if (showPassword) {
      const { data, error } = await supabase.auth.updateUser({
        email: localStorage.getItem('email'),
        password: dta.password,
      })

      if (error) {
        toast.error('Something went wrong')
      }
      if (data) {
        toast.success('Password has been reset')
        localStorage.removeItem('email')
        navigate(MY_ACCOUNT_PATH, { replace: true })
      }
    } else {
      try {
        localStorage.setItem('email', dta.email)
        await supabase.auth.resetPasswordForEmail(dta.email, {
          redirectTo: `${import.meta.env.VITE_BASE_URL}${PASSWORD_RESET}`,
        })
        setIsResetSent(true)
      } catch {
        toast.error('Something went wrong')
      }
    }
    setIsRequestLoading(false)
  }

  useEffect(() => {
    supabase.auth.onAuthStateChange(async event => {
      if (event == 'PASSWORD_RECOVERY') {
        form.setValue('showPassword', true)
      }
    })
  }, [form])

  const compileTitle = (): string => {
    if (showPassword) {
      return 'Update password'
    }
    if (!isResetSent) {
      return 'Password reset'
    } else {
      return 'Reset request sent'
    }
  }

  const compileDescription = (): string => {
    if (showPassword) {
      return 'Enter a new, secure password to finish resetting your account.'
    }
    if (!isResetSent) {
      return 'In order to reset your password, we need the email you used to create your account'
    } else {
      return 'Follow the instructions in the email to set a new password.'
    }
  }

  console.log(form.formState.errors)

  return (
    <Page description="EMERGENCY MEDICAL INFORMATION">
      <section className={styles.container}>
        {isResetSent && (
          <div className={styles.confirmation}>
            <CheckCircleIcon width={32} height={32} />
          </div>
        )}
        <h2 className={`${styles.title} ${isResetSent ? 'text-center' : ''}`}>
          {compileTitle()}
        </h2>
        <p className={`${isResetSent ? 'text-center' : ''}`}>
          {compileDescription()}
        </p>
        {!isResetSent ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
              {!showPassword && (
                <TextFormField
                  className="mt-4"
                  form={form}
                  label="Email*"
                  placeholder={'Enter your email'}
                  name={'email'}
                />
              )}
              {showPassword && (
                <>
                  <TextFormField
                    className="mt-4"
                    form={form}
                    label="Password*"
                    placeholder={'Enter your password'}
                    name={'password'}
                    type="password"
                  />
                  <TextFormField
                    className="mt-4"
                    form={form}
                    label="Confirm password*"
                    placeholder={'Confirm your password'}
                    name={'confirmPassword'}
                    type="password"
                  />
                </>
              )}
              <Button className="w-full mt-2">
                {isRequestLoading && <Spinner />}
                Submit
              </Button>
            </form>
          </Form>
        ) : (
          <p></p>
        )}
      </section>
    </Page>
  )
}
