import React from 'react'
import useSWR from 'swr'
import PageTitle from '../components/pagetitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Sobre = () => {
  const { data, error } = useSWR('/api/get-sobre', fetcher)
  return (
    <div className='text-center container'>
      <PageTitle title='Sobre Nós' />
      <div className='py-10 font-bold mx-auto text-xl'>
        <h1>Uma breve descrição sobre quem somos</h1>
      </div>
      <div className='py-10 text-justify mb-20 px-8 text-lg'>
        {!data && <p className='text-center'>Carregando...</p>}
        {!error && data &&
          <p className='leading-loose'>
            {data.sobre}
          </p>
        }
      </div>
    </div>
  )
}

export default Sobre