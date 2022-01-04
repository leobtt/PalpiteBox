import React from 'react'

const Footer = () => {
  return (
    <div className="h-full flex flex-col-reverse">
      <div className=" bg-gray-700 text-center text-white font-bold p-4 mt-8">
        Projeto desenvolvido por:{' '}
        <a href="" className="hover:underline hover:text-green-500">
          Leonardo Batista
        </a>{' '}
        /{' '}
        <a
          href="https://github.com/leobtt"
          className="hover:underline hover:text-green-500"
        >
          Github
        </a>{' '}
        /{' '}
        <a
          href="https://www.linkedin.com/in/leobtt"
          className="hover:underline hover:text-green-500"
        >
          LinkedIn
        </a>
        <div className="">
          <img
            className="inline w-52 m-8"
            src="/logo_devpleno.png"
            alt="DevPleno"
          />
          <img
            className="inline w-52 m-8"
            src="/logo_semana_fsm.png"
            alt="DevPleno"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
