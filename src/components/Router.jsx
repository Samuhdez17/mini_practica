import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Doctores from './DoctoresEspecialidad'

export default class Router extends Component {
    render() {
        return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/doctores' element={<Doctores/>} />
            </Routes>
        </BrowserRouter>
        )
    }
}
