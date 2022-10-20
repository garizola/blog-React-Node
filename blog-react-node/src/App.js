
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />

      <body id='page-body'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/articles' element={<ArticlesListPage />} />
          {/* url parameter ___________________ below */}
          <Route path='/articles/:articleId' element={<ArticlePage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path='*' element={<NotFoundPage />} />

       </Routes>
       

      </body>
      
    </div>
    </BrowserRouter>
  );
}

export default App;


