import { useRef, useEffect } from 'react'

const refDom = () => {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <>
      <input ref={inputRef} type='text' />
    </>
  )
}

export default refDom
