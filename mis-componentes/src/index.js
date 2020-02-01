import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

//componentes
import Button from './componentes/Button'
import Checkbox from './componentes/checkbox/Checkbox'
import Input from './componentes/Input'

//estilos
import './styles/Button.css'
import './styles/cbstyle1.css'
import './styles/cbstyle2.css'
import './styles/cbstyle3.css'
import './styles/cbstyle4.css'
import './styles/checkbox.css'
import './styles/Input.css'
import './styles/MainStyles.css'

//imagenes


ReactDOM.render(
    <div>
        <div>
            <Button />
        </div>
        <div>
            <Input />
        </div>
        <div>
            <Checkbox />
        </div>
    </div>

    , document.getElementById('root'));