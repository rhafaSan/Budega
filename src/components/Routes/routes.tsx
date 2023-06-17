import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../../Pages/Login'

export const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} />
        </Routes>
        </BrowserRouter>
    )
}