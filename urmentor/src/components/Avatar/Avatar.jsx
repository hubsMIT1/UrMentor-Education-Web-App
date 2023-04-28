import React from 'react'
import './Avatar.css'
const Avatar = ({className,src,alt}) => {
  return (
    <div>
        {
            src ?   (
                <img className={`defaultClass ${className}`} src = {src} alt = {alt} />

            ): (
                <img
                className={`defaultClass ${className}`}src = { "https://www.kindpng.com/picc/m/78-785917_user-login-function-name-avatar-user-icon-hd.png" 
                } alt = {alt} />
            )
        }
        </div>
  )
}
export default Avatar;