
import { Suspense } from 'react'
import './App.css'
import Todos from './Todos'
import { ToastContainer } from 'react-toastify';


function App() {
  const userPromise=fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response=>response.json())

  return (
    <>
      <ToastContainer></ToastContainer>
      <h1>React Concepts</h1>
      <Suspense fallback={<span>Loading.....</span>}>
          <Todos userPromise={userPromise}></Todos>
      </Suspense>
    </>
  )
}

export default App
