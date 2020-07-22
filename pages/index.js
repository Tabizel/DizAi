import React from 'react'
import useSWR from 'swr'
import PageTitle from '../components/pagetitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)

  return (
    <div className='text-center lg:my-20 sm:my-10 px-4'>
      <PageTitle title='Home' />
      <div className='py-10 text-lg'>
        <h1>Na constante busca de melhor lhe atender, precisamos de sua opinião</h1>
      </div>
      <div className='lg:my-20 sm:my-10'>
        <a href='/pesquisa'><button className='p-4 border-solid border-4 rounded-lg shadow-lg border-blue-600 bg-blue-400 hover:bg-blue-600 font-bold'>
          Responder questionário
        </button></a>
      </div>
      <div className='py-10 text-lg'>
        {!data && <p>Carregando...</p>}
        {!error && data && data.showPromo &&
          <h1>
            {data.message}
          </h1>
        }
      </div>
    </div >
  )
}

export default Index