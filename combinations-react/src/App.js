import Main from './components/Main'
import './index.css'
import Questions from './components/Questions'
import Footer from './components/Footer'

function App() {
  return (
  <>
    <div className='main-app'>
      <Main/>
    </div>
    
    <section className='questions-section'>
          <h1 className='title-questions' id="question-title">Combinatorics have never been easier</h1>
          < Questions
          question = "What is Combinatorics?"
          answer = "Combinatorics is an area of mathematics primarily concerned with counting, both as a means and an end in obtaining results, and certain properties of finite structures. It is closely related to many other areas of mathematics and has many applications ranging from logic to statistical physics and from evolutionary biology to computer science."
          />
          < Questions
          question = "What is Combination?"
          answer = "A combination is a mathematical technique that determines the number of possible arrangements in a collection of items where the order of the selection does not matter. In combinations, you can select the items in any order."
          />
          < Questions 
          question = "What is Permutation?"
          answer = "A permutation is a mathematical calculation of the number of ways a particular set can be arranged, where the order of the arrangement matters."
          />
          < Questions 
          question = "What is Variation?"
          answer = "Variations are arrangements of selections of objects with or without repetition, where the order of the selected objects matters."
          />
      </section>

      <footer className='footer-box'>
        <Footer/>
      </footer>

 </>
  );
}

export default App;
