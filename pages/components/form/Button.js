import React from 'react'

const Button = ({ value, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-blue-400 mx-auto py-4 px-6 rounded-md shadow-lg  mx-8 font-bold text-white hover:shadow-xl hover:bg-blue-500"
    >
      {value}
    </button>
  )
}

export default Button
