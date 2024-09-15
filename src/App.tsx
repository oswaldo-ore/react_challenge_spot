import { useEffect, useState } from 'react'
import './App.css'
import {type UrlShorteners} from './types'
import { UrlShortenersList } from './components/UrlShortenersList'

const baseUri = 'https://api-shorturl.tecnosoft.xyz/api/admin'

function App() {
  const [urlsShorts, setUrlShortenersState] = useState<UrlShorteners[]>([])
  useEffect(() => {
    fetch(`${baseUri}/url-shortener`)
      .then(response => response.json())
      .then(response => setUrlShortenersState(response.data))
      .catch(error => console.error(error))
  },[])

  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-4">
        <h1 className="text-start">Shortener URLs</h1>
        <button> <i className="bi bi-cloud-plus"></i>Create </button>
      </div>
      <UrlShortenersList urlShorteners={urlsShorts} />
    </div>
  )
}

export default App
