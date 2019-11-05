import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React from "react";
class Carousel extends React.Component {
  constructor() {
super()
  }

render() {
var settings = {
            arrows: true,
            dots: true,
            autoplay:true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            };

            return (

<div id="galeria">
                        <Slider {...settings}>
                            <div>
                                <div className="columnaizq">
                                    <div className="ciudad">
                                        <img src={require ('../img/carousel/barcelona.jpg')} width="200px"/>
                                        <h3>Barcelona</h3>

                                    </div>
                                    <div className="ciudad">
                                        <img src={require ('../img/carousel/amsterdam.jpg')} width="200px"/>

                                        <h3>Amsterdam</h3>
                                    </div>
                                </div>
                                <div className="columnader">
                                    <div className="ciudad">
                                        <img src={require ('../img/carousel/new-york.jpg')} width="200px"/>

                                        <h3>New York</h3>
                                    </div>
                                    <div className="ciudad">
                                        <img src={require ('../img/carousel/amsterdam.jpg')} width="200px"/>

                                        <h3>Paris</h3>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="columnaizq">
                                    <div className="ciudad">
                                        <img src={require ('../img/carousel/buenos-aires.jpg')} width="200px"/>

                                        <h3>Buenos Aires</h3>
                                    </div>
                                    <div className="ciudad">
                                        <img src={require ('../img/carousel/espana.jpg')} width="200px"/>

                                        <h3>Tokyo</h3>
                                    </div>
                                </div>
                                <div className="columnader">
                                    <div className="ciudad">
                                        <img src={require ('../img/carousel/puerto-rico.jpg')} width="200px"/>

                                        <h3>Moscow</h3>
                                    </div>
                                    <div className="ciudad">
                                        <img src={require ('../img/carousel/sao-pablo.jpg')} width="200px"/>

                                        <h3>Sofia</h3>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="columnaizq">
                                    <div className="ciudad">
                                        <img src={require ('../img/carousel/berlin.jpg')} width="200px"/>

                                        <h3>Liverpool</h3>
                                    </div>
                                    <div className="ciudad">
                                        <img src={require ('../img/carousel/caracas.jpg')} width="200px"/>

                                        <h3>Caracas</h3>
                                    </div>
                                </div>
                                <div className="columnader">
                                    <div className="ciudad">
                                        <img src={require ('../img/carousel/cancun.jpg')} width="200px"/>

                                        <h3>Madrid</h3>
                                    </div>
                                    <div className="ciudad">
                                        <img src={require ('../img/carousel/texas.jpg')} width="200px"/>

                                        <h3>Sydney</h3>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>


                    );
                    }
}
export default Carousel;
