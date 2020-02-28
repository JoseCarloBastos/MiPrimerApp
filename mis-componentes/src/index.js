import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import Carro from './componentes/Carro/index'
import Carretera from './componentes/Carretera/index'
import car1 from './img/blue_car.png'
import car2 from './img/gray_car.png'
import car3 from './img/gray_car1.png'
import car4 from './img/red_car.png'
import car5 from './img/yellow_car.png'
import road1 from './img/road001.png'
import road2 from './img/road002.png'
import road3 from './img/road003.png'

ReactDOM.render(
    <div>
        <Carretera 
            road={road3}
            />
        <Carro 
            id="0001"
            tiempo="4.9"
            altura="80"
            car={car1}/>
        <Carro 
            id="0002"
            tiempo="4.91"
            altura="130"
            car={car2}/>
    </div>

    , document.getElementById('root'));