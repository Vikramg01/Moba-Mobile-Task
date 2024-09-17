import React from 'react'
import '../Dashboard1/Dashboard1.css';

function Dashboard1() {
    return (
        <>
            <div>
                <div className="nav">
                    <h1>Logo</h1>
                    <div className="profile-logo"><i class="fa-solid fa-user"></i></div>
                </div>

                <div className="db1">

                    <aside>
                        <div className="arrow-left"><i class="fa-solid fa-arrow-left"></i></div>
                        <p><i class="fa-solid fa-house"></i>  HOME</p>
                        <p><i class="fa-solid fa-rotate"></i>  Loram Iporam</p>
                        <p><i class="fa-solid fa-rotate"></i>  Loram Iporam</p>
                        <p><i class="fa-solid fa-rotate"></i>  Loram Iporam</p>
                        <p><i class="fa-solid fa-rotate"></i>  Loram Iporam</p>
                    </aside>

                    <div>
                        <section>
                            <p className='home-p'>Home</p>

                            <div className="form-1">
                                <p>Filter Selection</p>
                                <div className="input">
                                    <div className="input1">
                                        <label htmlFor="">Loram Iporam</label>
                                        <input list="list1" name="list1" placeholder='Loram Iporam' />
                                        <datalist id="list1">
                                            <option value="1" />
                                            <option value="2" />

                                        </datalist>

                                    </div>
                                    <div className="input2">
                                        <label htmlFor="">Loram Iporam</label>
                                        <input list="list1" name="list1" placeholder='Loram Iporam' />
                                        <datalist id="list1">
                                            <option value="1" />
                                            <option value="2" />

                                        </datalist>
                                    </div>
                                    <button className='input-btn' type="submit"><i class="fa-solid fa-play"></i></button>
                                </div>

                            </div>

                            <div className="table">
                                <p>Loram Iporam</p>
                                <div className='tbl-search'>
                                    <div>
                                        <label htmlFor="">Show record   </label>
                                        <input list='pages' name='pages' className='inpit-list' placeholder='1' />
                                        <datalist id='pages'>
                                            <option value="1"></option>
                                            <option value="2"></option>
                                            <option value="3"></option>
                                            <option value="4"></option>
                                            <option value="5"></option>
                                            <option value="6"></option>
                                            <option value="7"></option>
                                        </datalist>
                                    </div>
                                    <div className='search'>
                                        <input type="search" name="" id="" />
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </div>
                                <table>
                                    <tr>
                                        <th>Loram Iporam</th>
                                        <th>Loram Iporam</th>
                                        <th>Loram Iporam</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>

                                    <tr>
                                        <td>Loram Iporam</td>
                                        <td>Development</td>
                                        <td>7</td>
                                        <td className="on">ON</td>
                                        <td><i class="fa-solid fa-file"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Loram Iporam</td>
                                        <td>abc_xyz</td>
                                        <td>2</td>
                                        <td className='off'>OFF</td>
                                        <td><i class="fa-solid fa-file"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Loram Iporam</td>
                                        <td>abc_xyz</td>
                                        <td>2</td>
                                        <td className="on">ON</td>
                                        <td><i class="fa-solid fa-file"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Loram Iporam</td>
                                        <td>abc_xyz</td>
                                        <td>1</td>
                                        <td className='off'>OFF</td>
                                        <td><i class="fa-solid fa-file"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Loram Iporam</td>
                                        <td>abc_xyz</td>
                                        <td>2</td>
                                        <td className="on">ON</td>
                                        <td><i class="fa-solid fa-file"></i></td>
                                    </tr>
                                    <tr>
                                        <td>Loram Iporam</td>
                                        <td>abc_xyz</td>
                                        <td>1</td>
                                        <td className="on">ON</td>
                                        <td><i class="fa-solid fa-file"></i></td>
                                    </tr>
                                </table>

                            </div>
                            <div className='footer'>
                                    <p>Showing 1 to 4 of 4 entries</p>
                                    <div className="ftr-btn">
                                        <button className='previous'>Previous</button>
                                        <button className='currant'>1</button>
                                        <button className='next'>Next</button>
                                    </div>
                                </div>
                        </section>
                    </div>



                </div>


            </div>
        </>
    )
}

export default Dashboard1