import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from './components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/getPromo', fetcher)
  return (
    <div className='text-center'>
      <PageTitle title='Bem-vindo'/>
      <p className='text-center my-8 font-bold'>
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className='mt-10 mb-10'>
        <Link href='/pesquisa'>
          <a className='bg-blue-400 py-4 px-6 rounded-md shadow-lg hover:shadow-xl mx-8 font-bold text-white hover:text-black'>
            Dar opinião ou sugestão
          </a>
        </Link>
      </div>
      {!data && <p>Carregando...</p>}
      {!error && data && data.showCoupon &&
        <p className='my-12'>
        {data.message}
      </p>
      }
      
    </div>
  )
}

export default Index