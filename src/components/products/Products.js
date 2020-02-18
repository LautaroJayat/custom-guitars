import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../../App.css'



function Products(props) {

    let params = props.match.params;
    const [currentProduct, setCurrentProduct] = useState(
        props.products[params.products].filter((e) => { return e.URL === params.name })[0]
    )
    const [firstElement, setFirstElement] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)
    const [showInfo, setShowInfo] = useState(false);

    const moveRight = () => {
        setFirstElement(false)
        setFadeOut(true)

    }

    const onAnimationEnd = () => {
        if (fadeOut && !firstElement) {
            setFadeOut(false)
        }
    }

    useEffect(() => {
        if (!fadeOut && !firstElement) {
            setCurrentProduct(
                props.products[params.products][
                parseInt(currentProduct.code) + 1 < props.products[params.products].length ? parseInt(currentProduct.code) + 1 : 0
                ]
            )
            setShowInfo(false)
        }
    }, [fadeOut])




    return (
        <React.Fragment>

            <div className="aux-line"></div>

            <section className="main">

                <button className="scrollButtons left"></button>

                <div className="left">
                    <div onAnimationEnd={onAnimationEnd} style={{ opacity: fadeOut ? '1' : '0' }} className={
                        fadeOut ? "guitar_container productsFadeOut" : "guitar_container productsFadeIn"
                    }>
                        <img src={currentProduct.imageURL} alt={currentProduct.name}></img>
                    </div>

                </div>

                <div className="right">
                    <h1 id="guitarTitle" className="guitar-title">{currentProduct.name}</h1>
                    <h2 id="guitarHeadline" style={showInfo ? { maxWidth: '450px' } : {}} class='headline'>{showInfo ? currentProduct.subtitle : currentProduct.headline}</h2>
                    <p id="guitarDescription" style={showInfo ? { maxWidth: '350px', lineHeight: '1.3rem' } : {}} class='description'>{showInfo ? currentProduct.info : currentProduct.description}</p>

                    <p
                        onClick={() => { setShowInfo(true) }}
                        style={params.products === 'accessories' ? { display: 'hidden' } : null}
                        className={showInfo ? 'actions readMoreOut' : 'actions'}>Read More</p>

                    <Link to={`/info/${params.products}/${params.name}`} className="actions">Buy for only <span className='buy'>{currentProduct.price}!</span></Link>

                </div>
                <button onClick={moveRight} className="scrollButtons right"></button>



            </section>
        </React.Fragment >
    )
}
export default Products