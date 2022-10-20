import { useState } from 'react'
import styled from '@emotion/styled'

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <Heading>Desde APP</Heading>
  )
}

export default App
