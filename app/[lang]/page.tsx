import { getDictionary } from "@/getDictionary"

export default async function Home({ params }: { params: { lang: any } }) {
  const lang = await getDictionary(params.lang)
  return (
    <div className="flex flex-col items-center gap-10 overscroll-none h-full md:px-10 lg:pb-14">
      <div className="h-full flex flex-col items-start justify-center gap-4 lg:pr-48">
        <h2 className='text-md font-bold text-gray-400'>{lang.page.title1}</h2>
        <h1 className='text-5xl font-bold'>{lang.page.title2}</h1>
        <h2 className='text-5xl text-gray-500 font-bold'>{lang.page.title3}</h2>
        <p className='text-gray-500'>{lang.page.text}</p>
      </div>
    </div>
  )
}
