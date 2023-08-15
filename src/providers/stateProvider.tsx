import React, {  useState } from 'react'
import reactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './state/store'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import "bootstrap-icons/font/bootstrap-icons.css"
const MyApp:React.FC = ({children} : {children : React.ReactNode}) =>{
    return (
        <div>
            <Provider store={store} >
<App/>
            </Provider>
        </div>
        )
}
reactDom.render( <MyApp/> , document.getElementById('root') )