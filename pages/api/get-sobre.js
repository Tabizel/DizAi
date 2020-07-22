import { GoogleSpreadsheet } from 'google-spreadsheet'
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY
    })
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[3]
    await sheet.loadCells('A2')

    const textSobre = sheet.getCell(1, 0)

    res.end(JSON.stringify({
      sobre: textSobre.value
    }))

  } catch (err) {
    res.end(JSON.stringify({
      sobre: ''
    }))
  }
}
