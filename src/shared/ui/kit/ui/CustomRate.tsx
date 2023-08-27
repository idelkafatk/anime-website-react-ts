import React, { FC } from 'react'
import { Rate } from 'antd'

interface ICustomRateProps {
  rate: number
}

export const CustomRate: FC<ICustomRateProps> = ({ rate }) => {
  return <Rate value={rate} allowHalf disabled />
}
