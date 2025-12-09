import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { EMAIL_REGEX, INPUT_MAX_LENGTH, PASSWORD_REGEX } from '@/utils/general'
import { yupResolver } from '@hookform/resolvers/yup'
import { type JSX } from 'react'
import { useForm, type Resolver } from 'react-hook-form'
import * as yup from 'yup'
import EmailIcon from '@/assets/icons/email.svg?react'
import PasswordIcon from '@/assets/icons/password.svg?react'
import styles from '@/styles/loginPage.module.scss'
import { Button } from '@/components/ui/button'
import RegisterIcon from '@/assets/icons/sign_in.svg?react'
import { useNavigate } from 'react-router-dom'
import { MEDICAL_FORM_PATH } from '@/utils/paths'
import { useTranslation } from 'react-i18next'

type RegisterFormType = {
  email: string
  password: string
  confirmPassword: string
}

const LoginSchema: yup.ObjectSchema<RegisterFormType> = yup.object().shape({
  email: yup
    .string()
    .required('form.input.email.required')
    .matches(EMAIL_REGEX, 'form.input.email.regex'),
  password: yup
    .string()
    .required('form.input.password.required')
    .matches(PASSWORD_REGEX, 'form.input.password.regex'),
  confirmPassword: yup
    .string()
    .test(
      'passwords-match',
      'form.input.confirmPassword.mustMatch',
      function (value) {
        return this.parent.password === value
      },
    ),
})

function RegisterForm(): JSX.Element {
  const { t } = useTranslation()
  const form = useForm<RegisterFormType>({
    resolver: yupResolver(LoginSchema) as Resolver<RegisterFormType>,
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const navigate = useNavigate()
  const sessionStorage = window.sessionStorage

  const onSubmit = async (dta: RegisterFormType): Promise<void> => {
    sessionStorage.setItem('email', dta.email)
    sessionStorage.setItem('password', dta.password)
    form.reset()
    navigate(MEDICAL_FORM_PATH)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={styles.form}
        noValidate
      >
        <h2 className={`${styles['text-center']}`}>
          {t('auth.register.title')}
        </h2>
        <p className={`${styles['text-center']}`}>
          {t('auth.register.subtitle')}
        </p>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="max-w-full flex-1 mt-3.5">
              <FormLabel>
                <EmailIcon />
                {t('form.input.email.label')}
              </FormLabel>
              <FormControl>
                <Input
                  maxLength={INPUT_MAX_LENGTH}
                  placeholder={t('form.input.email.placeholder')}
                  {...field}
                ></Input>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="max-w-full flex-1 mt-3.5">
              <FormLabel>
                <PasswordIcon />
                {t('form.input.password.label')}
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  maxLength={INPUT_MAX_LENGTH}
                  placeholder={t('form.input.password.placeholder')}
                  {...field}
                ></Input>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="max-w-full flex-1 mt-3.5">
              <FormLabel>
                <PasswordIcon />
                {t('form.input.confirmPassword.label')}
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  maxLength={INPUT_MAX_LENGTH}
                  placeholder={t('form.input.confirmPassword.placeholder')}
                  {...field}
                ></Input>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>
          <RegisterIcon className={styles.white} />
          {t('auth.register.button')}
        </Button>
      </form>
    </Form>
  )
}

export default RegisterForm
