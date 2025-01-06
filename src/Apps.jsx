import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateUser from './CreateUser.jsx';
import UpdateUser from './UpdateUser.jsx';
import User from './User.jsx'; 

function Apps() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<User/>}/>
                    <Route path="/create" element={<CreateUser/>}/>
                    <Route path="/update/:id" element={<UpdateUser/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Apps;