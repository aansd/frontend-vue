<template>
  <div class="position-relative">
    <div class="row">
      <div class="image-1 col-md-6 position-relative mb-3">
        <!-- Button dan H2 di atas gambar kiri atas -->
        <div class="container">
          <button class="btn-1 btn btn-info rounded-pill position-absolute mx-4 mb-2 bg-transparent">
          Our Collection
        </button>
        <h2 class="text-img-1 position-absolute">Modern <br/> Furniture</h2>
        <!-- Gambar utama -->
        <img :src="image" alt="" class="image-1 img-fluid">
        
        <!-- Gambar button di kanan bawah -->
        <img :src="button" class="img-2 position-absolute bottom-0 end-0 mb-3 me-4" alt="button">
      </div>
      </div>

      
      <div class="iamge-2 col-md-6 d-flex flex-column">
        <div class="container">
          <button class="btn-2 btn btn-info rounded-pill position-absolute mt-3 ms-3 bg-transparent">
            New Offer
          </button>
          
          <h2  class="text-img-1-2 position-absolute top-0 start-0 mt-5 ms-4">
            Outdoor <br /> Seating
          </h2>

        
          <h2 class="text-img-2 position-absolute bottom-0 start-0 mb-5 ms-4">
            50% <br/> Discount
          </h2>

       
          <img :src="image2" alt="" class="img-fluid mb-3">

          <!-- Gambar button di kanan bawah -->
            <img :src="button2" class="img-3 position-absolute bottom-0 end-0 mx-4 mb-4" alt="button">
        </div>
        <div class="container position-relative">
  <!-- Button "Best Seller" di pojok kanan atas -->
  <button class="btn-3 btn btn-info bg-transparent rounded-pill position-absolute top-0 end-0 mt-3 me-4">
    Best Seller
  </button>

  <h2 align="right" class="text-img-1-3 position-absolute top-0 end-0 mt-5 me-4 ">
    Comfort <br /> Zone Chair
  </h2>

 
  <p align="right" class="text-img-3 position-absolute top-0 end-0 mt-5 me-4">
    Unleash your creativity <br/> with our versatile furniture option.
  </p>

  <!-- Gambar utama -->
  <img :src="image3" alt="" class="img-fluid">

  <!-- Gambar button di kanan bawah -->
  <img :src="button2" class="img-3 position-absolute bottom-0 end-0 mx-4 mb-2" alt="button">
</div>

        
        
      </div>
    </div>
  </div>
</template>

<script>
import image from '../../assets/img/Image.png'
import image2 from '../../assets/img/Image2.png'
import image3 from '../../assets/img/Image3.png'
import button from '../../assets/img/Button.png'
import button2 from '../../assets/img/Button2.png'
export default {
  name: 'AppPage2',
  data() {
    return {
      image,
      image2,
      image3,
      button,
      button2
    }
  },
}
</script>

<style>

.container {
  position: relative;
}

.position-absolute {
  z-index: 1;
}

.btn-info {
  margin-top: 20px;
}

.btn-2, .btn-1, .btn-3{
  font-size: 13px;
}

.text-img-1 {
  margin-top: 60px;
  font-size: 45px;
  line-height: 50px;
  margin-left: 20px;
}

.text-img-2 {
  font-size: 32px;
}

.text-img-1-2 {
  font-size: 40px;
}

.text-img-1-3 {
  font-size: 45px;
}

.text-img-3 {
  font-size: 15px;
  margin-top: 150px !important;
  color: #565454;
}

@media (max-width: 768px) {
  .text-img-1-3 {
    margin-top: 55px !important;
    font-size: 30px;
  }

  .text-img-1-2 {
    font-size: 25px;
  }

  .text-img-1 {
    font-size: 40px;
  }

  .text-img-2 {
    font-size: 20px;
  }
 
  .text-img-3 {
    margin-top: 130px !important;
  }

  .img-2 {
    width: 75px;
  }

  .img-3 {
    width: 50px;
  }

  .btn-2, .btn-1, .btn-3{
  font-size: 10px;
}
  
}
</style>
