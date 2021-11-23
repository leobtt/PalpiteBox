import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'
import moment from 'moment'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const genCupom = () =>{
  const generate = parseInt(moment().format('DMMYYYYHHmmSSSs')).toString(16).toUpperCase()
  return generate.substring(0,4) + '-' + generate.substring(4,8) + '-' + generate.substring(9, 13)
}

export default async(req, res) => {
  try{
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()
    
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A3:B3')
    
    const booleanPromo = sheetConfig.getCell(2,0)
    const textPromo = sheetConfig.getCell(2,1)

    let Cupom =''
    let Promo = ''
    if(booleanPromo.value === 'VERDADEIRO'){
      Cupom = genCupom(),
      Promo = textPromo.value
    }

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email.toLowerCase(),
      Whatsapp: data.Whatsapp,
      Data: moment().format('DD/MM/YYYY HH:mm'),
      Nota: parseInt(data.Nota),
      Cupom,
      Promo,
      Sugestao: data.Sugestao
    }).then(
      res.end(JSON.stringify({
        showCoupon: Cupom !== '',
        Cupom,
        Promo,
      }))
    )
  } catch(err){
    console.log(err)
    res.end('error')
  }
}