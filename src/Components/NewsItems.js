import React from 'react'
import BN from '../Images/breaking news.avif'

const NewsItems = (props) => {
  const { title, description, urlToImage, url, author, publishedAt, source } = props.article

  return (
    <div className='mx-auto my-4 lg:max-h-[520px]  border border-gray-200 w-72 lg:w-80 rounded-lg' >
      <div className="relative">
        <span className="mt-[-1rem] p-2 absolute rounded-full text-white bg-red-500 z-10 top-0 right-0">{source.name}</span>
        <img src={urlToImage ? urlToImage : BN} alt="img" className="min-w-full h-48 border-b rounded-t-lg" />
      </div>
      <div className='mx-4 my-4 flex flex-col '>
        <h1 className='text-lg my-3 h-16 font-bold'>{title? title.slice(0, 48): 'Not Given'}...</h1>
        <p className='text-md h-28 '>{description ? description.slice(0, 150) : "Details are not provided"}...</p>
        <p className='py-2 text-sm text-gray-600'>By {'writer' ? author : 'Unknown'} on {new Date(publishedAt).toGMTString()}</p>
        <button className=' mt-2 p-2 text-white bg-blue-500 rounded-lg w-28'>{<a href={url}>Read More</a>}</button>
      </div>

    </div>
  )
}

export default NewsItems
