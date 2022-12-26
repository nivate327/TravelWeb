import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const Addlisting = () => {

    const listArr =
        [
            {
                img: "./img/indian.jpg",
                listtitle: "India",
                listtext: `700/D, Kings road, Green lane, 
             85/ India`,
                ph: "9307194158",
                email: "contact@gmail.com"
            },
            {
                img: "./img/jp.jpg",
                listtitle: "Japan",
                listtext: `700/D, Kings road, Green lane, 
             85/ Japan`,
                ph: "9307194158",
                email: "contact@gmail.com"
            },
            {
                img: "./img/sing.jpg",
                listtitle: "Singapore",
                listtext: `700/D, Kings road, Green lane, 
             85/ Singpore`,
                ph: "9307194158",
                email: "contact@gmail.com"
            }
        ]

    return (
        <>
            <div className="listingadd">
                <Navbar />

                <div className="catcenter">
                    <h2 className="catHead"> LISTING </h2>
                </div>
            </div>

            <div className="listMain">
                <div className="describ">
                    <h3>Description</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or rannjdomised words
                        which don't look even slightly believable. If you are going to use a passage of fhorem Ipvbsum, you need to orem Ipsum available, but the ma be sure there isvgnn't anything embarrassing.

                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                        by injected humour, or rannjdomised words which don't look even slightly believable. If you are going to use a passage of fhorem Ipvbsum.</p>
                </div>

                <div className="container-fluid map">
                    <h3 className='l'>Location</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7540.361484596635!2d72.
                    86103113651556!3d19.09972523324832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be
                     7c8446b5170f9%3A0x9429c1c24c4c7a1f!2sSahar%20Village%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra
                      %20400099!5e0!3m2!1sen!2sin!4v1656585253453!5m2!1sen!2sin" width="100%" height="350" style={{ border: 0 }}
                        allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>

                
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-lg-md-12 col-sm-12 col-12">
                        <div className="container">
                            <div className="row">
                                {
                                    listArr.map((elem, index) => {
                                        let { img, listtitle, listtext, ph, email } = elem;

                                        return (
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 addCart" key={index}>
                                                <div className="card Cardlist">
                                                    <img src={img} className="card-img-top" alt="..." />
                                                    <button className='btn open'>Open</button>

                                                    <div className="card-body listBody">
                                                        <h5 className="card-title listTitle">{listtitle}</h5>
                                                        <p className="card-text listText">{listtext}</p>

                                                        <hr />
                                                        <div className="emailPhone">
                                                            <p className="ph">93+ {ph}</p>
                                                            <p className="em">{email}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer/>

        </>
    )
}

export default Addlisting;
