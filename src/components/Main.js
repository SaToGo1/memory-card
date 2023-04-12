import React, { useState } from 'react';

import Card from './Card';

import uniqid from "uniqid";

import '../styles/Main.css';

import AngularIcon from '../Icons/angular.svg';

const Main = () => {
    // const cardArray = useState(loadCardData());

    const [angular] = loadCardData();

    console.log(angular)

    const cardClciked = () => {
        return 0;
    }
    
    return (
        <main>
            <Card data={angular} />
            <div className='card'>hi</div>
            <div className='card'>hi</div>
            <div className='card'>hi</div>
            <div className='card'>hi</div>
            <div className='card'>hi</div>
            <div className='card'>hi</div>
            <div className='card'>hi</div>
            <div className='card'>hi</div>
            <div className='card'>hi</div>
            <div className='card'>hi</div>
            <div className='card'>hi</div>
            <div className='card'>hi</div>
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
            img: "",
            clicked: false,
        },
        {
            id: "2",
            name: "HTML5",
            img: "",
            clicked: false,
        },
        {
            id: "3",
            name: "Javascript",
            img: "",
            clicked: false,
        },
        {
            id: "4",
            name: "JSON",
            img: "",
            clicked: false,
        },
        {
            id: "5",
            name: "MongoDB",
            img: "",
            clicked: false,
        },
        {
            id: "6",
            name: "NodeJs",
            img: "",
            clicked: false,
        },
        {
            id: "7",
            name: "php",
            img: "",
            clicked: false,
        },
        {
            id: "8",
            name: "Python",
            img: "",
            clicked: false,
        },
        {
            id: "9",
            name: "REACT",
            img: "",
            clicked: false,
        },
        {
            id: "10",
            name: "Typescript",
            img: "",
            clicked: false,
        },
        {
            id: "11",
            name: "VueJs",
            img: "",
            clicked: false,
        },
    ]
}