import './index.css'
import Questions from './components/Questions'
import Footer from './components/Footer'
import { createContext, useState} from 'react'
import Main from './components/Main'
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Español' }
};

export const ThemeContext = createContext(null)


function App() {

  const { t, i18n } = useTranslation();

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
  <>
    <div className='main-app' id={theme}>

    <div className = 'main-div'>
      <div className='nav-div'>
        <h1 className='logo'>Combinados</h1>
        <div className='settings'>
        <button><i onClick={toggleTheme} class="fa-solid fa-circle-half-stroke"></i></button>
        <button><i class="fa-solid fa-globe"></i></button>
        </div>
      </div>
      <Main/>
      </div>
    </div>

    <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
    
    <section className='questions-section'>
          <h1 className='title-questions' id="question-title">{t('questions.title')}</h1>
          < Questions
          question = {t('questions.first')}
          answer = {t('answers.first')}
          />
          < Questions
          question = {t('questions.second')}
          answer = {t('answers.second')}
          />
          < Questions 
          question = {t('questions.third')}
          answer = {t('answers.third')}
          />
          < Questions 
          question = {t('questions.forth')}
          answer = {t('answers.forth')}
          />
      </section>

      <footer className='footer-box'>
        <Footer/>
      </footer>

 </>
 </ThemeContext.Provider>
  );
}

export default App;
