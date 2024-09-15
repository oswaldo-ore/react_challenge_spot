import { useEffect, useState } from "react";

import { Button } from "react-bootstrap";
import { UrlShorteners } from "../../../types";
import { DeleteUrlShortenerModal } from "./views/DeleteUrlShortenerModal";
import { CreateUrlShortenerModal } from "./views/CreateUrlShortenerModal";
import { UrlShortenersList } from "./views/UrlShortenersList";

const baseUri = "https://api-shorturl.tecnosoft.xyz/api/admin";
export default function UrlShortenerPage() {
    const [urlsShorts, setUrlShortenersState] = useState<UrlShorteners[]>([]);
    const [showCreate, setShowCreate] = useState<boolean>(false);
    const [showDelete, setShowDelete] = useState<boolean>(false);
    const [selectedUrlShortener, setSelectedUrlShortener] = useState<UrlShorteners | null>(null);
  
  
    const handleCreateClose = () => setShowCreate(false);
    const handleCreateShow = () => setShowCreate(true);
  
    const handleDeleteClose = () => setShowDelete(false);
  
    const addUrlShortener = (urlShortener: UrlShorteners) => {
      setUrlShortenersState([...urlsShorts, urlShortener]);
    }
    useEffect(() => {
      fetch(`${baseUri}/url-shortener`)
        .then((response) => response.json())
        .then((response) => setUrlShortenersState(response.data))
        .catch((error) => console.error(error));
    }, []);
  
    const deleteUrlShortener = (id: number) => {
      setUrlShortenersState([...urlsShorts.filter(urlShortener => urlShortener.id !== id)]);
    }
  
    const selectedUrlShortenerForDelete = (urlShortener: UrlShorteners) => {
      console.log(urlShortener);
      setSelectedUrlShortener(urlShortener);
      setShowDelete(true);
    }

    return (
        <div className="">
          <div className="d-flex justify-content-between mb-4">
            <h1 className="text-start">Shortener URLs</h1>
            <Button variant="primary" size="sm" onClick={handleCreateShow}>
              Create
            </Button>
          </div>
          <UrlShortenersList
            urlShorteners={urlsShorts}
            deleteUrlShortener={selectedUrlShortenerForDelete}
            openUrlShortener={(code) => { console.log(code) }}
          />
          <CreateUrlShortenerModal isOpen={showCreate} onClose={handleCreateClose} onAddUrlShortener={addUrlShortener} />
          <DeleteUrlShortenerModal 
            isOpen={showDelete}
            onClose={handleDeleteClose}
            urlShortener={selectedUrlShortener}
            urlShortenerDeleted={deleteUrlShortener}
          />
        </div>
      );
}