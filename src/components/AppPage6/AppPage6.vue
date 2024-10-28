<template>
    <div class="mt-5 position-relative">
      <button
        class="btn-6-top btn btn-info bg-transparent rounded-pill position-absolute mt-3"
      >
      Our Collection
      </button>
      <h2 class="text-img-6 position-absolute mt-5">
        Transform Your Home <br/> with Our Stylish <br/> Furniture!!!
      </h2>
      <p class="p-img-6 position-absolute mt-5">
        Shop Now and Discover Endless Possibilities for <br/> Your Living Space
      </p>
      <button type="button" class="btn-6-bottom btn btn-primary rounded-5 position-absolute mt-5">
          Shop Now
      </button>
      <img :src="image8" alt="Furniture Image" class="w-100" />
    </div>
  </template>
  
  <script>
  import image8 from "../../assets/img/Image8.png";
  export default {
    name: "AppPage6",
    data() {
      return {
        image8,
      };
    },
  };
  </script>
  
  <style>
  
  .btn-6-top,
  .text-img-6,
  .p-img-6,
  .btn-6-bottom {
    left: 100px;
  }
  
  .btn-6-top {
    top: 60px;
  }

  .text-img-6 {
    top: 80px;
    font-size:40px;
    color: #333;
  }
  
  .p-img-6 {
    top: 250px;
    font-size: 16px;
    color: #7D7D7D;
  }
  
  .btn-6-bottom {
    top: 350px;
    
  }

  @media (max-width: 768px) {
    .btn-6-top {
        font-size: 10px;
        top: 10px;
        left: 20px;
    }

    .text-img-6 {
        font-size: 20px;
        top: 15px;
        left: 20px;
    }

    .p-img-6 {
        font-size: 10px;
        top: 90px;
        left: 20px;
    }

    .btn-6-bottom {
        font-size: 10px;
        top: 130px;
        left: 20px;
    }
  }
  </style>
  