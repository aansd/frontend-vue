<template>
  <div id="app">
    <AppNavbar class="navbar" />
    <header>
      <div class="header-content">
        <div class="header-text">
          <h1>Furnish your dream <br/> with our furniture!</h1>
          <p>Unleash your creativity with our versatile furniture options.<br/> Experience comfort and quality in our furniture.</p>
          <div>
            <button type="button" class="btn btn-primary rounded-5 me-2 px-4">Buy Now</button>
          <button type="button" class="btn btn-info rounded-5 px-4 mt-0">Explore</button>
          </div>
        </div>
        <img :src="background" alt="">
        <div class="information">
          <div class="container text-center information-text">
            <div class="row justify-content-md-center gap-5">
              <div class=" col col-lg-2 d-flex align-items-center info-item-left">
                <h2>975+</h2>
                <p>Furniture and Home Equipment</p>
              </div>
              <div class="col-md-auto d-flex align-items-center info-item-center">
                <h2>320+</h2>
                <p>Fresh Interior Design Theme</p>
              </div>
              <div class="col col-lg-2 d-flex align-items-center info-item-right">
                <h2>462+</h2>
                <p>Happy Client More Of This</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar/AppNavbar.vue'
import AppFooter from '../src/components/AppFooter/AppFooter.vue'
import background from '../src/assets/img/Background.png'

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  },
  data() {
    return {
      background
    }
  },
}
</script>

<style>
.navbar {
  position: relative;
  z-index: 2; 
}

header {
  position: relative;
  margin-top: -180px;
  height: 874px;
}

.header-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.header-text {
  position: absolute;
  top: 20%;
  left: 10%;
  z-index: 1;
  color: black;
  max-width: 600px;
  margin-top: 80px;
  margin-left: 30px;
  font-family: "Poppins", sans-serif;
}

.header-text h1 {
  font-size: 48px;
}

.header-text p {
  font-size: 1.3rem;
}

header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.btn-primary {
  background-color: #947C33 !important;
  border-color: #947C33 !important;
}

.btn-info {
  background-color: #f7f6f4 !important;
  border-color: #947C33 !important;
  color: #947C33 !important;
}

.information {
  position: absolute;
  color: #ffffff;
  background-color: #947C33;
  width: 1030px;
  height: 186px;
  top: 770px;
  left: 300px;
  border-radius: 30px;
}

.information-text {
  margin-top: 60px;
}

.information .info-item-left {
  text-align: left;
  width: 271px !important; /* Pastikan ini diterapkan */
}

.information .info-item-center {
  text-align: left;
  width: 247px !important;
}

.information .info-item-right {
  text-align: left;
  width: 242px !important;
}

.info-item-right h2 {
  font-size: 45px;
  margin-right: 10px;
}
.info-item-center h2 {
  font-size: 45px;
  margin-right: 10px;
}
.info-item-left h2 {
  font-size: 45px;
  margin-right: 10px;
}

@media (max-width: 768px) {
  .header-text {
    top: 10%;
    left: 5%;
    max-width: 90%;
  }

  .header-text h1 {
    font-size: 32px;
  }

  .header-text p {
    font-size: 1rem;
  }

  .information {
    width: 90%;
    max-width: 600px;
    height: auto;
    padding: 15px;
    top: auto;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  .information-text {
    margin-top: 20px;
  }

  .info-item-right h2 {
    font-size: 36px;
  }
  .info-item-center h2 {
    font-size: 36px;
  }
  .info-item-left h2 {
    font-size: 36px;
  }

  .btn-primary,
  .btn-info {
    font-size: 0.9rem;
    padding: 5px 10px;
  }
}

@media (max-width: 576px) {
  .header-text h1 {
    font-size: 24px;
  }

  .header-text p {
    font-size: 0.9rem;
  }

  .info-item h2 {
    font-size: 30px;
  }

  .btn-primary,
  .btn-info {
    font-size: 0.8rem;
    padding: 4px 8px;
  }

  .information-text .row {
    flex-direction: column;
  }

  .info-item-right {
    margin-bottom: 10px;
    text-align: center;
  }
  .info-item-center {
    margin-bottom: 10px;
    text-align: center;
  }
  .info-item-left {
    margin-bottom: 10px;
    text-align: center;
  }
}
</style>
