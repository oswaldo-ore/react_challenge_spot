import { useEffect, useMemo, useState } from "react";

import { Button } from "react-bootstrap";
import { UrlShorteners } from "../../../types";
import { DeleteUrlShortenerModal } from "./views/DeleteUrlShortenerModal";
import { CreateUrlShortenerModal } from "./views/CreateUrlShortenerModal";
import { UrlShortenersList } from "./views/UrlShortenersList";
import { useNavigate } from 'react-router-dom';
import { UrlService } from "../../../services/UrlShortenerService";

export default function UrlShortenerPage() {
    const urlService = useMemo(() => new UrlService(), []);
    const [urlsShorts, setUrlShortenersState] = useState<UrlShorteners[]>([]);
    const [showCreate, setShowCreate] = useState<boolean>(false);
    const [showDelete, setShowDelete] = useState<boolean>(false);
    const [selectedUrlShortener, setSelectedUrlShortener] = useState<UrlShorteners | null>(null);
    const navigate = useNavigate();
  
    const handleCreateClose = () => setShowCreate(false);
    const handleCreateShow = () => setShowCreate(true);
  
    const handleDeleteClose = () => setShowDelete(false);
  
    const addUrlShortener = (urlShortener: UrlShorteners) => {
      setUrlShortenersState([...urlsShorts, urlShortener]);
    }
    useEffect(() => {
      urlService.getUrlShorteners()
        .then((response) => {
          setUrlShortenersState(response.data);
        })
        .catch((error) => console.error(error));
    },[urlService]);
  
    const deleteUrlShortener = (id: number) => {
      setUrlShortenersState([...urlsShorts.filter(urlShortener => urlShortener.id !== id)]);
    }
  
    const selectedUrlShortenerForDelete = (urlShortener: UrlShorteners) => {
      setSelectedUrlShortener(urlShortener);
      setShowDelete(true);
    }
    const goToUrl = (code:string) => {
        navigate(`/${code}`);
    };
    return (
        <>
          <div className="d-flex justify-content-between mb-4 mt-4">
            <h1 className="text-start">Shortener URLs</h1>
            <Button variant="primary" size="sm" onClick={handleCreateShow}>
              Create
            </Button>
          </div>
          <UrlShortenersList
            urlShorteners={urlsShorts}
            deleteUrlShortener={selectedUrlShortenerForDelete}
            openUrlShortener={goToUrl}
          />
          <CreateUrlShortenerModal isOpen={showCreate} onClose={handleCreateClose} onAddUrlShortener={addUrlShortener} />
          <DeleteUrlShortenerModal 
            isOpen={showDelete}
            onClose={handleDeleteClose}
            urlShortener={selectedUrlShortener}
            urlShortenerDeleted={deleteUrlShortener}
          />
        </>
      );
}