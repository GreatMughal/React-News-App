import React, { useState, useEffect } from 'react'
import Card from './Card'

const NewsContainer = ({category}) => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => {
        console.error('Error fetching data: ', error)

      })
  }, [category])


  return (
    <>
      <div className='bg-primary'>
        <h1 className='text-center fs-2 bg-primary text-light'>Latest <span className='badge text-bg-danger'>News</span></h1>
        <div className='px-4 bg-primary'>
        {articles.map((news, index) => (
          <Card key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))}
        </div>
      </div>
    </>
  )
}

export default NewsContainer