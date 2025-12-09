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
import { useTranslation } from 'react-i18next'

export default function ProfileSection(): JSX.Element {
  const form = useFormContext<FormType>()
  const { t } = useTranslation()

  return (
    <FormSection
      header={t('carecodeForm.profileSection.title')}
      description={t('carecodeForm.profileSection.subtitle')}
      className="person"
      Icon={PersonIcon}
    >
      <UploadPhoto
        register={form.register}
        error={form.formState.errors.picture?.message}
      />
      <div className="flex mt-5 gap-4">
        <TextFormField
          label={t('form.input.fullName.label')}
          placeholder={t('form.input.fullName.placeholder')}
          name="fullName"
          form={form}
        />
        <TextFormField
          label={t('form.input.dob.label')}
          maxLength={10}
          placeholder={t('form.input.dob.placeholder')}
          name="dob"
          form={form}
        />
      </div>
      <FormField
        control={form.control}
        name="bloodType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="mt-4">
              {t('form.input.bloodType.label')}
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="w-[100%]">
                  <SelectValue
                    placeholder={t('form.input.bloodType.placeholder')}
                  />
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
          label={t('form.input.weight.label')}
          maxLength={3}
          placeholder={t('form.input.weight.placeholder')}
          name="weight"
          form={form}
        />
        <TextFormField
          label={t('form.input.height.label')}
          maxLength={3}
          placeholder={t('form.input.height.placeholder')}
          name="height"
          form={form}
        />
      </div>
    </FormSection>
  )
}
