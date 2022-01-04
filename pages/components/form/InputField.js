import React, { useState } from 'react'

const notaValue = [0, 1, 2, 3, 4, 5]

const InputField = ({ name, value, onChange, error, type, nota }) => {
  const [focused, setFocused] = useState(false)
  const handleFocus = (evt) => {
    setFocused(true)
  }
  return (
    <>
      {type === 'text' && (
        <>
          <div className="flex justify-between items-center mb-1 mt-3 px-1">
            <label htmlFor={name} className="pl-1 py-2 font-bold">
              {name}
            </label>{' '}
            {error && focused === true && (
              <span className="w-8/12 text-center rounded bg-red-200 px-3 py-1 font-normal mr-2">
                {error}
              </span>
            )}
          </div>
          <input
            type="text"
            placeholder={name}
            onChange={onChange}
            onFocus={handleFocus}
            focused={focused.toString()}
            name={name}
            value={value}
            className="mb-4 bg-blue-100 border-green-500 focus:shadow-lg w-100 shadow-md rounded-lg py-4 px-5"
          />
        </>
      )}
      {type === 'radio' && (
        <>
          {notaValue.map((nota) => {
            return (
              <label
                key={nota}
                className="text-center mx-auto grid grid-rows-2 grid-flow-col gap-1"
              >
                {nota}
                <input
                  className="w-5"
                  type={type}
                  name={name}
                  onChange={onChange}
                  onFocus={handleFocus}
                  focused={focused.toString()}
                  value={nota}
                />
              </label>
            )
          })}
        </>
      )}
    </>
  )
}

export default InputField
