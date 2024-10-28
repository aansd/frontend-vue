<template>
    <div class="container-fluid position-relative page-3 mt-4">
      <div class="container-fluid position-relative">
        <h2 class="text-1 pt-3">Modern design for Any Budget</h2>
        <a href="/product" class="btn-1 btn btn-info rounded-pill bg-transparent position-absolute top-0 end-0 me-3 mt-3">
          View All
        </a>
      </div>
      <div class="container-fluid">
        <div v-if="filteredProducts.length" class="row justify-content-center">
          <div v-for="product in filteredProducts" :key="product.id" class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="card mt-4 cart">
              <div class="card-img-container">
                <img :src="product.photo" class="card-img-top" alt="Product Image" />
                <div class="card-overlay">
                  <div class="product-info">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text p-text-1 mb-0">Stock: {{ product.stock || '0' }}</p>
                    <p class="card-text text-2">{{ product.currency + product.price || '0' }}</p>
                  </div>
                  <div class="btn btn-danger">
                      <img :src="cart" class="position-absolute top-50 start-50 translate-middle"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import cart from '../../assets/img/Cart.png'
  export default {
    name: 'AppPage3',
    data() {
      return {
        products: [],
        filteredProducts: [],
        cart
      }
    },
    mounted() {
      this.getProducts()
    },
    methods: {
      async getProducts() {
        try {
          const response = await axios.get('https://sistemtoko.com/public/demo/product')
          this.products = response.data.aaData
          this.filteredProducts = this.products.slice(0, 6) // Hanya menampilkan 6 produk pertama
        } catch (error) {
          console.error("Error fetching products:", error)
        }
      }
    }
  }
  </script>
  
  <style>
  .page-3 {
    background-color: #F6F6F6;
    border-radius: 20px;
    width: 100%;
    max-width: 1110px;
    height: auto;
    padding-bottom: 20px;
  }
  

  
  .cart {
    margin: 10px auto;
    border: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    position: relative;
    width: 100%;
    max-width: 337px;
    height: 500px;
  }
  
  .cart:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .card-img-container {
    position: relative;
    width: 100%;
    height: 500px;
  }
  
  .card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  
  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    color: white;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
  }
  
  .product-info {
    position: relative;
    bottom: 20px;
    left: 10px;
    text-align: left;
  }
  
  .card-title {
    /* margin: 0; */
    font-size: 20px;
    font-family: "Inter", sans-serif;
  }
  
  .text-1 {
    font-size: 40px;
  }
  .p-text-1 {
    /* margin: 5px 0; */
    font-size: 15px;
    font-family: "Inter", sans-serif;
  }

  .text-2    {
    font-size: 32px;
  }

  .btn-1 {
    font-size: 13px;
  }
  
  .btn-danger {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 75px;
    height: 75px;
    border-radius: 20px;
    background-color: #947C33;
    border: #947C33;
  }
  
  .btn-danger:hover {
    background-color: #6e5c26;
    border-color: #6e5c26;
  }
  
  /* Media queries untuk responsif */
  @media (max-width: 992px) {
    .card {
      height: 450px;
    }
  }
  
  @media (max-width: 768px) {
    .text-1 {
      font-size: 1.8rem;
    }
  
    .card {
      height: 400px;
    }
  }
  
  @media (max-width: 576px) {
    .text-1 {
      font-size: 15px;
    }

    .btn-1 {
        font-size: 10px;
    }
  
    .card {
      height: 350px;
    }
  }
  </style>
  