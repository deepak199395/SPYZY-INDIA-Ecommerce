import React from 'react'
import Layout from '../component/Layout/Layout'
import "../../src/styles/Mainhome.css"
const Mainhomepage = () => {
  return (
    
    <Layout title={"HOME"}>
    <div className='container-fluid row mt-3 Mhomepage'>
    <div id="carouselExampleCaptions" 
    className="carousel slide" data-bs-ride="carousel">
  <div 
  className="carousel-indicators">
    <button type="btn btn-primery"
     data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} 
    className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" 
    data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button"
     data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
 
  
  <div className=" container-fluid row mt-10 carousel-inner">
    <div className="carousel-item active">
      <img src="/images/spy9.jpeg" 
      className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <h1>SPYZY</h1>
        <p>PROTECT YOUR CAR BY INSTALLING SPYZY CAMERAS</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/spy7.jpeg"
       className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <h1>SPYZY</h1>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/spy6.jpeg" 
      className="ds-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <h1>SPYZY</h1>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
        
    <section classname="banner1_section background1 py-8">
    <div classname="container text-center">
      <div classname="row">
        <div classname="col-md-12">
          <h1 className='text-center'>TRENDDING PRODUCT OF SPYZY</h1>
\          
        </div>
      </div>
    </div>
  </section>

<div className="card-group  ">
  <div className="card">
    <img src="/images/spypen.png" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title ">BUTTON CAMERA</h5>
      <p className="card-text">BUTTON SPY CAMERA</p>
      <p className="card-text"><small className="text-muted">beyong your expetations</small></p>
    </div>
  </div>
  <div className="card">
    <img src="/images/spypen.png" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">PEN CAMERA</h5>
      <p className="card-text">PEN CAMERA</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="/images/button.png" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">PHOTO FRAME CAMERA</h5>
      <p className="card-text">SPY PHOTO FRAME</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

{/*BANNER SECTION 1*/}
  <section classname="banner1_section background1 py-8">
    <div classname="container text-center">
      <div classname="row">
        <div classname="col-md-12">
          <h1 className='text-center'>FREE SHIPPING</h1>
          <h1 className='text-center'>EASY RETURN</h1>
          <h1 className='text-center'>SECURE CHECKUP</h1>
          
        </div>
      </div>
    </div>
  </section>
  {/*BANNER SECTIONS 2 */}

  <section className="banner2_section text-center py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-6 text-center pt-5">
        <h3> your happy custimer review</h3>
        <p> Awesome product. I have been using this spring for many years.
         The quality of camera is best. But this product is the best so far.
          It's wifi connection is to fast. vedio rescoding timing is more
          
                  " surendra cholkar" </p>
      </div>
      <div className="col-md-6 text-center">
      
        <img src="images/spyzy.png" alt style={{height: 250}} />
      </div>
    </div>
  </div>
</section>

</Layout>

  )
}
export default Mainhomepage