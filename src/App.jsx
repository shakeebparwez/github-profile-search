import { useState } from 'react';
import './App.css';
import ProfileViewerWithSearch from './ProfileViewerWithSearch';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfileViewerWithSearch />
    </>
  )
}

export default App;

