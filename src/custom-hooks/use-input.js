import {useCallback, useState} from 'react'

export function useInput(initialState = '') {
  const [value, setValue] = useState(initialState)

  const onChangeHandler = useCallback(
    event => {
      setValue(event.target.value)
    },
    [setValue]
  )

  const clearInput = () => setValue('')

  return [value, onChangeHandler, clearInput]
}
