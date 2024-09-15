import { Route, Routes } from "react-router-dom";
import UrlShortenerPage from "./components/pages/url-shortener-page/UrlShortenerPage";
import { UrlRedirectPage } from "./components/pages/url-redirect-page/UrlRedirectPage";
const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" Component={UrlShortenerPage} />
          <Route path="/:code" Component={UrlRedirectPage} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
