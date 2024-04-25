import Main from './Main';
import './center.scss';
import MyWork from './myWork/myWork';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Center = () => {
    return (
        <div className='centerSection'>
            <Router>
                <Routes>
                    <Route exact path = "/" element ={<Main/>}/>
                    <Route exact path="/project" element={<MyWork />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Center;