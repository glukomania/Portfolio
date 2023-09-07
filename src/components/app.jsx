import { Routes, Route } from 'react-router-dom';
import Main from './main'

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Main />} />
          <Route path="/about" element={<Main />} />
       </Routes>
    </>
 );
};

export default App;