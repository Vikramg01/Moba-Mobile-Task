import React from 'react'
import './Dashboard2.css'

function Dashboard2() {
    return (
        <>
            <div>
                <div className="nav">
                    <h1>Logo</h1>
                    <div className="profile-logo"><i class="fa-solid fa-user"></i></div>
                </div>

                <div className="db2">
                    <aside>
                        <div className="arrow-data-left"><i class="fa-solid fa-arrow-data-left"></i></div>
                        <p><i class="fa-solid fa-house"></i>  HOME</p>
                        <p><i class="fa-solid fa-rotate"></i>  Loram Iporam</p>
                        <p><i class="fa-solid fa-rotate"></i>  Loram Iporam</p>
                        <p><i class="fa-solid fa-rotate"></i>  Loram Iporam</p>
                        <p><i class="fa-solid fa-rotate"></i>  Loram Iporam</p>
                    </aside>
                    <div>
                        <section className='section'>
                            <p className='home-p-db2'>Home</p>
                            <div className='data'>
                                <div className="data1">
                                    <div className="data-left">
                                        <p>Loram Iporam</p>
                                        <p>5</p>
                                    </div>
                                    <div className="data-right">
                                        <i class="fa-brands fa-react"></i>
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                                <div className="data2">
                                    <div className="data-left">
                                        <p>Loram Iporam</p>
                                        <p>3</p>
                                    </div>
                                    <div className="data-right">
                                        <i class="fa-brands fa-react"></i>
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                                <div className="data3">
                                    <div className="data-left">
                                        <p>Loram Iporam</p>
                                        <p>8/50</p>
                                    </div>
                                    <div className="data-right">
                                        <i class="fa-brands fa-react"></i>
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                                <div className="data4">
                                    <div className="data-left">
                                        <p>Loram Iporam</p>
                                        <p>2</p>
                                    </div>
                                    <div className="data-right">
                                        <i class="fa-brands fa-react"></i>
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>

                            </div>

                            <div className="bottom">
                                <div className="form">
                                    <p>Form Details</p>
                                    <form action="">
                                        <div className="mail-mob">
                                            <div className="mail">
                                                <label htmlFor="">Email</label>
                                                <input type="email" name="" id="" placeholder='Enter your email' />
                                            </div>
                                            <div className="mob">
                                                <label htmlFor="">Phone number</label>
                                                <input type="tel" name="" id="" placeholder='Enter your phone number' />
                                            </div>
                                        </div>
                                        <div className="name">
                                            <label htmlFor="">Full Name</label>
                                            <input type="text" />
                                        </div>
                                        <div className="addr">
                                            <label htmlFor="">Address</label>
                                            <input type="text"placeholder='Enter your address' />
                                        </div>
                                        <div className="posy-city">
                                            <div className="post">
                                                <label htmlFor="">Post code</label>
                                                <input type="text" placeholder='Enter your postcode'/>
                                            </div>
                                            <div className="city">
                                                <label htmlFor="">City</label>
                                                <input type="text" placeholder='Enter your city'/>
                                            </div>
                                            </div>
                                            <div className="lati-longi">
                                                <div className="latitude">
                                                    <label htmlFor="">Latitude</label>
                                                    <input type="text" />
                                                </div>
                                                <div className="longitude">
                                                    <label htmlFor="">Longitude</label>
                                                    <input type="text" />
                                                </div>
                                            
                                        </div>
                                    <button className='submit-btn' type="submit">Submit</button>
                                    </form>
                                </div>

                                <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470027.2875193123!2d72.25005752275631!3d23.02053415874055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1697519232187!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>

                            </div>


                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard2