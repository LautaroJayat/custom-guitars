import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../../App.css'
import './Form.css'
import paypal from './paypal.png'



function Form(props) {

    let params = props.match.params;
    const [currentProduct, setCurrentProduct] = useState(
        props.products[params.products].filter((e) => { return e.URL === params.name })[0]
    )
    console.log(currentProduct);
    console.log(params)

    return (
        <React.Fragment>

            <div className="aux-line"></div>

            <section className="main">


                <div className="left">
                    <div className="guitar_container productsFadeIn">
                        <img src={currentProduct.imageURL} alt={currentProduct.name}></img>
                    </div>

                </div>

                <div className="right">

                    <h1 style={{ fontSize: '2rem' }} id="guitarHeadline" className="guitar-title">{currentProduct.name}, good choice!</h1>

                    <label className="label" for="name" >Full name:</label>
                    <input className="input" name="name" type="text" autocomplete="off"></input>

                    <label className="label" for="email">Email:</label>
                    <input className="input" name="email" type="email" autocomplete="off"></input>

                    <label className="label" for="address">Address:</label>
                    <input className="input" name="address" type="text" autocomplete="off"></input>
                    <div className='buyContainer'>
                        <div >
                            <span className='result'>Total:</span>
                            <span style={{ color: 'rgb(0, 255, 0)' }} className='result'>USD ${currentProduct.price}</span>
                        </div>

                        <a href="https://www.linkedin.com/in/lautaro-jayat"><img  src={paypal}></img></a>
                    </div>
                </div>




            </section>
        </React.Fragment >
    )
}
export default Form