import React, { useState } from 'react'
import Link from 'next/link'
import PageTitle from './components/PageTitle'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Sugestao: '',
    Nota: 0,
  })

  const [sucess, setSucess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form),
      })
      const data = await response.json()
      setSucess(true)
      setRetorno(data)
    } catch (err) {}
  }

  const onChange = (evt) => {
    const { value } = evt.target
    const key = evt.target.name

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
        <div className="m-2 mx-auto w-80">
          <label htmlFor="Nome" className="pl-1 font-bold">
            Seu Nome:
          </label>
          <input
            type="text"
            placeholder="Nome"
            onChange={onChange}
            name="Nome"
            value={form.Nome}
            className="mb-4 bg-blue-100 border-green-500 focus:shadow-lg w-80 shadow-md rounded-lg py-4 px-5"
          />
          <label htmlFor="Email" className="pl-1 font-bold">
            E-mail:
          </label>
          <input
            type="text"
            placeholder="E-mail"
            onChange={onChange}
            name="Email"
            value={form.Email}
            className="mb-4 bg-blue-100 border-green-500 focus:shadow-lg w-80 shadow-md rounded-lg py-4 px-5"
          />
          <label htmlFor="Whatsapp" className="pl-1 font-bold">
            Whatsapp:
          </label>
          <input
            type="text"
            placeholder="Whatsapp"
            onChange={onChange}
            id="Whatsapp"
            name="Whatsapp"
            value={form.Whatsapp}
            className="mb-4 bg-blue-100 border-green-500 focus:shadow-lg w-80 shadow-md rounded-lg py-4 px-5"
          />
          <label htmlFor="Sugestao" className="pl-1 font-bold">
            Sua crítica ou sugestão:
          </label>
          <input
            type="text"
            placeholder=""
            onChange={onChange}
            name="Sugestao"
            value={form.Sugestao}
            className="mb-4 bg-blue-100 border-green-500 focus:shadow-lg w-80 shadow-md rounded-lg py-4 px-5"
          />
          <label htmlFor="Nota" className="pl-1 font-bold">
            Nota:
          </label>
          <div className="flex mt-4 mb-4">
            {notaValue.map((nota) => {
              return (
                <label className="text-center mx-auto grid grid-rows-2 grid-flow-col gap-1">
                  {nota}
                  <input
                    className="w-5 "
                    type="radio"
                    name="Nota"
                    onChange={onChange}
                    value={nota}
                  />
                </label>
              )
            })}
          </div>
          <button
            onClick={save}
            className="bg-blue-400 mx-auto py-4 px-6 rounded-md shadow-lg hover:shadow-xl mx-8 font-bold text-white hover:text-green-400"
          >
            Salvar
          </button>
        </div>
      )}

      {sucess && (
        <div className="mx-auto w-80  p-3">
          <p className="mb-4 text-center bg-green-100 border-t border-b border-green-500 text-black px-4 py-4">
            Obrigado por contribuir com sua sugestão/crítica.
          </p>

          {retorno.showCoupon && (
            <div className="px-4 py-3 w-72 mx-auto text-center border">
              Seu cupom: <br />
              <span className="text-2xl font-bold">{retorno.Cupom}</span>
            </div>
          )}

          {retorno.showCoupon && (
            <div className=" px-4 py-3 w-72 mx-auto text-center border">
              <span className="font-bold">{retorno.Promo}</span>
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
