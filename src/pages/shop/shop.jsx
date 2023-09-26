import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Coverimg from "../../pics/171EF3FBE3FA5F740ED580FE80_1623332858998.webp";
import "../shop/shop.css";
import Cocoa from "../../pics/cocoa-thumbnail.jpg";
import Filling from "../../pics/chocolate-fillings-thumbnail.jpg";
import Chocolateshells from "../../pics/chocoalte-shells-thumbnail.jpg";
import Chocolateingredients from "../../pics/chocolate-ingredients-thumbnail.jpg";
import Foodcoloring from "../../pics/food-colors-thumbnail.jpg";
import Dryfruitsandnuts from "../../pics/dryfruits-thumb.jpg";
import Frozenfruitandpuree from "../../pics/frozen-fruit-thumb.jpg";
import Honey from "../../pics/honey-thumbnail.jpg";
import Aboutimg from "../../pics/86D632066B4238B9E7A8E9A72B_1623334883673.webp";
import Location from "../../pics/28600BEC7A7BC15B06FAE1A608_1623407288970.webp"
import Email from "../../pics/D41B3F0F588690BE8FC1EEE897_1623407282041.png"
import Call from "../../pics/F7EDECDB2D3EF3738CF7B9DCA7_1623407296291.webp"
import Time from "../../pics/EBAB0B51E54EA557D8F06D348C_1623407303659.webp"

export const Shop = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const sliderNav = (manual) => {
        setActiveIndex(manual);
    }

    const [userData, setUserData] = useState();

    const navigate = useNavigate();
    const callHomePage = async () => {
        try {
            const res = await axios.post('/', {
                token: localStorage.getItem('token')
            });

            setUserData(res.data);
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;
            }

        }
        catch (err) {
            console.log(err);
            navigate("/login");
        }
    }

    useEffect(() => {
        callHomePage();
    }, [])

    return (
        <div>
            <section className="shoppage1">
                <img src={Coverimg} className="coverimg"></img>
                <div className="shoptxt">
                    <h1 className="shoptxt1">PRODUCTS</h1>
                    <h2 className="shoptxt2">
                        ONLINE WHOLESALE CAKE SUPPLY STORE IN INDIA
                    </h2>
                    <h6 className="shoptxt3">
                        Choose from dozens of different cake supply from trusted brands and
                        sellers to make sure you can keep producing your most popular baked
                        goods day after day. Offering thousands of products from the sellers
                        that have earned your trust, you are sure to find the ri ght
                        products for your business, from simple bakery ingredients to
                        full-body mixers. You can find even more products to maximize the
                        efficiency of your bakery with our huge selection of couverture,
                        fruit fillings, fondant moulds, and bakery boxes. If you are
                        wondering where to cake supply near you, we are the largest online
                        cake supply store in India.
                    </h6>
                </div>
            </section>
            <section className="categories" id="categories">
                <div className="categories">
                    <h1 className="shoptxt4">CHOCOLATES</h1>
                    <div className="shopt1">
                        <div>
                            <Link to="/cocoa"><img src={Cocoa}></img>
                                <h4>COCOA</h4>
                            </Link>
                        </div>
                        <div>
                            <Link to="/filling">
                                <img src={Filling}></img>
                                <h4>FILLING</h4>
                            </Link>
                        </div>
                        <div>
                            <Link to="/chocolateshells">
                                <img src={Chocolateshells}></img>
                                <h4>CHOCOLATE SHELLS</h4>
                            </Link>
                        </div>
                        <div>
                            <Link to="/chocolateingredients">
                                <img src={Chocolateingredients} width="285px"></img>
                                <h4>CHOCOLATE INGREDIENTS</h4>
                            </Link>
                        </div>
                    </div>
                    <h1 className="shoptxt4">INGREDIENTS</h1>
                    <div className="shopt1">
                        <div>
                            <Link to="/foodcoloring">
                                <img src={Foodcoloring}></img>
                                <h4>FOOD COLORING</h4>
                            </Link>
                        </div>
                        <div>
                            <Link to="/dryfruitsandnuts">
                                <img src={Dryfruitsandnuts}></img>
                                <h4>DRY FRUIT & NUTS</h4>
                            </Link>
                        </div>
                        <div>
                            <Link to="/frozenfruitandpuree">
                                <img src={Frozenfruitandpuree}></img>
                                <h4>FROZEN FRUIT & PUREE</h4>
                            </Link>
                        </div>
                        <div>
                            <Link to="/honey">
                                <img src={Honey}></img>
                                <h4>HONEY</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="aboutus" id="aboutus">
                    <div className="shoptxt5">
                        <div className="shoptxt6">
                            <h1>About Us</h1>
                        </div>
                        <div className="shoptxt7">
                            <h2>
                                We, Royal Foods at Malad West, Mumbai, Maharashtra, is home to a
                                wide range of bakery ingredients, moulds, bakery goods, cakes,
                                chocolates and confectioneries that cater to the diverse taste
                                buds of every patron. All of our baked goods are made using
                                unique recipes that will leave a memorable aftertaste in your
                                mouth. And as quality goes hand in hand with the taste, we
                                believe in delivering the best quality products to our
                                customers. Our main and primary motto is to provide customer
                                satisfaction to our customers. Contact us for best deals!
                            </h2>
                        </div>
                    </div>
                    <div className="aboutimg">
                        <img src={Aboutimg}></img>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h1 className="shoptxt4">CONTACT US</h1>
                    <div className="cus">
                        <div>
                            <div className="cusimg"><img src={Location} width="40px"></img></div>
                            <div className="custxt1"><h2>Our Office Address</h2></div>
                            <div className="custxt2"><h3>Malad West, Mumbai, Maharashtra 400064</h3></div>
                        </div>
                        <div>
                            <div className="cusimg"><img src={Email} width="40px"></img></div>
                            <div className="custxt1"><h2>General Enquiries</h2></div>
                            <div className="custxt2"><h3>sugarart@gmail.com</h3></div>
                        </div>
                        <div>
                            <div className="cusimg"><img src={Call} width="40px"></img></div>
                            <div className="custxt1"><h2>Call Us</h2></div>
                            <div className="custxt2"><h3>+91-702869203</h3></div>
                        </div>
                        <div>
                            <div className="cusimg"><img src={Time} width="40px"></img></div>
                            <div className="custxt1"><h2>Our Timings</h2></div>
                            <div className="custxt2"><h3>Mon - Sun : 09:00 AM - 09:00 PM</h3></div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="footer">
                    <h1 className="shoptxt8">© copyrights 2023 Jatvik All Rights Reserved. visit jatviksart.com</h1>
                </div>

            </section>
        </div >
    );
};