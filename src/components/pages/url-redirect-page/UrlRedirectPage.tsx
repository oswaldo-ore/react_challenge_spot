import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UrlService } from "../../../services/UrlShortenerService";

export function UrlRedirectPage() {
  const { code  } = useParams();
  const urlService = new UrlService();
  
  useEffect(() => {
    urlService.getUrlShortenerByCode(code!)
      .then((response) => {
        window.location.href = response.data.original_url;
      })
      .catch((error) => console.error(error));
  })

  return (
    <div>
      <h1>URL Redirect Page</h1>
      <p>Code from URL: {code}</p>
    </div>
  );
}
