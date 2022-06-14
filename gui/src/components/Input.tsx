import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useField } from 'formik'

type InputType = 'text' | 'password'

interface InputProps {
  name: string
  type: InputType
  label: string
  icon: any
}

export const Input: React.FC<InputProps> = ({ name, type, label, icon }) => {
  const [field, meta, helpers] = useField({ name, type })

  return (
    <div className="w-full relative mt-3">
      <span className="h-full w-1/6 absolute top-0 left-0.5 text-2xl text-blue flex justify-center items-center">
        <FontAwesomeIcon icon={icon} />
      </span>
      <label
        className="block text-xs absolute left-14 top-2 opacity-70"
        htmlFor={field.name}
      >
        {label}
      </label>
      <input
        className="block bg-white border-blue border-2 rounded-lg w-full h-full py-3 pl-14 text-sm pt-5 font-semibold"
        id={field.name}
        name={field.name}
        type={type}
        value={field.value}
        onChange={field.onChange}
      />
    </div>
  )
}
