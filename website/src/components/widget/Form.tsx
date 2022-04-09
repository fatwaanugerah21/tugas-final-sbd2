import React from 'react'

interface IFormProps extends React.HTMLAttributes<HTMLFormElement> {}

const Form: React.FC<IFormProps> = ({ onSubmit, children, ...props }) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (onSubmit) onSubmit(e)
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  )
}
export default Form
