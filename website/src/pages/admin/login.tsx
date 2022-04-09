import AdminLoginForm from '@components/pages/admin-login/form'
import { NextPage } from 'next'
import React from 'react'

interface IAdminLoginProps {}

const AdminLogin: NextPage<IAdminLoginProps> = ({ ...props }) => {
  return (
    <div className={`bg-red`}>
      <AdminLoginForm />
    </div>
  )
}
export default AdminLogin
