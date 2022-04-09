import EyeCloseIcon from '@components/icons/eye-close.icon'
import EyeIcon from '@components/icons/eye.icon'
import KeyIcon from '@components/icons/key.icon'
import React, { HTMLAttributes, useState } from 'react'

interface IPasswordInputProps extends HTMLAttributes<HTMLInputElement> {}

const PasswordInput: React.FC<IPasswordInputProps> = ({ ...props }) => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  function toggleShowPassword() {
    setIsShowPassword(!isShowPassword)
  }

  return (
    <div className={`flex`}>
      <span className="z-highest flex h-10 w-10 items-center justify-center rounded-l-lg border border-r-0 text-2xl text-gray-400">
        <KeyIcon />
      </span>
      <div className="relative h-10 w-full">
        <input
          {...props}
          type={isShowPassword ? 'text' : 'password'}
          className="h-10 w-full rounded-r-lg border border-gray-200 pl-1 outline-none ring-blue-300 focus:ring-1"
          placeholder="password"
        />
        <div
          className={`absolute top-1/2 right-5 z-50 -translate-y-1/2 cursor-pointer`}
          onClick={toggleShowPassword}
        >
          {isShowPassword ? <EyeCloseIcon /> : <EyeIcon />}
        </div>
      </div>
    </div>
  )
}
export default PasswordInput
