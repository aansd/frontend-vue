<template>
  <nav class="navbar navbar-expand-lg bg-transparent navbar-lght mb-3">
    <div class="container">
      <!-- Logo dan Teks -->
      <a href="#" class="navbar-brand d-flex align-items-center">
        <img :src="logo" alt="Logo" class="logo-image" />
        <span class="brand-text">Larana</span>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu di Tengah dan Ikon di Kanan -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="nav-home navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Furniture</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img :src="people" alt="" height="25" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img :src="cart" alt="" height="20" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <button @click="openSearchModal" class="rounded-pill border bg-transparent">
                <img :src="search" alt="Search" height="20" />
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Modal for Search Results -->
    <div v-if="showModal" class="search-modal">
      <div class="modal-content">
        <button @click="closeSearchModal" class="close-btn">×</button>
        <h5>Search Products</h5>
        <form @submit.prevent="fetchProducts" class="d-flex mb-3">
          <input
            v-model="searchQuery"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div v-if="loading">Loading...</div>
        <div v-else-if="products.length">
          <div v-for="product in products" :key="product.id" class="product-item">
            <img :src="product.photo" alt="product.name" width="50" height="50" />
            <p>{{ product.name }}</p>
          </div>
        </div>
        <div v-else>No results found</div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';
import logo from '../../assets/img/Logo.png';
import search from '../../assets/img/Icon.png';
import people from '../../assets/img/people.png';
import cart from '../../assets/img/Cart.png';

export default {
  name: 'AppNavbar',
  data() {
    return {
      logo,
      search,
      people,
      cart,
      showModal: false,
      products: [],
      loading: false,
      searchQuery: '', // Menambahkan properti untuk menyimpan query pencarian
    };
  },
  methods: {
    openSearchModal() {
      this.showModal = true;
    },
    closeSearchModal() {
      this.showModal = false;
      this.products = []; // Clear products on close
      this.searchQuery = ''; // Clear search query on close
    },
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await axios.get('https://sistemtoko.com/public/demo/product', {
          params: { search: this.searchQuery }, // Mengirimkan query pencarian jika perlu
        });

        // Filter produk berdasarkan nama sesuai query pencarian
        this.products = response.data.aaData.filter(product =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );

      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  margin-top: -15px;
  width: 100%;
  height: 178px;
}

.logo-image {
  height: 178px;
  width: 178px;
  margin-right: 0;
}

.brand-text {
  font-size: 32px;
  margin-left: -30px;
  margin-top: -30px;
  font-family: "Alike Angular", serif;
}

.nav-home {
  gap: 1.5rem;
  margin-top: -21px;
}

.navbar-nav .nav-link {
  font-size: 1.25rem;
  color: #333;
  font-family: "Kantumruy Pro", sans-serif;
}

/* Modal Styles */
.search-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.product-item {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.product-item img {
  margin-right: 10px;
}
</style>
