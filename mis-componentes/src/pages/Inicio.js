import React from 'react';

import Carro from '../componentes/Carro/index';
import Carretera from '../componentes/Carretera/index';
import Panel from '../componentes/Panel/index';
import Boton from '../componentes/Boton/index';
import Card from '../componentes/Card/index';
import Versus from '../componentes/Versus/index';
import Mejora from '../componentes/Mejoras/index';
import Mapa from '../componentes/Mapa/index';

import car1 from '../img/blue_car.png';
import car2 from '../img/gray_car.png';
import car3 from '../img/gray_car1.png';
import car4 from '../img/red_car.png';
import car5 from '../img/yellow_car.png';
import road1 from '../img/road001.png';
import road2 from '../img/road002.png';
import road3 from '../img/road003.png';

export default function InputDeviceInfo() {
    
    return (
        <div>
            <Carretera
                road={road3}
            />
            <Carro
                id="0001"
                tiempo="4.9"
                altura="80"
                car={car4} />
            <Carro
                id="0002"
                tiempo="4.91"
                altura="130"
                car={car2} />
            <Panel titulo="Control de carrera">
                <Boton text="Play"/>
                <Boton text="Stop"/>
            </Panel>
            <Panel titulo="Seleccion de coches">
                <Card nombre="carro1" id="001" img={car1} caracteristicas="caracteristicas"></Card>
                <Card nombre="carro2" id="002" img={car2} caracteristicas="caracteristicas"></Card>
                <Card nombre="carro3" id="003" img={car3} caracteristicas="caracteristicas"></Card>
                <Card nombre="carro4" id="004" img={car4} caracteristicas="caracteristicas"></Card>
                <Card nombre="carro5" id="005" img={car5} caracteristicas="caracteristicas"></Card>
                <br/>
                <Versus competidor1="carro1" competidor2="carro2"/>
                <Boton text="Select"/>
            </Panel>
            <Panel>
                <Mejora nombre="Motor" img="" efecto=""></Mejora>
                <Mejora nombre="Aceleracion" img="" efecto=""></Mejora>
                <Mejora nombre="Agarre" img="" efecto=""></Mejora>
                <Mejora nombre="Peso" img="" efecto=""></Mejora>
                <Mejora nombre="Transmision" img="" efecto=""></Mejora>
                <Mejora nombre="Aerodinamico" img="" efecto=""></Mejora>
            </Panel>
            <Panel>
                <Mapa nombre="Campo" img={road1}></Mapa>
                <Mapa nombre="Ciudad" img={road2}></Mapa>
                <Mapa nombre="Autopista" img={road3}></Mapa>
                <br/>
                <Boton text="Select"/>
            </Panel>
        </div>
    )
};