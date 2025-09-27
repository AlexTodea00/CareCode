import { useState, type JSX } from 'react'
import styles from '@/styles/uploadPhoto.module.scss'
import PersonIcon from '@/assets/icons/person.svg?react'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import UploadIcon from '@/assets/icons/upload.svg?react'
import { toast } from 'sonner'
import FieldError from '../../components/FieldError'
import type { FormType } from '@/pages/form/CareCodeForm'
import type { UseFormRegister } from 'react-hook-form'

type Props = {
  error?: string
  register: UseFormRegister<FormType>
}

function UploadPhoto({ error, register }: Props): JSX.Element {
  const [picture, setPicture] = useState<string>(null)

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPicture(URL.createObjectURL(event.target.files[0]))
    }
    toast.success('Image uploaded successfully')
  }

  return (
    <div className={styles['upload-photo']}>
      <div className={styles['avatar']}>
        {picture ? (
          <img className={styles.picture} src={picture} alt="profile_picture" />
        ) : (
          <PersonIcon width={48} height={48} />
        )}
      </div>
      <div>
        <Label
          className={`${styles['upload-button']} ${error ? styles['error'] : ''}`}
        >
          <UploadIcon />
          Upload photo
          <Input
            {...register('picture')}
            accept="image/*"
            onChange={value => onImageChange(value)}
            className="max-w-fit absolute opacity-0"
            id="picture"
            type="file"
          />
        </Label>
        <p className="mt-1.5">For identification purposes</p>
        {error && <FieldError error={error} />}
      </div>
    </div>
  )
}

export default UploadPhoto
