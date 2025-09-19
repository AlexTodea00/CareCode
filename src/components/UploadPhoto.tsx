import { useState, type JSX } from 'react'
import styles from '@/styles/uploadPhoto.module.scss'
import PersonIcon from '@/assets/icons/person.svg?react'
import { Input } from './ui/input'
import { Label } from './ui/label'
import UploadIcon from '@/assets/icons/upload.svg?react'
import { toast } from 'sonner'

function UploadPhoto(): JSX.Element {
  const [picture, setPicture] = useState(null)

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
        <Label className={styles['upload-button']}>
          <UploadIcon />
          Upload photo
          <Input
            accept="image/*"
            onChange={value => onImageChange(value)}
            className="hidden"
            id="picture"
            type="file"
          />
        </Label>
        <p className="mt-1.5">For identification purposes</p>
      </div>
    </div>
  )
}

export default UploadPhoto
