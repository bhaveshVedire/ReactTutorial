import React from 'react'

function Main() {
    return (
  
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} className="active" />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
            <li data-target="#myCarousel" data-slide-to={3} />
            <li data-target="#myCarousel" data-slide-to={4} />
            <li data-target="#myCarousel" data-slide-to={5} />
            <li data-target="#myCarousel" data-slide-to={6} />
            <li data-target="#myCarousel" data-slide-to={7} />
          </ol>
          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className="item active">
              <img src="./images/i1.jpg"  alt='i1'/>
            </div>
            <div className="item">
              <img src="./images/i2.jpg" alt='i2'/>
            </div>
            <div className="item">
              <img src="./images/i3.jpg" alt='i3'/>
            </div>
            <div className="item">
              <img src="./images/i4.jpg" alt='i4'/>
            </div>
            <div className="item">
              <img src="./images/i5.jpg" alt='i5'/>
            </div>
            <div className="item">
              <img src="./images/i6.jpg" alt='i6'/>
            </div>
            <div className="item">
              <img src="./images/i7.jpg" alt='i7'/>
            </div>
            <div className="item">
              <img src="./images/i8.jpg" alt='i8'/>
            </div>
          </div>
          {/* Left and right controls */}
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      );
}

export default Main;