<template>
    <div>
      <div class="product container">
        <h1 class="pt-3 ps-3">Product List</h1>
        <!-- Kategori dan Pencarian -->
        <div class="mb-3 d-flex justify-content-between align-items-center">
          <div>
          </div>
          
          <form class="d-flex" role="search">
            <input
              class="form-control"
              type="search"
              v-model="searchQuery"
              placeholder="Search"
              aria-label="Search"
              style="max-width: 200px;"
            />
          </form>
        </div>
  
        <!-- Produk -->
        <div v-if="filteredProducts.length" class="row">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="col-md-3 mb-2"
          >
            <div class="card mb-5" style="width: 100%;">
              <div class="card-img-container">
                <img :src="product.photo" class="card-img-top" alt="Product Image" />
                <div class="card-overlay">
                  <div class="product-info">
                    <h5 class="card-title title-product">{{ product.name }}</h5>
                    <p class="card-text text-product-1">Stock: {{ product.stock || '0' }}</p>
                    <p class="card-text text-product-2"> {{ product.currency + product.price || '0' }}</p>
                  </div>
                  <div class="btn btn-danger">
                      <img :src="cart" class="position-absolute top-50 start-50 translate-middle"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p v-else class="text-center mt-5">Tidak ada produk yang ditemukan.</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import cart from '../../assets/img/Cart.png'
  export default {
    name: 'ProductView',
    data() {
      return {
        products: [], 
        categories: [], 
        selectedCategoryIds: [], 
        searchQuery: '', 
        cart
      }
    },
    mounted() {
      this.fetchProducts()
      this.fetchCategories() 
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get('https://sistemtoko.com/public/demo/product')
          console.log(response.data.aaData)
          this.products = response.data.aaData
        } catch (error) {
          console.error('Error fetching products:', error)
        }
      },
      async fetchCategories() {
        try {
          const response = await axios.get('https://sistemtoko.com/public/demo/cat')
          this.categories = response.data.aaData
        } catch (error) {
          console.error('Error fetching categories:', error)
        }
      },
      selectCategory(categoryId) {
        const index = this.selectedCategoryIds.indexOf(categoryId);
        if (index === -1) {
          // Jika kategori belum dipilih, tambahkan ke array
          this.selectedCategoryIds.push(categoryId);
        } else {
          // Jika kategori sudah dipilih, hapus dari array
          this.selectedCategoryIds.splice(index, 1);
        }
      }
    },
    computed: {
      // Produk yang difilter berdasarkan kategori dan pencarian
      filteredProducts() {
        let filtered = this.products
  
        // Filter berdasarkan kategori_id jika ada kategori yang dipilih
        if (this.selectedCategoryIds.length > 0) {
          filtered = filtered.filter(product => 
            this.selectedCategoryIds.includes(product.category_id)
          )
        }
  
        // Filter berdasarkan pencarian jika ada input
        if (this.searchQuery) {
          const query = this.searchQuery.toLowerCase()
          filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(query)
          )
        }
  
        return filtered
      }
    }
  }
  </script>
  
  <style scoped>
  .product {
    margin-top: 200px;
    background-color: #F6F6F6;
    border-radius: 20px;
    font-family: "Inter", sans-serif;
  }
  .card {
    margin: 10px auto;
    border: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }
  
  .card:hover {
    transform: scale(1.05); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
  }
  
  .card-img-container {
    position: relative;
    width: 100%;
    height: 400px;
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
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }
  
  .product-info {
    position: absolute;
    bottom: 10px;
    left: 10px;
    text-align: left;
  }
  
  .card-title {
    margin: 0;
    font-size: 1.2em;
    font-weight: bold;
  }
  
  .card-text {
    margin: 5px 0;
  }
  
  .btn-danger {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #947C33;
    border: #947C33;
  }
  
  .btn-danger:hover {
    background-color: #6e5c26; 
    border-color: #6e5c26; 
  }

  .title-product {
    font-size: 20px;
  }

  .text-product-1 {
    font-size: 15px;
  }

  .text-product-2 {
    font-size: 24px;
  }
  </style>
  