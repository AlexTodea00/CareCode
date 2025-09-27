import type { JSX } from 'react'
import FormSection from '../../components/FormSection'
import PersonIcon from '@/assets/icons/person.svg?react'
import { BLOOD_TYPE, INPUT_MAX_LENGTH } from '@/utils/general'
import UploadPhoto from './UploadPhoto'
import { useFormContext } from 'react-hook-form'
import type { FormType } from '@/pages/form/CareCodeForm'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '../../components/ui/form'
import { Input } from '../../components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select'

export default function ProfileSection(): JSX.Element {
  const form = useFormContext<FormType>()

  return (
    <FormSection
      header="Personal Information"
      description="BASIC IDENTITY"
      className="person"
      Icon={PersonIcon}
    >
      <UploadPhoto
        register={form.register}
        error={form.formState.errors.picture?.message}
      />
      <div className="flex mt-5 gap-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="max-w-full flex-1">
              <FormLabel>Full name*</FormLabel>
              <FormControl>
                <Input
                  maxLength={INPUT_MAX_LENGTH}
                  placeholder="Enter your full name"
                  {...field}
                ></Input>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="dob"
          render={({ field }) => (
            <FormItem className="max-w-full flex-1">
              <FormLabel>Date of birth*</FormLabel>
              <FormControl>
                <Input
                  maxLength={10}
                  placeholder="dd/mm/yyyy"
                  {...field}
                ></Input>
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="bloodType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="mt-4">Blood type*</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="w-[100%]">
                  <SelectValue placeholder="Select blood type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {BLOOD_TYPE.map(type => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.text}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormDescription />
            <FormMessage />
          </FormItem>
        )}
      />
    </FormSection>
  )
}
