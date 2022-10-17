import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css'
import Homepage from './Pages/Homepage';
import Contactpage from './Pages/Contactpage';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Gallerypage from './Pages/Gallerypage';
import Aboutpage from './Pages/Aboutpage';
import Coursepage from './Pages/Coursepage';
import Newspage from './Pages/Newspage';
import Resultpage from './Pages/Resultpage';
const root = ReactDOM.createRoot(document.getElementById('root'));
const App=()=>{
return <>
<BrowserRouter >
<Routes>
<Route path='' element={<Homepage/>} />;
<Route path='/home' element={<Homepage/>} />
<Route path='/contact' element={<Contactpage/>} />
<Route path='/about' element={<Aboutpage/>} />
<Route path='/gallery' element={<Gallerypage/>} />
<Route path='/courses' element={<Coursepage/>} />
<Route path='/news' element={<Newspage/>} />
<Route path='/result' element={<Resultpage/>} />
<Route path='*' element={<h1>404 ERROR</h1>} />
</Routes>
</BrowserRouter >
</>
}
root.render(
    <App/>
);


