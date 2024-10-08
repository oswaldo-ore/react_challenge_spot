import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UrlService } from "../../../services/UrlShortenerService";

export function UrlRedirectPage() {
  const urlService = useMemo(() => new UrlService(), []);
  const { code } = useParams<{ code?: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  

  useEffect(() => {
    if (code) {
      urlService.getUrlShortenerByCode(code)
        .then((response) => {
          window.location.href = response.data.original_url;
        })
        .catch((error) => {
          setLoading(false);
          setError(`The code does not exist or an error occurred. ${error}`);
        });
    } else {
      setLoading(false);
      setError("Code not provided.");
    }
  }, [code, urlService]);

  if (loading) {
    return <div>URL Redirect Page...</div>;
  }

  return (
    <div>
      <h1> Url Redirect Info </h1>
      {error ? (
        <div>
          <p>{error}</p>
          <button onClick={() => navigate('/')}>Go to Home Page</button>
        </div>
      ) : (
        <p>Redirecting to the original URL...</p>
      )}
    </div>
  );
}