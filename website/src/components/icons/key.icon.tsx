import React from 'react'
const KeyIcon: React.FC<React.SVGAttributes<{}>> = ({ fill, ...props }) => {
  return (
    <svg
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="M21 2a8.998 8.998 0 0 0-8.612 11.612L2 24v6h6l10.388-10.388A9 9 0 1 0 21 2zm0 16a7.013 7.013 0 0 1-2.032-.302l-1.147-.348l-.847.847l-3.181 3.181L12.414 20L11 21.414l1.379 1.379l-1.586 1.586L9.414 23L8 24.414l1.379 1.379L7.172 28H4v-3.172l9.802-9.802l.848-.847l-.348-1.147A7 7 0 1 1 21 18z"
        fill={fill || 'currentColor'}
      ></path>
      <circle cx="22" cy="10" r="2" fill={fill || 'currentColor'}></circle>
    </svg>
  )
}
export default KeyIcon
