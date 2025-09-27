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
import type { JSX } from 'react'
import { useForm, type Resolver } from 'react-hook-form'
import * as yup from 'yup'
import EmailIcon from '@/assets/icons/email.svg?react'
import PasswordIcon from '@/assets/icons/password.svg?react'
import styles from '@/styles/loginPage.module.scss'
import { Button } from '@/components/ui/button'
import RegisterIcon from '@/assets/icons/sign_in.svg?react'

type RegisterFormType = {
  email: string
  password: string
  confirmPassword: string
}

const LoginSchema: yup.ObjectSchema<RegisterFormType> = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(EMAIL_REGEX, 'Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .matches(PASSWORD_REGEX, 'Password must match requirements'),
  confirmPassword: yup
    .string()
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value
    }),
})

function RegisterForm(): JSX.Element {
  const form = useForm<RegisterFormType>({
    resolver: yupResolver(LoginSchema) as Resolver<RegisterFormType>,
  })

  const onSubmit = (dta: RegisterFormType) => {
    console.log(dta)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={styles.form}
        noValidate
      >
        <h2 className={`${styles['text-center']}`}>Create account</h2>
        <p className={`${styles['text-center']}`}>
          Set up your medical profile
        </p>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="max-w-full flex-1 mt-3.5">
              <FormLabel>
                <EmailIcon />
                Email*
              </FormLabel>
              <FormControl>
                <Input
                  maxLength={INPUT_MAX_LENGTH}
                  placeholder="Enter your email"
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
                Password*
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  maxLength={INPUT_MAX_LENGTH}
                  placeholder="Enter your password"
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
                Confirm Password*
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  maxLength={INPUT_MAX_LENGTH}
                  placeholder="Confirm your password"
                  {...field}
                ></Input>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>
          <RegisterIcon />
          Register
        </Button>
      </form>
    </Form>
  )
}

export default RegisterForm
