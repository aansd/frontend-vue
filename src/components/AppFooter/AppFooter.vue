<template>
  <div class="footer mt-5">
    <footer class="text-center text-lg-start text-white">
      <div class="container p-4 pb-0">
        <div class="row justify-content-center">
          <!-- Company Info -->
          <div class="col-6 col-md-2 col-lg-1 mx-1 mt-3">
            <h6 class=" mb-4 ">Company</h6>
            <p>About Us</p>
            <p>Gift Cards</p>
            <p>Careers</p>
            <p>Location</p>
          </div>

          <!-- Customer Section -->
          <div class="col-6 col-md-2 col-lg-1 me-1 mt-3">
            <h6 class=" mb-4 ">Customer</h6>
            <p>My Order</p>
            <p>My Account</p>
            <p>Track Order</p>
            <p>Report</p>
          </div>

          <!-- More Links -->
          <div class="col-6 col-md-2 col-lg-2 me-1 mt-3">
            <h6 class=" mb-4 ">More Links</h6>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Support</p>
          </div>

          <!-- Contact Section 1 -->
          <div class="col-6 col-md-4 col-lg-2 me-1 mt-3">
            <h6 class=" mb-4 ">Contact</h6>
            <p>Customer Service<br />Open until 8.00PM WIB</p>
            <p>Shopping Assistance<br />Open until 8.00PM WIB</p>
          </div>

          <!-- Newsletter -->
          <div class="col-12 col-md-6 col-lg-4 me-1 mt-3">
            <h6 class=" mb-4 ">Newsletter</h6>
            <p class="mb-2">Sign up to receive news, updates, and exclusive info via email</p>
            <form class="position-relative">
              <div class="position-relative">
                <label for="inputEmail2" class="visually-hidden">Email</label>
                <input
                  type="email"
                  class="input-footer form-control rounded-pill bg-black text-white"
                  id="inputEmail2"
                  placeholder="E-Mail"
                />
                <button
                  type="submit"
                  class="btn-footer btn btn-dark rounded-pill position-absolute end-0 top-50 translate-middle-y px-4 py-1"
                >
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr class="my-3 text-white" />

        <!-- Copyright Section -->
        <section class="p-3 pt-0">
  <div class="row justify-content-center align-items-center">
    <div class="col-md-7 text-center">
      <div class="p-3">
        <a class="text-white text-decoration-none" href="">Copyright © 2023 All rights reserved | website design by Larana</a>
      </div>
    </div>
  </div>
</section>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style>
.footer {
  background-color: #000;
  padding-top: 2rem;
  color: #fff;
  font-family: "Poppins", sans-serif;
}

.footer .container {
  max-width: 1440px;
}

.footer h6 {
  font-weight: bold;
}

.footer p {
  margin: 0;
  font-size: 14px;
}

.footer .btn-floating i {
  font-size: 1.2rem;
}

.input-footer {
  width: 100%;
  max-width: 100%;
}

.btn-footer {
  margin-right: 120px;
  background-color: #FFFFFF !important;
  color: #947C33 !important;
}

@media (max-width: 768px) {
  .input-footer {
    width: 320px !important;
  }
}

@media (min-width: 992px) {
  .input-footer {
    width: 300px !important;
  }
}

</style>
