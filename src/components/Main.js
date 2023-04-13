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


const Main = ({ incrementScore, resetScore }) => {
    const [cardArray, setCardArray] = useState(loadCardData());

    const cardClicked = (e, id) => {
        let [card] = cardArray.filter( cd => cd.id === id )
        
        if(card.clicked === false){
            card.clicked = true;

            setCardArray(cardArray.map(cd => {
                if(cd.id === id) return card;
                return cd;
            }))

            incrementScore()
        }else{
            resetScore();
            setCardArray(cardArray.map(cd => {
                cd.clicked = false;
                return cd;
            }));
        }
    }

    
    return (
        <main>
            {cardArray.map(card => (
                <Card data={card} key={card.id} cb={cardClicked} />
            ))}
        </main>   
    )
}

export default Main;


const loadCardData = () => {
    return [
        {
            id: uniqid(),
            name: "Angular",
            img: AngularIcon,
            clicked: false,
        },
        {
            id: uniqid(),
            name: "CSS3",
            img: CSS3Icon,
            clicked: false,
        },
        {
            id: uniqid(),
            name: "HTML5",
            img: HTML5Icon,
            clicked: false,
        },
        {
            id: uniqid(),
            name: "Javascript",
            img: JavascriptIcon,
            clicked: false,
        },
        {
            id: uniqid(),
            name: "JSON",
            img: JSONIcon,
            clicked: false,
        },
        {
            id: uniqid(),
            name: "MongoDB",
            img: mongodbIcon,
            clicked: false,
        },
        {
            id: uniqid(),
            name: "NodeJs",
            img: NodeJsIcon,
            clicked: false,
        },
        {
            id: uniqid(),
            name: "php",
            img: phpIcon,
            clicked: false,
        },
        {
            id: uniqid(),
            name: "Python",
            img: pythonIcon,
            clicked: false,
        },
        {
            id: uniqid(),
            name: "REACT",
            img: REACTIcon,
            clicked: false,
        },
        {
            id: uniqid(),
            name: "Typescript",
            img: TypescriptIcon,
            clicked: false,
        },
        {
            id: uniqid(),
            name: "VueJs",
            img: VueJsIcon,
            clicked: false,
        },
    ]
}