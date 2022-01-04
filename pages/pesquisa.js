import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import PageTitle from './components/PageTitle'
import { mask, unMask } from 'remask'
import * as yup from 'yup'

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
  const [focused, setFocused] = useState(false)

  const handleBlur = (evt) => {
    setFocused(true)
  }

  useEffect(() => {
    const validation = async () => {
      const hasError = await schema.isValid(form)
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
      {!sucess && (
        <form
          onSubmit={save}
          className="m-2 mx-auto w-80 md:w-96 flex flex-col px-5"
        >
          <label
            htmlFor="Nome"
            className="pl-1 mb-1 flex justify-between font-bold"
          >
            Seu Nome:
            {error.Nome && focused === true && (
              <span className="w-auto rounded bg-red-400 mr-1 px-3">
                {error.Nome}
              </span>
            )}
          </label>{' '}
          <input
            type="text"
            placeholder="Nome"
            onChange={onChange}
            onBlur={handleBlur}
            focused={focused.toString()}
            name="Nome"
            value={form.Nome}
            className="mb-4 bg-blue-100 border-green-500 focus:shadow-lg w-100 shadow-md rounded-lg py-4 px-5"
          />
          <label
            htmlFor="Email"
            className="pl-1 mb-1 flex justify-between font-bold"
          >
            E-mail:
            <span className="w-auto rounded bg-red-400 mr-1 px-3">
              {error.Email}
            </span>
          </label>
          <input
            type="text"
            placeholder="E-mail"
            onChange={onChange}
            onBlur={handleBlur}
            focused={focused.toString()}
            name="Email"
            value={form.Email}
            className="mb-4 bg-blue-100 border-green-500 focus:shadow-lg w-100 shadow-md rounded-lg py-4 px-5"
          />
          <label htmlFor="Whatsapp" className="pl-1 font-bold">
            Whatsapp:
          </label>
          <input
            type="text"
            placeholder="Whatsapp"
            onChange={onChange}
            onBlur={handleBlur}
            focused={focused.toString()}
            id="Whatsapp"
            name="Whatsapp"
            value={form.Whatsapp}
            className="mb-4 bg-blue-100 border-green-500 focus:shadow-lg w-100 shadow-md rounded-lg py-4 px-5"
          />
          <label htmlFor="Sugestao" className="pl-1 font-bold">
            Sua crítica ou sugestão:
          </label>
          <input
            type="text"
            placeholder=""
            onChange={onChange}
            onBlur={handleBlur}
            focused={focused.toString()}
            name="Sugestao"
            value={form.Sugestao}
            className="mb-4 bg-blue-100 border-green-500 focus:shadow-lg w-100 shadow-md rounded-lg py-4 px-5"
          />
          <label htmlFor="Nota" className="pl-1 font-bold">
            Nota:
          </label>
          <div className="flex mt-4 mb-4">
            {notaValue.map((nota) => {
              return (
                <label
                  key={nota}
                  className="text-center mx-auto grid grid-rows-2 grid-flow-col gap-1"
                >
                  {nota}
                  <input
                    className="w-5 "
                    type="radio"
                    name="Nota"
                    onChange={onChange}
                    onBlur={handleBlur}
                    focused={focused.toString()}
                    value={nota}
                  />
                </label>
              )
            })}
          </div>
          <button
            type="submit"
            className="bg-blue-400 mx-auto py-4 px-6 rounded-md shadow-lg hover:shadow-xl mx-8 font-bold text-white hover:text-green-400"
          >
            Salvar
          </button>
          <pre>{JSON.stringify(form, null, 2)}</pre>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </form>
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
