export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10 overscroll-none h-full md:px-10 lg:pb-14">
      <div className="h-full flex flex-col items-start justify-center gap-4 lg:pr-48">
        <h2 className='text-md font-bold text-gray-400'>Hi, my name is</h2>
        <h1 className='text-5xl font-bold'>Marlon Wißkirchen</h1>
        <h2 className='text-5xl text-gray-500 font-bold'>I'm a software engineer</h2>
        <p className='text-gray-500'>
          I am a software engineer from Rhineland Palatinate, DE. 
        </p>
      </div>
    </div>
  )
}
