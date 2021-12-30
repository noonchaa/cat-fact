import {useEffect, useState} from 'react'
import cat from './cat2.svg'

function App() {
  const [fact, setFact] = useState(null)

  const getData = async () => {
    const data = await fetch('https://catfact.ninja/fact')
    const isi = await data.json()
    setFact(isi)
  }
  
  useEffect(()=>{
    getData()
    return () => {
      setFact(null)
    }
  },[])

  return (
    <div className='flex justify-center items-center min-h-screen px-4'>
      <div className='w-full md:w-10/12 lg:w-8/12'>
        <div className='border-2 border-gray-900 pb-6 pt-4 px-4 rounded-xl text-center text-black bg-gray-100 hover:text-white hover:bg-gray-900'>
          <h1 className='font-semibold text-2xl mb-6'>~ Cat Fact ~</h1>
          <p className='italic font-semibold'>{fact===null?'.......':'"'+fact.fact+'"'}</p>
        </div>
        <div className='text-right mt-4'>
          <button className='px-4 py-2 border-2 border-gray-900 rounded-xl bg-white text-black hover:text-white hover:bg-gray-900' onClick={()=>getData()}>
            Refresh
          </button>
        </div>
      </div>
      <img src={cat} alt='cat' className='w-20 absolute bottom-4 left-4 md:left-16 lg:left-24' />
    </div>
  );
}

export default App;
