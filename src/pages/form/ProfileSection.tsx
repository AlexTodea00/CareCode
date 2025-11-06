import type { JSX } from 'react'
import FormSection from '../../components/FormSection'
import PersonIcon from '@/assets/icons/person.svg?react'
import { BLOOD_TYPE } from '@/utils/general'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select'
import TextFormField from '@/components/TextFormField'

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
        <TextFormField
          label="First name*"
          placeholder="Enter your full name"
          name="fullName"
          form={form}
        />
        <TextFormField
          label="Date of birth*"
          maxLength={10}
          placeholder="dd/mm/yyyy"
          name="dob"
          form={form}
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
      <div className="flex mt-5 gap-4">
        <TextFormField
          label="Weight (kg)*"
          maxLength={3}
          placeholder="Enter your weight"
          name="weight"
          form={form}
        />
        <TextFormField
          label="Height (cm)*"
          maxLength={3}
          placeholder="Enter your height"
          name="height"
          form={form}
        />
      </div>
    </FormSection>
  )
}
