import * as yup from 'yup'

const schema = yup.object().shape({
  Nome: yup.string().required('campo obrigatório'),
  Email: yup
    .string()
    .required(' campo obrigatório')
    .email('O campo e-mail não é válido'),
  Whatsapp: yup
    .string()
    .required('campo obrigatório')
    .min(16, 'Telefone inválido'),
  Sugestao: yup.string().required('campo obrigatório'),
  Nota: yup.string(' ').required('Por favor, avalie').nullable(),
})

export default schema
