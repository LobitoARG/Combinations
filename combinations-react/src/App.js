import Main from './components/Main'
import './index.css'
import Questions from './components/Questions'
import Footer from './components/Footer'
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Español' }
};


function App() {

  const { t, i18n } = useTranslation();

  return (
  <>
    <div className='main-app'>
      <Main/>
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
  );
}

export default App;
