import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <div>
        <div className={styles.wrapper}>
          <div className="mx-auto container">
            <Link href="/">
              <img
                className="mx-auto w-44 cursor-pointer"
                src="/logo_palpitebox.png"
                alt="PalpiteBox"
              />
            </Link>
          </div>
        </div>
        <div className="bg-gray-300 p-3 shadow-lg text-center mb-8">
          <Link href="/sobre">
            <a className="px-2 hover:underline font-bold">Sobre</a>
          </Link>
          <Link href="/contato">
            <a className="px-2 hover:underline font-bold">Contato</a>
          </Link>
          <Link href="/pesquisa">
            <a className="px-2 hover:underline font-bold">Pesquisa</a>
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
