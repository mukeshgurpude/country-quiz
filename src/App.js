import './App.scss';
import { useState } from 'react';

import Header from './components/header'
import Quiz from './components/quiz';

function App() {
  const [showImage, setShowImage] = useState(false);
  return <>
    <Header showImage={showImage}/>
    <Quiz setShowImage={setShowImage}/>
  </>
}

export default App;
