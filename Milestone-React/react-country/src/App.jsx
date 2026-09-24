import './App.css'
import Countries from './Countries'
import { Suspense } from 'react';

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json()) ;

function App() {
 
  return (
    <>
      <h2>Hello React</h2>
      <Suspense fallback = {<p>Country list is loading </p>}>
            <Countries countriesPromise = {countriesPromise}></Countries>
      </Suspense>
      
    </>
  );
}

export default App
