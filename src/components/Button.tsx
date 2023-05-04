import { ReactNode } from 'react'

interface ButtonProps {
  id?: number
  text: string
  disabled?: boolean
  onClick?: any
  className?: string
  children?: ReactNode
}
export function Button(props: ButtonProps) {
  const buttonClass = props.className
  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
    >
      {props.children}
      {props.text}
    </button>
  )
}
