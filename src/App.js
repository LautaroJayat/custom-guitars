import React, { useState } from 'react';
import { Link, Route, HashRouter, Switch } from 'react-router-dom'
import './App.css'
import Info from './components/info/Info'
import Products from './components/products/Products';
import Home from './components/home/Home';
import Form from './components/form/Form';
import logo from './LogoWhite.png'
import logoSVG from './logoSVG.svg'
import salamanca from './components/strato.png'
import tarrega from './components/classical.png'
import metal from './components/metal.png'
import bass from './components/bass.png'
import shirt from './components/shirt.png'
import guitarCase from './components/case.png'
import hat from './components/hat.png'




function App() {

    let harcodedProducts = {
        instruments: [
            {
                captionName: 'Salamanca',
                name: 'Salamanca SP',
                price: '500',
                headline: 'More voodoo than Hendrix.',
                description: 'There are certain things that only can be expressed with black magic.',
                subtitle: 'Sweet home harmonics',
                info: 'Like every stratocaster, the Salamanca SP offers super bright harmonics, three picks to choose and combine and a exlusive built in mixing system. Your ears will sigh.',
                imageURL: salamanca,
                URL: 'salamanca',
                code: '0'
            },
            {
                captionName: 'Tarrega',
                name: 'Tarrega AG',
                price: '400',
                headline: 'Between folk and classical',
                description: 'A good craftsman makes a guitar, an excellent one gives wood a soul.',
                subtitle: 'Old but gold',
                info: 'Made with the highest standards, this guitar provides both a sweet but metalic sound. From country to blues, including jazz and pop, the Tarrega AG will allways sound delightfull and bright.',
                imageURL: tarrega,
                URL: 'tarrega',
                code: '1'

            },
            {
                captionName: 'Jack Hammer',
                name: 'Jack Hammer',
                price: '450',
                headline: 'Just in time to grind',
                description: "For someones it's only noise, to others is just the only way to distill sublime emotions.",
                subtitle: "Apollonian and heavy",
                info: 'Back to the roots of heavy sounding guitars, the design of the Jack Hammer includes all the neccessary details that makes that sweet and fat sound. If you are ready to rock, this is the best choice for you.',
                imageURL: metal,
                URL: 'jack',
                code: '2'


            },
            {
                captionName: 'Stompy',
                name: 'Stompy',
                price: '450',
                headline: 'Steady like an elephant',
                description: "Never underestimate the fundations over a super solid bass sound.",
                subtitle: "The Incredible Hulk of sound",
                info: "It doesent matter if you are looking to play the blues, jazz or rock and roll: your fundations must be rock solid. The Stompy offers the crystal clear sound of a custom jazz bass, with an optional extra fatness. From Pantera to Charles Minugs, this is the versatility that you are looking for.",
                imageURL: bass,
                URL: 'stompy',
                code: '3'

            },


        ],
        accessories: [

            {
                captionName: 'Shirts!',
                headline: 'The best looking outfit for a musician',
                description: 'Stop wasting money in Gucci or Armani and order your Custom Guitar T-shirt today!',
                price: '10',
                imageURL: shirt,
                URL: 'shirt',
                code: '0'
            },
            {
                captionName: 'Hats!',
                headline: 'Yea, I know...',
                description: 'Not another boring hat. Wearing one of this will guarantee you a pretty good looking image in front of the mirror',
                price: '5',
                imageURL: hat,
                URL: 'hat',
                code: '1'

            },
            {
                captionName: 'Cases!',
                headline: 'For those who care about their instruments',
                description: 'They will know that you are between the best guitar players, is written on your case...',
                price: '200',
                imageURL: guitarCase,
                URL: 'case',
                code: '2'

            }


        ]
    }

    const [products, setProducts] = useState(harcodedProducts);
    const [navOn, setNavOn] = useState(false)

    function enterNav() {
        setNavOn(true)
    }
    function outNav() {
        setNavOn(false)
    }

    return (
        <HashRouter basename="/">

            <Route path="/">
                <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }} className="background-div">
                    <img style={{ marginTop: '7%', zIndex: '-2', width: '80vw', height: 'auto', opacity: '0' }} src={logoSVG} alt="Custom Guitars Logo"></img>
                </div>
                <nav className="nav_container">
                    <Link to="/home" className="logo_container">
                        <img src={logo} alt="Custom Guitars Logo"></img>
                    </Link>
                    <div className="nav-links_container">
                        <Link to="/home/instruments" className="nav-link">Instruments</Link>
                        <Link to="/home/accessories" className="nav-link">Accessories</Link>
                        <Link to="/about" className="nav-link">About Us</Link>
                    </div>
                    <span onClick={enterNav} className="menuButton">MENU</span>
                </nav>
                <div className={!navOn ? "nav-links_container_dropdown navOff" : "nav-links_container_dropdown"}>
                    <Link onClick={outNav} to="/home/instruments" className="nav-link">Instruments</Link>
                    <Link onClick={outNav} to="/home/accessories" className="nav-link">Accessories</Link>
                    <Link onClick={outNav} to="/about" className="nav-link">About Us</Link>
                    <p onClick={outNav} className="nav-link">Back</p>
                </div>
            </Route>
            <Route exact path="/">
                <Link to="/home" className="wellcome"> Take a tour</Link>
            </Route>
            <Route exact path={`/home`} render={props => (<Home {...props} products={products}></Home>)} >

            </Route>

            <Route exact path="/products/:products/:name" render={
                props => (
                    <Products {...props} products={products}></Products>
                )}>
            </Route>

            <Route exact path="/info/:products/:name" render={
                props => (
                    <Info {...props} products={products}></Info>
                )}>
            </Route>

            <Route path="/home/:products/" render={
                props => (<Home {...props} products={products}></Home>
                )}></Route>

            <Route path="/about">
                <Info></Info>
            </Route>

            <Route exact path="/form/:products/:name" render={
                props => (
                    <Form {...props} products={products}></Form>
                )}>
            </Route>
        </HashRouter>





    )
}

export default App