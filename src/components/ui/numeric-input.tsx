import React, { useEffect } from 'react'
import { Input } from './input'

export function NumericInput({
  value,
  onChange,
  min,
  max,
  precision = 2,
  isInteger = false,
  className,
}: {
  value?: number
  onChange: (value: number | undefined) => void
  min?: number
  max?: number
  precision?: number
  isInteger?: boolean
  className?: string
}) {
  const [valueString, setValueString] = React.useState(value?.toString() || '')

  useEffect(() => {
    if (value !== undefined) {
      setValueString(value.toString())
    }
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value

    if (precision !== undefined) {
      const decimalIndex =
        newValue.indexOf('.') !== -1
          ? newValue.indexOf('.')
          : newValue.indexOf(',')
      if (decimalIndex !== -1) {
        const decimalPart = newValue.slice(decimalIndex + 1)
        if (decimalPart.length > precision) {
          const trimmedValue = newValue.slice(0, decimalIndex + precision + 1)
          newValue = trimmedValue
          return
        }
      }
    }

    const regex = isInteger ? /^\d*$/ : /^-?(?:\d+[.,]?\d*|[.,]\d*)?$/
    if (regex.test(newValue)) {
      setValueString(newValue)

      const parsedValue = isInteger
        ? newValue
          ? parseInt(newValue)
          : NaN
        : parseFloat(newValue.replace(',', '.'))
      if (!isNaN(parsedValue)) {
        if (min !== undefined && parsedValue < min) {
          onChange(min)
          setValueString(min.toString())
        } else if (max !== undefined && parsedValue > max) {
          onChange(max)
          setValueString(max.toString())
        } else {
          onChange(parsedValue)
          setValueString(parsedValue.toString())
        }
      }
    }

    if (newValue === '') {
      onChange(undefined)
      setValueString('')
    }
  }

  return (
    <Input
      value={valueString}
      onChange={handleChange}
      className={className}
    />
  )
}
