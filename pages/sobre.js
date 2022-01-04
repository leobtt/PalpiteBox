import React from 'react'
import Link from 'next/link'
import PageTitle from './components/PageTitle'

const Sobre = () => {
  return (
    <div>
      <PageTitle title="Sobre" />
      <h1 className="text-center text-2xl font-bold">Sobre</h1>
      <h2>
        Inserir aqui as informações contendo a história do estabelecimento!
      </h2>
    </div>
  )
}

export default Sobre
