import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from "./img/img1.jpg"
import img2 from "./img/img2.jpg"
import '../../styles/BootstrapCarousel.css';
import SearchBar from "./SearchBar";

export class BootstrapCarousel extends Component {
  render() {
    return (
        <div>
          <div className='container-fluid'>
            <div className="row title" style={{marginBottom:"20px"}} >
            </div>
          </div>
          <div className='container-fluid' >
              <SearchBar/>
            <Carousel>
              <Carousel.Item style={{'height':"600px"}} >
                <div className='bg-image' >
                    <img src={img1} style={{'height':"600px",backgroundColor: 'rgba(255, 100, 100, 0.90)'}}
                         className="d-block align-items-center w-100"
                         alt="First Demo"  />
                      <div className='mask'
                          style={{
                          backgroundColor: 'rgba(255, 100, 100, 0.90)',
                          padding: '2px 10px',
                          color: 'white',
                          borderRadius: 3,
                      }}/>
                </div>
                  <Carousel.Caption>
                    <h3>First Slide</h3>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{'height':"600px"}}>
                <img style={{'height': "600px"}}
                     className="d-block align-items-center w-80"
                     src={img2}
                     alt="Second Demo"
                />
                  <Carousel.Caption>
                    <h3>Second Slide</h3>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{'height':"600px"}}>
                <img style={{'height': "600px"}}
                     className="d-block align-items-center w-80"
                     src="https://www.engineering.utoronto.ca/files/2020/08/UTEng_Virtual_BG_Fleming.jpg"
                     alt="Third Demo"
                />
                  <Carousel.Caption>
                    <h3>Third Slide</h3>
                  </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
    )
  }
}
export default BootstrapCarousel