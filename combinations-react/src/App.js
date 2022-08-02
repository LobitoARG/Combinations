import './index.css'
import dog from './assets/dog.png'
import Combination from './components/Combination'
import Permutation from './components/Permutation'
import Variation from './components/Variation'
import Options from './components/Options'
import Questions from './components/Questions'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className='w-screen h-[100px] z-10 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <img src={dog} alt='dog' className='max-h-10'></img>
        <button className='px-8 py-3'>Dark Mode</button>
        <button className='px-8 py-3'>Language Mode</button>
      </div>
      <div className='border-solid bg-green-800 h-[2px] w-screen'>
      </div>
      <Options/>
      <Routes>
        <Route path='/combination' exact element={<Combination/>}/>
        <Route path='/permutation' exact element={<Permutation/>}/>
        <Route path='/variation' exact element={<Variation/>}/>
      </Routes>
      <h1 className='text-center mt-5'>Dont know wich option to choose?</h1>

      <section className='questions-section'>
          <h1 className='title-questions'>Combinatorics have never been easier</h1>
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
    </div>
  );
}

export default App;
