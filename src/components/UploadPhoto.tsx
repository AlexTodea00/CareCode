import type { JSX } from 'react'
import 'styles/uploadPhoto.scss'
import PersonIcon from 'assets/icons/person.svg?react'

function UploadPhoto(): JSX.Element {
  return (
    <div id="upload-photo">
      <div id="avatar">
        <PersonIcon width={48} height={48} />
      </div>
    </div>
  )
}

export default UploadPhoto
