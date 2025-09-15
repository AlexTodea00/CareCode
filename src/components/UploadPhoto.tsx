import type { JSX } from 'react'
import '@/styles/uploadPhoto.scss'
import PersonIcon from '@/assets/icons/person.svg?react'
import { Input } from './ui/input'

function UploadPhoto(): JSX.Element {
  return (
    <div id="upload-photo">
      <div id="avatar">
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
