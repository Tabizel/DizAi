import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)
const genProtocolo = () => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
  return code.substring(1, 5) + '-' + code.substring(6, 10) + '-' + code.substring(8, 12)
}

const fromBase64 = value => {
  const buff = Buffer.from(value, 'base64')
  return buff.toString('ascii')
}

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[4]
    const data = JSON.parse(req.body)

    let Protocolo = ''
    Protocolo = genProtocolo()

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      WhatsApp: data.Whatsapp,
      Mensagem: data.Mensagem,
      Protocolo,
      Preenchido: moment().format('DD/MM/YYYY HH:mm:ss SSS')
    })

    res.end(JSON.stringify({
      showProtocolo: Protocolo !== '',
      Protocolo,
    }))

  } catch (err) {
    res.end(error)
    console.log(err)
  }
}