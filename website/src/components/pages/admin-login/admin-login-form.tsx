import React, { ChangeEvent, useState } from 'react'
import KeyIcon from '@components/icons/key.icon'
import PersonIcon from '@components/icons/person.icon'
import Form from '@components/widget/Form'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Typography from '@components/widget/Typography'
import { sendLogin as sendAdminLogin } from '@utils/axios-handler'

type TFormValues = {
  username: string
  password: string
}

const schema = yup.object({
  username: yup.string().required('Please input username'),
  password: yup.string().required('Please input password'),
})

interface IAdminLoginFormProps {}

const AdminLoginForm: React.FC<IAdminLoginFormProps> = ({ ...props }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TFormValues>({
    resolver: yupResolver(schema),
  })

  async function onSubmit(e: TFormValues) {
    const data = sendAdminLogin(e.username, e.password)
    console.log(data)
  }

  return (
    <div className={`flex h-screen items-center justify-center bg-gray-200`}>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto flex w-full flex-col items-center justify-center rounded-lg bg-white px-6 py-4 shadow md:w-1/2 lg:w-1/3"
      >
        <h2 className="my-4 text-2xl">Login</h2>
        <div className="flex w-full flex-col justify-start space-y-5 p-2">
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
            <div className="flex flex-row">
              <span className="z-highest flex h-10 w-10 items-center justify-center rounded-l-lg border border-r-0 text-2xl text-gray-400">
                <KeyIcon />
              </span>
              <input
                {...register('password')}
                type="password"
                className="w-full rounded-r-lg border border-gray-200 pl-1 outline-none ring-blue-300 focus:ring-1"
                placeholder="password"
              />
            </div>
            <Typography
              text={errors.username?.message || ''}
              className={`ml-10 text-red-500`}
            />
          </div>
          <button
            value="button"
            className="my-4 w-full rounded bg-blue-400 px-4 py-2 text-white hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </Form>
    </div>
  )
}
export default AdminLoginForm
