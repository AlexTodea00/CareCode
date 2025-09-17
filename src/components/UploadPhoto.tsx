import type { JSX } from 'react'
import styles from '@/styles/uploadPhoto.module.scss'
import PersonIcon from '@/assets/icons/person.svg?react'
import { Input } from './ui/input'

function UploadPhoto(): JSX.Element {
  return (
    <div className={styles['upload-photo']}>
      <div className={styles['avatar']}>
        <PersonIcon width={48} height={48} />
      </div>
      <div>
        <Input className="cursor-pointer" id="picture" type="file" />
        <p className="mt-1.5">For identification purposes</p>
      </div>
    </div>
  )
}

export default UploadPhoto
