import { Route, Routes } from "react-router-dom";
import UrlShortenerPage from "./components/pages/url-shortener-page/UrlShortenerPage";
import { UrlRedirectPage } from "./components/pages/url-redirect-page/UrlRedirectPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";

const App: React.FC = () => {
  return (
    <div className="App">
      <Container style={{ width: '100vw' }}>
        <Routes>
          <Route path="/" Component={UrlShortenerPage} />
          <Route path="/:code" Component={UrlRedirectPage} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </Container>
    </div>
  );
};

export default App;
