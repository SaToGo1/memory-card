import React, { useState } from 'react';

import Card from './Card';

import uniqid from "uniqid";

import '../styles/Main.css';

import AngularIcon from '../Icons/angular.svg';
import CSS3Icon from '../Icons/CSS3.svg';
import HTML5Icon from '../Icons/HTML5.svg';
import JavascriptIcon from '../Icons/Javascript.svg';

import JSONIcon from '../Icons/JSON.svg';
import mongodbIcon from '../Icons/mongodb.svg';
import NodeJsIcon from '../Icons/NodeJs.svg';
import phpIcon from '../Icons/php.svg';

import pythonIcon from '../Icons/python.svg';
import REACTIcon from '../Icons/REACT.svg';
import TypescriptIcon from '../Icons/Typescript.svg';
import VueJsIcon from '../Icons/VueJs.svg';


const Main = () => {
    const [cardArray, setCardArray] = useState(loadCardData());

    const cardClicked = (e, id) => {
        console.log(`Hello at id: ${id}`);
        return 0;
    }

    
    return (
        <main>
            {cardArray.map(card => (
                <Card data={card} key={uniqid()} cb={cardClicked} />
            ))}
        </main>   
    )
}

export default Main;


const loadCardData = () => {
    return [
        {
            id: "0",
            name: "Angular",
            img: AngularIcon,
            clicked: false,
        },
        {
            id: "1",
            name: "CSS3",
            img: CSS3Icon,
            clicked: false,
        },
        {
            id: "2",
            name: "HTML5",
            img: HTML5Icon,
            clicked: false,
        },
        {
            id: "3",
            name: "Javascript",
            img: JavascriptIcon,
            clicked: false,
        },
        {
            id: "4",
            name: "JSON",
            img: JSONIcon,
            clicked: false,
        },
        {
            id: "5",
            name: "MongoDB",
            img: mongodbIcon,
            clicked: false,
        },
        {
            id: "6",
            name: "NodeJs",
            img: NodeJsIcon,
            clicked: false,
        },
        {
            id: "7",
            name: "php",
            img: phpIcon,
            clicked: false,
        },
        {
            id: "8",
            name: "Python",
            img: pythonIcon,
            clicked: false,
        },
        {
            id: "9",
            name: "REACT",
            img: REACTIcon,
            clicked: false,
        },
        {
            id: "10",
            name: "Typescript",
            img: TypescriptIcon,
            clicked: false,
        },
        {
            id: "11",
            name: "VueJs",
            img: VueJsIcon,
            clicked: false,
        },
    ]
}