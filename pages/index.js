import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from './components/PageTitle'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/getPromo', fetcher)
  return (
    <div className="text-center">
      <PageTitle title="Bem-vindo" />
      <p className="text-center font-bold">
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className="mt-10 mb-10">
        <Link href="/pesquisa">
          <a className="bg-blue-400 py-4 px-6 rounded-md shadow-lg hover:shadow-xl mx-8 font-bold text-white hover:text-black">
            Dar opinião ou sugestão
          </a>
        </Link>
      </div>
      <div className="border border-blue-300 shadow rounded-md p-2 max-w-md w-full mx-auto">
        {!data && (
          <div className="animate-pulse flex flex-wrap ">
            <div className="rounded bg-blue-400 h-5 w-96 mx-auto"></div>
            <div className="rounded bg-blue-400 h-5 w-56 mx-auto mt-2"></div>
          </div>
        )}

        {!error && data && data.showCoupon && (
          <p className="">{data.message}</p>
        )}
      </div>
    </div>
  )
}

export default Index
