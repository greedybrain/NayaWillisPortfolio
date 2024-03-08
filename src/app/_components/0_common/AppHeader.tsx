import React, { type HTMLAttributes } from 'react'

interface AppHeaderProps extends HTMLAttributes<HTMLElement> {}

const AppHeader = ({children, ...rest}: AppHeaderProps) => {
  return (
    <header {...rest}>{children}</header>
  )
}

export default AppHeader