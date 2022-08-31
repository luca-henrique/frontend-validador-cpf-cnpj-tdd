import { useState } from 'react'
import Input from 'src/components/Input/Input'

export const Home = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <Input setValueMask={setValue} value={value} />
    </>
  )
}
