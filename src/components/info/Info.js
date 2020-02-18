import React from 'react'
import '../../App.css'

function Info() {

    return (



        <section style={{ justifyContent: 'space-evenly' }} className="main">


            <div style={{ width: 'auto', maxWidth: 'auto' }}   className='right'>
                <div style={{ margin: '2rem' }} >
                    <h1 id="guitarTitle" className="guitar-title">About Us</h1>
                    <h2 id="guitarHeadline" style={{ fontFamily: "'Uncial Antiqua', cursive" }} class='headline'>Custom Guitars</h2>
                    <p class='aboutPar'>Obsessed with good quality sound, and beautifuly made guitars, we decided to produce the best guitars in America.</p>
                    <p className='aboutPar'>Our instruments are made only with the best wood, and a fusion between traditional technics focused on moden needs.</p>
                    <p className='aboutPar'>Currently based in California, we ship our products all over the world</p>
                </div>

            </div>

            <div className="left">
                <div style={{ display: 'flex', flexFlow: 'column', maxWidth: 'auto', alignSelf: 'center', justifySelf: 'center', justifyContent: 'center' }}>
                    <p style={{ textAlign: 'center', maxWidth: '200px' }} className='aboutInfo'>666 Linden Ave</p>
                    <p style={{ textAlign: 'center', maxWidth: '200px' }} className='aboutInfo'>Long Beach, CA 90802</p>

                    <p style={{ textAlign: 'center', maxWidth: '200px' }} className='aboutInfo'>contact@customguitars.com</p>
                    <p style={{ textAlign: 'center', maxWidth: '200px' }} className='aboutInfo'>(562) 269-6666</p>
                </div>
            </div>




        </section >

    )

}

export default Info;