import React, { useState } from 'react';

import Card from './Card';

import uniqid from "uniqid";

import '../styles/Main.css';

import AngularIcon from '../Icons/angular.svg';

const Main = () => {
    const cardArray = useState();

    return (
        <main>
            <Card />
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
            Id: "1",
            name: "Angular",
            Img: AngularIcon,
            Clicked: false,
        },
        {
            Id: "2",
            name: "CSS3",
            Img: "",
            Clicked: false,
        },
        {
            Id: "3",
            name: "HTML5",
            Img: "",
            Clicked: false,
        },
        {
            Id: "4",
            name: "Javascript",
            Img: "",
            Clicked: false,
        },
        {
            Id: "5",
            name: "JSON",
            Img: "",
            Clicked: false,
        },
        {
            Id: "6",
            name: "MongoDB",
            Img: "",
            Clicked: false,
        },
        {
            Id: "7",
            name: "NodeJs",
            Img: "",
            Clicked: false,
        },
        {
            Id: "8",
            name: "php",
            Img: "",
            Clicked: false,
        },
        {
            Id: "9",
            name: "Python",
            Img: "",
            Clicked: false,
        },
        {
            Id: "10",
            name: "REACT",
            Img: "",
            Clicked: false,
        },
        {
            Id: "11",
            name: "Typescript",
            Img: "",
            Clicked: false,
        },
        {
            Id: "12",
            name: "VueJs",
            Img: "",
            Clicked: false,
        },
    ]
}