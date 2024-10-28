<template>
    <div class="page-5 d-flex flex-lg-row flex-column align-items-center justify-content-between mt-5">
      <div class="card cart-5 border-0 mx-lg-3 mb-3 mb-lg-0">
        <img :src="image5" class="card-img-top cart-img mt-3" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title cart-text-5 mt-3">Unbeatable <br/> Selection</h5>
          <p class="card-text p-text-5 mt-3">
            Allows visitors to see all the available <br/> episodes and choose which
            ones <br/> they want to listen.
          </p>
        </div>
      </div>
      <div class="card cart-5 border-0 mx-lg-3 mb-3 mb-lg-0">
        <img :src="image6" class="card-img-top cart-img mt-3" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title cart-text-5 mt-3">Expert Customer <br/> Service</h5>
          <p class="card-text p-text-5 mt-3">
            Allows visitors to see all the available <br/> episodes and choose which
            ones <br/> they want to listen.
          </p>
        </div>
      </div>
      <div class="card cart-5 border-0 mx-lg-3 mb-3 mb-lg-0">
        <img :src="image7" class="card-img-top cart-img mt-3" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title cart-text-5 mt-3">Amazing Value <br/> Every Day</h5>
          <p class="card-text p-text-5 mt-3">
            Allows visitors to see all the available <br/> episodes and choose which
            ones <br/> they want to listen.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import image5 from "../../assets/img/Image5.png";
  import image6 from "../../assets/img/Image6.png";
  import image7 from "../../assets/img/Image7.png";
  export default {
    name: "AppPage5",
    data() {
      return {
        image5,
        image6,
        image7,
      };
    },
  };
  </script>
  
  <style>
  .page-5 {
    display: flex;
    width: 100%;
    max-width: 1109px;
  }
  
  .cart-5 {
    background-color: #f6f6f6;
    width: 349px;
    height: 455px;
    border-radius: 20px;
  }
  
  .cart-img {
    width: 308px;
    height: 179px;
    object-fit: cover;
    margin: auto;
  }
  
  .cart-text-5 {
    font-size: 32px;
  }
  
  .p-text-5 {
    font-size: 13px;
  }
  </style>
  