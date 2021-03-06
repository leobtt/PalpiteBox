import { useForm, Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from '../../utils/schema'

//const form = ['Nome', 'Email', 'Whatsapp', 'Sugestao', 'Nota']
const { span, input, label } = {
  span: 'w-auto rounded text-red-300 px-3 font-normal',
  input: 'mb-4 bg-blue-100 border-green-500 focus:shadow-lg w-100 shadow-md rounded-lg py-4 px-5',
  label: 'pl-1 mb-1 flex justify-between font-bold',
}

const satisfactionValue = [1, 2, 3, 4, 5]
const Form = ({ onSubmit, loading }) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-2 mx-auto w-80 md:w-96 flex flex-col px-5">
      <label htmlFor="Nome" className={label}>
        Nome
        {errors.Nome?.message && <span className={span}>{errors.Nome.message}</span>}
      </label>
      <input
        type="text"
        placeholder="Nome"
        className={input}
        {...register('Nome')}
        autoComplete="nope"
      />

      <label htmlFor="Email" className={label}>
        Email
        {errors.Email?.message && <span className={span}>{errors.Email.message}</span>}
      </label>
      <input
        type="text"
        placeholder="E-mail"
        className={input}
        {...register('Email')}
        autoComplete="nope"
      />

      <label htmlFor="Whatsapp" className={label}>
        Whatsapp
        {errors.Whatsapp?.message && <span className={span}>{errors.Whatsapp.message}</span>}
      </label>

      <Controller
        render={({ field }) => (
          <InputMask
            {...field}
            className={input}
            mask="(99) 9 9999-9999"
            maskChar=""
            placeholder="(DD) 9 9999-9999"
            autoComplete="nope"
          />
        )}
        name="Whatsapp"
        control={control}
        defaultValue=""
      />

      <label htmlFor="Sugestao" className={label}>
        Sugestao
        {errors.Sugestao?.message && <span className={span}>{errors.Sugestao.message}</span>}
      </label>
      <input
        type="text"
        placeholder="Sugest??o"
        className={input}
        {...register('Sugestao')}
        autoComplete="nope"
      />

      <label htmlFor="Nota" className={label}>
        Nota
        {errors.Nota?.message && <span className={span}>{errors.Nota.message}</span>}
      </label>
      <img
        className="inline w-full px-0.5 mx-auto"
        src="/satisfaction.png"
        alt="Satisfa????o do cliente"
      />
      <div className="flex justify-around mb-8">
        {satisfactionValue.map((item) => (
          <label key={item} className="ml-1 mt-2">
            <input type="radio" value={item} {...register('Nota')} />
          </label>
        ))}
      </div>

      <button
        type="submit"
        className=" bg-blue-400 mx-auto w-40 py-4 flex items-center justify-center rounded-md shadow-lg hover:shadow-2xl mx-8 font-bold text-white  disabled:bg-indigo-300"
        disabled={loading}
      >
        {loading && (
          <>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Enviando
          </>
        )}
        {!loading && <>Enviar</>}
      </button>
    </form>
  )
}

export default Form
