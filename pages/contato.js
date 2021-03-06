import React, { useState } from 'react'
import PageTitle from '../components/pagetitle'

const Contato = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Mensagem: '',
  })

  const [success, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const enviar = async () => {
    try {
      const response = await fetch('/api/msg-contato', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)

    } catch (err) {
    }
  }

  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  return (
    <div className='my-10 mx-4'>
      <PageTitle title='Pesquisa' />
      {!success && <div>
        <div className='mx-auto'>
          <h1 className='my-2 text-center text-lg font-bold'>Favor preencher todos os campos abaixo</h1>
        </div >
        <div className='w-full my-10'>
          <form className='w-full flex flex-col items-center text-center font-bold'>
            <label for='Nome'>Nome*</label>
            <input value={form.nome} className='text-center px-2 py-1 lg:w-2/5 md:w-3/5 sm:w-full border-solid border-2 border-blue-600 leading-8 rounded-lg shadow-md mb-3' type='text' name='Nome' required onChange={onChange} />
            <label for='Email'>E-mail*</label>
            <input value={form.email} className='text-center px-2 py-1 lg:w-2/5 md:w-3/5 sm:w-full border-solid border-2 border-blue-600 leading-8 rounded-lg shadow-md mb-3' type='text' name='Email' required onChange={onChange} />
            <label for='Whatsapp'>WhatsApp*</label>
            <input value={form.whatsapp} className='text-center px-2 py-1 lg:w-2/5 md:w-3/5 sm:w-full border-solid border-2 border-blue-600 leading-8 rounded-lg shadow-md mb-3' type='text' name='Whatsapp' required onChange={onChange} />
            <label for='textarea'>Mensagem*</label >
            <textarea className='px-2 py-1 resize-none h-32 lg:w-2/5 md:w-3/5 sm:w-full border-solid border-2 border-blue-600 leading-8 rounded-lg shadow-md mb-3' name='Mensagem' required onChange={onChange} ></textarea>
          </form>
          <p className='text-center pb-3 text-xs'>*Todos os campos são obrigatórios</p>
          <div className='text-center my-8'>
            <button onClick={enviar} className='py-2 px-8 border-solid border-4 rounded-lg shadow-lg border-blue-600 bg-blue-400 hover:bg-blue-600 font-bold'>
              Enviar
          </button>
          </div>
        </div>
      </div>}
      {
        success && <div className='my-24 text-center'>
          <p className='bg-blue-100 border-t border-b border-blue-500 text-blue-700 py-4'>Obrigado por sua mensagem, em breve entraremos em contato.</p>
          {
            retorno.showProtocolo && <div className=' my-16'>
              <span className=''>Anote seu Protocolo:</span>
              <p className='py-2 text-lg font-bold'>{retorno.Protocolo}</p>
              <a href='/'><button className='my-16 border-2 border-blue-700 bg-blue-400 hover:bg-blue-600 font-bold py-2 px-4 rounded-lg'>
                Voltar
              </button></a>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Contato