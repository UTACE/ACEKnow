import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from "./img/img1.jpg"
import img2 from "./img/img2.jpg"
import '../../styles/BootstrapCarousel.css';
export class BootstrapCarousel extends Component {
  render() {
    return (
        <div>
          <div className='container-fluid'>
            <div className="row title" style={{marginBottom:"20px"}} >
              {/*<div class="col-sm-12 btn btn-warning">*/}
              {/*How To Use Bootstrap Carousel In ReactJS*/}
              {/*</div>*/}
            </div>
          </div>
          <div className='container-fluid' >
            <Carousel>
              <Carousel.Item style={{'height':"600px"}} >
                <img src={img1} style={{'height':"600px"}}
                     className="d-block align-items-center w-80"
                     alt="First slide"  />
                  <Carousel.Caption>
                    <h3>First Demo</h3>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{'height':"600px"}}>
                <img style={{'height': "600px"}}
                     className="d-block align-items-center w-80"
                     src={img2}
                     alt="Second slide"
                />
                  <Carousel.Caption>
                    <h3>Second Demo</h3>
                  </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

    )
  }
}
export default BootstrapCarousel