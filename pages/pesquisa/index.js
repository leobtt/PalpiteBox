import React, { useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { mask, unMask } from 'remask'
import * as yup from 'yup'
import Form from './Form'

const schema = yup.object().shape({
  Nome: yup.string().required('O campo nome é obrigatório'),
  Email: yup
    .string()
    .required('O campo e-mail é obrigatório')
    .email('O campo e-mail não é válido'),
  Whatsapp: yup
    .string()
    .required('O campo telefone é obrigatório')
    .min(16, 'Digite o telefone corretamente'),
  Sugestao: yup.string().required('O campo obrigatório'),
  Nota: yup.string(' ').required('Avalie de 0 a 5'),
})

const Pesquisa = () => {
  const [success, setSucess] = useState(false)
  const [returns, setReturn] = useState({})
  const [loading, setLoading] = useState(false)

  const onSubmit = async (values) => {
    setLoading(true)
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(values),
      })
      const data = await response.json()
      setSucess(true)
      setReturn(data)
      setLoadging(false)
    } catch (err) {}
  }

  const notaValue = [0, 1, 2, 3, 4, 5]
  return (
    <div>
      <PageTitle title="Pesquisa" />
      <h1 className=" text-center pb-6 font-bold text-2xl">
        Críticas e sugestões
      </h1>
      <p className=" text-center mb-8">
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      {!success && <Form onSubmit={onSubmit} loading={loading} />}

      {success && (
        <div className="mx-auto w-80  p-3">
          <p className="mb-4 text-center bg-green-100 border-t border-b border-green-500 text-black px-4 py-4">
            Obrigado por contribuir com sua sugestão/crítica.
          </p>

          {returns.showCoupon && (
            <div className="px-4 py-3 w-72 mx-auto text-center border">
              Seu cupom: <br />
              <span className="text-2xl font-bold">{returns.Cupom}</span>
            </div>
          )}

          {returns.showCoupon && (
            <div className=" px-4 py-3 w-72 mx-auto text-center border">
              <span className="font-bold">{returns.Promo}</span>
              <br />
              <p className="mt-3">Tire um print e apresente no local.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Pesquisa
