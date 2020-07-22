import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)
const genCupom = () => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
  return code.substring(0, 4) + '-' + code.substring(4, 8) + '-' + code.substring(8, 12)
}

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[2]
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[1]
    await sheetConfig.loadCells('A3:B3')

    const showCellPromo = sheetConfig.getCell(2, 0)
    const textCell = sheetConfig.getCell(2, 1)

    let Cupom = ''
    let Promo = ''
    if (showCellPromo.value === 'verdadeiro') {
      Cupom = genCupom()
      Promo = textCell.value
    }

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      WhatsApp: data.Whatsapp,
      Comentario: data.Comentario,
      Nota: parseInt(data.Nota),
      Indicacao: parseInt(data.Indicacao),
      Cupom,
      Promo,
      Preenchido: moment().format('DD/MM/YYYY HH:mm:ss SSS')
    })

    res.end(JSON.stringify({
      showCupom: Cupom !== '',
      Cupom,
      Promo
    }))

  } catch (err) {
    res.end(error)
    console.log(err)
  }
}

