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
import { EMAIL_REGEX, INPUT_MAX_LENGTH } from '@/utils/general'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState, type JSX } from 'react'
import { useForm, type Resolver } from 'react-hook-form'
import * as yup from 'yup'
import EmailIcon from '@/assets/icons/email.svg?react'
import PasswordIcon from '@/assets/icons/password.svg?react'
import styles from '@/styles/loginPage.module.scss'
import { Button } from '@/components/ui/button'
import { LogInIcon } from 'lucide-react'
import { supabase } from '@/utils/supabase'
import { Spinner } from '@/components/ui/spinner'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { MY_ACCOUNT_PATH, PASSWORD_RESET } from '@/utils/paths'

type LoginFormType = {
  email: string
  password: string
}

const LoginSchema: yup.ObjectSchema<LoginFormType> = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .matches(EMAIL_REGEX, 'Invalid email format'),
  password: yup.string().required('Password is required'),
})

function LoginForm(): JSX.Element {
  const form = useForm<LoginFormType>({
    resolver: yupResolver(LoginSchema) as Resolver<LoginFormType>,
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const onSubmit = async (dta: LoginFormType): Promise<void> => {
    try {
      setIsLoading(true)
      await supabase.auth.signInWithPassword({
        email: dta.email,
        password: dta.password,
      })
      setIsLoading(false)
      navigate(MY_ACCOUNT_PATH, { replace: true })
    } catch {
      toast.error('Something went wrong')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={styles.form}
        noValidate
      >
        <h2 className={`${styles['text-center']}`}>Welcome!</h2>
        <p className={`${styles['text-center']}`}>
          Sign in to access your medical profile
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

        <Button
          onClick={() => navigate(PASSWORD_RESET)}
          className="self-end justify-end"
          variant="link"
        >
          Forgot password?
        </Button>
        <Button>
          {isLoading && <Spinner />}
          {!isLoading && <LogInIcon />}
          Log in
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm
