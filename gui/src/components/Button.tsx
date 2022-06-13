import React from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  value: string
  link: string
}

const classes: string =
  'bg-blue text-white py-3 px-6 font-medium text-xl rounded-lg w-full'

export const Button: React.FC<ButtonProps> = ({ value, link }) => {
  return (
    <Link className="w-full" to={link}>
      <button className={classes}>{value}</button>
    </Link>
  )
}
