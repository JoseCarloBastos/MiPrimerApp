import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

//componentes
import Button from './componentes/Button'
import Checkbox from './componentes/checkbox/Checkbox'
import Input from './componentes/Input'

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