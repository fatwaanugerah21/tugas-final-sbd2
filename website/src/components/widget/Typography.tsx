import React from 'react'
import cn from 'classnames'
import { TSize } from '@utils/interfaces'

interface ITypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  element?: 'h6' | 'h4' | 'h3' | 'h2' | 'h1' | 'p'
  weight?: string
  size?: TSize
  text: string
  isHaveReadMore?: boolean
  color?: string
  align?: 'left' | 'center' | 'right'
  readMoreText?: string
  truncate?: boolean
  underline?: boolean
  onReadMore?: () => void
}

const classesNames = {
  question: 'text-gray-200',
  smallTitle: 'font-semibold text-dark-blue',
  title: 'font-semibold text-xl',
  date: 'font-semibold text-secondary-1',
  description: 'text-sm text-gray-400',
  homepageSectionTitle: 'text-[24pt] font-bold text-center text-dark-blue',
  BRTitle: 'text-lg font-semibold text-black',
  relatedCompanyName: 'font-semibold text-gray',
  bigTitle: 'text-xl font-semibold text-dark-blue',
  pageTitle: 'text-xl font-semibold',
  postedDate: 'text-sm text-gray font-light',
  ['special-heading']: 'font-semibold text-xl text-dark-blue',
}

const Typography: React.FC<ITypographyProps> = ({
  className: inputClassname,
  text,
  weight = '',
  color,
  size = 'sm',
  element: Element = 'p',
  readMoreText = 'View more',
  onReadMore,
  truncate,
  isHaveReadMore,
  underline,
  ...props
}) => {
  const classNames = cn(
    `text-${size}`,
    `text-${color}`,
    `font-${weight}`,
    !!underline && 'underline',
    !!truncate && 'truncate',
    inputClassname
  )

  return (
    <Element className={classNames} {...props}>
      {text}
      {!!isHaveReadMore && (
        <span
          className="text-secondary-1 ml-1 cursor-pointer font-semibold underline"
          onClick={onReadMore}
        >
          {readMoreText}
        </span>
      )}
    </Element>
  )
}
export default Typography
