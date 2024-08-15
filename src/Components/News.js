import React, { useState, useEffect, useContext } from 'react'
import NewsItems from './NewsItems'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner"
import {modeContext} from '../App'


const News = (props) => {
  const [articles, setArticles] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [page, setPage] = useState(1)

  const useMode = useContext(modeContext)

 const {mode} = useMode

  const themeStyles= {
    backgroundColor: mode? 'white': 'black',
    color: mode? 'black' : 'white'
  }


  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=62eef089f87647ec941c956854f9f907&page=${page}&pageSize=${props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
  }
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=62eef089f87647ec941c956854f9f907&page=${page}&pageSize=${props.pageSize}`
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

 // const handleClick =()=>{
 //   setPage(page + 1)
 //   updateNews();
 // }

  return (
    <>
      <div style={themeStyles}>
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className=' w-screen flex mt-16 flex-col lg:grid lg:grid-cols-3 lg:gap-4'>
            {articles.map((article) => {
              return (<NewsItems article={article} key={article.url} />)
            })}
          </div>
        </InfiniteScroll>
      
      </div>
     {/* <button onClick={handleClick} className='p-2 bg-blue-500 text-white text-lg rounded-lg w-20 '>Next</button> */}
    </>

  )
}

export default News
