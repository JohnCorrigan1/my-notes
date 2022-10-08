import { useState } from 'react';
import Components from './components/ui/Components';
import Header from './components/ui/Header';
import Home from './components/ui/Home';


function App() {

  const [selectedPage, setSelectedPage] = useState(null)

  return (
    <div className="App max-h-screen">
      {selectedPage !== 'Components' && <Header setSelectedPage={setSelectedPage} />}
      {!selectedPage && <Home setSelectedPage={setSelectedPage}/>}
      {selectedPage === 'Components' && <Components setSelectedPage={setSelectedPage} />}
    </div>
  );
}

export default App;
