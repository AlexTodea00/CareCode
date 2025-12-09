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
import { useTranslation } from 'react-i18next'

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
        .required('form.input.email.required')
        .matches(EMAIL_REGEX, 'form.input.email.regex'),
    otherwise: schema => schema.notRequired(),
  }),

  password: yup.string().when('showPassword', {
    is: true,
    then: schema =>
      schema
        .required('form.input.password.required')
        .matches(PASSWORD_REGEX, 'form.input.password.regex'),
    otherwise: schema => schema.notRequired(),
  }),

  confirmPassword: yup.string().when('showPassword', {
    is: true,
    then: schema =>
      schema
        .required('form.input.confirmPassword.mustMatch')
        .oneOf([yup.ref('password')], 'form.input.confirmPassword.mustMatch'),
    otherwise: schema => schema.notRequired(),
  }),
})

export default function ForgotPassword(): JSX.Element {
  const [isResetSent, setIsResetSent] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation()

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
        toast.error(t('toast.error'))
      }
      if (data) {
        toast.success(t('toast.passwordReset'))
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
        toast.error(t('toast.error'))
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
      return t('forgotPassword.updatePassword')
    }
    if (!isResetSent) {
      return t('forgotPassword.passwordReset')
    } else {
      return t('forgotPassword.requestSent')
    }
  }

  const compileDescription = (): string => {
    if (showPassword) {
      return t('forgotPassword.description.resetPassword')
    }
    if (!isResetSent) {
      return t('forgotPassword.description.emailRequest')
    } else {
      return t('forgotPassword.description.followInstructions')
    }
  }

  return (
    <Page description={t('general.emergencyMedicalInfo')}>
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
                  label={t('form.input.email.label')}
                  placeholder={t('form.input.email.placeholder')}
                  name={'email'}
                />
              )}
              {showPassword && (
                <>
                  <TextFormField
                    className="mt-4"
                    form={form}
                    label={t('form.input.password.label')}
                    placeholder={t('form.input.password.placeholder')}
                    name={'password'}
                    type="password"
                  />
                  <TextFormField
                    className="mt-4"
                    form={form}
                    label={t('form.input.confirmPassword.label')}
                    placeholder={t('form.input.confirmPassword.label')}
                    name={'confirmPassword'}
                    type="password"
                  />
                </>
              )}
              <Button className="w-full mt-2">
                {isRequestLoading && <Spinner />}
                {t('general.submit')}
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
