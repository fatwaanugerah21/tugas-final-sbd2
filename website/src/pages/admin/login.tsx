import AdminLoginForm from '@components/pages/admin-login/admin-login-form'
import Typography from '@components/widget/Typography'
import { ROUTES } from '@utils/routes'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

interface IAdminLoginProps {}

const AdminLogin: NextPage<IAdminLoginProps> = ({ ...props }) => {
  return (
    <div
      className={`flex h-screen flex-col items-center justify-center space-y-5 bg-gray-300`}
    >
      <AdminLoginForm />

      <div className="flex space-x-1">
        <Typography text="Tidak punya akun?" />
        <Link href={ROUTES.admin_signup}>
          <Typography
            text="Signup"
            className={`cursor-pointer text-blue-500 hover:text-blue-700`}
          />
        </Link>
      </div>
    </div>
  )
}
export default AdminLogin
