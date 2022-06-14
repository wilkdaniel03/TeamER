import React from 'react'

const classes: string = 'flex flex-col justify-evenly h-full pt-2 px-6'

export const Container: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  return <div className={classes}>{children}</div>
}
