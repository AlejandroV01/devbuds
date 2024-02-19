function App() {
  return (
    <div className='flex items-center justify-center mt-20'>
      <div className='relative p-[2px] bg-white -z-1 rounded-[4px]'>
        <div className=' bg-blue-500  w-100 p-2 relative  rounded-[4px]'>
          <div className='w-1/2 flex flex-col gap-2'>
            <h1 className='text-white font-bold'>My React and TypeScript App</h1>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quam?</p>
          </div>
        </div>
        <div className='absolute bg-gradient-to-r from-transparent to-blue-950 w-1/2 h-full top-0 right-0'></div>
      </div>
    </div>
  )
}

export default App

const FadedBox = () => {
  return (
    <div className='flex items-center justify-center mt-20'>
      <div className='relative p-[2px] bg-white -z-1 rounded-[4px]'>
        <div className=' bg-blue-500  w-100 p-2 relative  rounded-[4px]'>
          <div className='w-1/2 flex flex-col gap-2'>
            <h1 className='text-white font-bold'>My React and TypeScript App</h1>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quam?</p>
          </div>
        </div>
        <div className='absolute bg-gradient-to-r from-transparent to-blue-950 w-1/2 h-full top-0 right-0'></div>
      </div>
    </div>
  )
}
