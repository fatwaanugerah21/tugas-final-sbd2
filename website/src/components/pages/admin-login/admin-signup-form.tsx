import React, { ChangeEvent, useState } from 'react'
import KeyIcon from '@components/icons/key.icon'
import PersonIcon from '@components/icons/person.icon'
import Form from '@components/widget/Form'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Typography from '@components/widget/Typography'
import { sendAdminSignup } from '@utils/axios-handler'
import EyeIcon from '@components/icons/eye.icon'
import EyeCloseIcon from '@components/icons/eye-close.icon'
import PasswordInput from './password-input'

type TFormValues = {
  firstname: string
  lastname: string
  username: string
  password: string
}

const schema = yup.object({
  firstname: yup.string().required('Tolong input Nama Depan'),
  lastname: yup.string().required('Tolong input Nama Belakang'),
  username: yup.string().required('Tolong input username'),
  password: yup.string().required('Tolong input password'),
})

interface IAdminSignupFormProps {}

const AdminSignupForm: React.FC<IAdminSignupFormProps> = ({ ...props }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TFormValues>({
    // resolver: yupResolver(schema),
  })

  async function onSubmit(e: TFormValues) {
    console.log('Jalan')
    const data = sendAdminSignup(e.username, e.password)
    console.log(data)
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center rounded-lg bg-white px-6 py-4 shadow md:w-1/2 lg:w-1/3"
      >
        <h2 className="my-4 text-2xl">Signup</h2>
        <div className="flex w-full flex-col justify-start space-y-5 p-2">
          <div className={`space-y-1`}>
            <div className="flex">
              <input
                {...register('firstname')}
                className="h-10 w-full rounded-lg  border border-gray-200 pl-10 outline-none ring-blue-400 focus:ring-1"
                placeholder="firstname"
              />
            </div>
            <Typography
              text={errors.firstname?.message || ''}
              className={`ml-10 text-red-500`}
            />
          </div>
          <div className={`space-y-1`}>
            <div className="flex">
              <input
                {...register('lastname')}
                className="h-10  w-full rounded-lg border border-gray-200 pl-10 outline-none ring-blue-400 focus:ring-1"
                placeholder="lastname"
              />
            </div>
            <Typography
              text={errors.lastname?.message || ''}
              className={`ml-10 text-red-500`}
            />
          </div>
          <div className={`space-y-1`}>
            <div className="flex">
              <span className="z-highest flex h-10 w-10 items-center justify-center rounded-l-lg border border-r-0 text-2xl text-gray-400">
                <PersonIcon />
              </span>
              <input
                {...register('username')}
                className="w-full rounded-r-lg border border-gray-200 pl-1 outline-none ring-blue-400 focus:ring-1"
                placeholder="username"
              />
            </div>
            <Typography
              text={errors.username?.message || ''}
              className={`ml-10 text-red-500`}
            />
          </div>
          <div className={`space-y-1`}>
            <PasswordInput {...register('password')} />
            <Typography
              text={errors.username?.message || ''}
              className={`ml-10 text-red-500`}
            />
          </div>
          <button
            value="button"
            type="submit"
            className="my-4 w-full rounded bg-blue-400 px-4 py-2 text-white hover:bg-blue-700"
          >
            Signup
          </button>
        </div>
      </Form>
    </>
  )
}
export default AdminSignupForm
