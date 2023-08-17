import { FC, ReactNode } from 'react'

interface IPaginationElement {
  icon: ReactNode
  disabled: boolean
}

const PaginationElement: FC<IPaginationElement> = ({ icon, disabled }) => {
  return (
    <>
      <span
        style={{
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        {icon}
      </span>
    </>
  )
}

export default PaginationElement
