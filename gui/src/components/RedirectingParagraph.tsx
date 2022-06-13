import React from 'react'
import { Link } from 'react-router-dom'

interface RedirectingParagraphProps {
  value: string
  linkValue: string
  link: string
}

export const RedirectingParagraph: React.FC<RedirectingParagraphProps> = ({
  value,
  linkValue,
  link,
}) => {
  return (
    <h2 className="block mt-8">
      {value}
      <Link to={link}>
        <span className="text-blue font-medium"> {linkValue}</span>
      </Link>
    </h2>
  )
}
