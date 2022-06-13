import React from 'react'

const classes: string = 'flex flex-col justify-between h-5/6 pt-6 px-6'

export const Container: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  return <div className={classes}>{children}</div>
}
