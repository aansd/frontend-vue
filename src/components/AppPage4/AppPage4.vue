<template>
    <div class="page d-flex justify-content-center align-items-center align-items-sm-start justify-content-sm-start mt-5">
      <div class="cart-page card mb-3 bg-transparent border-0 mx-auto">
        <div class="row g-0">
          <div class="col-md-4 text-center text-md-start me-5">
            <img :src="image4" class="img-fluid rounded-start img-1" alt="About Us Image">
          </div>
          <div class="col-md-6 mx-lg-5 mt-lg-5">
            <div class="card-body text-center text-md-start">
              <button class="btn-cart btn btn-info bg-transparent rounded-pill mb-2">About Us</button>
              <h5 class="card-title cart-text-1">What Makes Us <br /> Different from Others</h5>
              <p class="card-text cart-text-2">Unleash your creativity with our versatile furniture options. Experience comfort and quality with our furniture.</p>
              <p class="card-text cart-text-2">Unleash your creativity with our versatile furniture options. Experience comfort and quality with our furniture.</p>
              <button class="btn-cart-1 btn btn-dark rounded-pill">Know More About Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import image4 from '../../assets/img/Image4.png'
  export default {
    name: 'AppPage4',
    data() {
      return {
        image4
      }
    }
  }
  </script>
  
  <style>
  .page {
    background-color: #F6F6F6;
    width: 100%;
    max-width: 1110px;
    height: 613px;
    border-radius: 20px;
    padding: 20px;
  }
  
  .cart-page {
    max-width: 1050px;
  }
  
  .cart-text-1 {
    font-size: 32px;
  }
  
  .img-1 {
    width: 396px;
    height: 528px;
  }
  
  @media (max-width: 768px) {
    .page {
      padding-top: 0;
 
    }
  
    .cart-page {
      align-items: flex-start;
    }
  
    .cart-text-1 {
      font-size: 13px;
    }
  
    .cart-text-2 {
      font-size: 9px;
    }
  
    .img-1 {
      max-width: 200px;
      height: 250px;
    }
  
    .btn-cart {
      font-size: 12px;
    }

    .btn-cart-1 {
        font-size: 12px;
    }
  }
  </style>
  