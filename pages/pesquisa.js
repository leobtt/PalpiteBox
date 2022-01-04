import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import PageTitle from './components/PageTitle'
import { mask, unMask } from 'remask'
import * as yup from 'yup'
import InputField from '../pages/components/form/InputField'
import Button from './components/form/Button'

const schema = yup.object().shape({
  Nome: yup.string().required('Campo nome é obrigatório'),
  Email: yup
    .string()
    .required('Campo e-mail é obrigatório')
    .email('Campo e-mail não é válido'),
  Whatsapp: yup
    .string()
    .required('O campo telefone é obrigatório')
    .min(16, 'Telefone inválido'),
  Sugestao: yup.string().required('Campo obrigatório'),
  Nota: yup.string(' ').required('Avalie de 0 a 5'),
})

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Sugestao: '',
    Nota: '',
  })

  const [sucess, setSucess] = useState(false)
  const [returns, setReturn] = useState({})
  const [error, setError] = useState({})
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const validation = async () => {
      const HasError = await schema.isValid(form)
      setHasError(HasError)
      try {
        await schema.validate(form, { abortEarly: false })
        setError({})
      } catch (err) {
        const errors = err.inner.reduce(
          (prev, curr) => ({ ...prev, [curr.path]: curr.message }),
          {}
        )
        setError(errors)
      }
    }
    validation()
  }, [form])

  const save = async (evt) => {
    console.log(unMask(form.Whatsapp))
    evt.preventDefault()
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form),
      })
      const data = await response.json()
      setSucess(true)
      setReturn(data)
    } catch (err) {}
  }

  const onChange = (evt) => {
    /* const { value } = evt.target */
    const key = evt.target.name
    const value =
      key === 'Whatsapp'
        ? mask(unMask(evt.target.value), ['(99) 9 9999-9999'])
        : evt.target.value

    setForm((old) => ({
      ...old,
      [key]: value,
    }))
  }

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
      {!sucess && (
        <div className="m-2 mx-auto w-80 md:w-96 flex flex-col px-5">
          <InputField
            name="Nome"
            value={form.Nome}
            onChange={onChange}
            error={error.Nome}
            type="text"
          />
          <InputField
            name="Email"
            value={form.Email}
            onChange={onChange}
            error={error.Email}
            type="text"
          />
          <InputField
            name="Whatsapp"
            value={form.Whatsapp}
            onChange={onChange}
            error={error.Whatsapp}
            type="text"
          />
          <InputField
            name="Sugestao"
            value={form.Sugestao}
            onChange={onChange}
            error={error.Sugestao}
            type="text"
          />
          <div className="flex mt-4 mb-4">
            <InputField
              name="Nota"
              value={form.Nota}
              onChange={onChange}
              error={error.Nota}
              type="radio"
            />
          </div>
          {hasError && <Button value="Salvar" onClick={save} />}
          {!hasError && <Button value="Salvar" />}
        </div>
      )}

      {sucess && (
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
