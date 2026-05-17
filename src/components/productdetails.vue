<template>
  <div class="nav_bar">
        <!-- first layer -->
        <img class="logo" src="@/assets/wabisabi_logo.png" alt="">
        <div class="brand">
          <router-link class="brand_name" :to="{ name: 'Home' }">Wabisabi</router-link>
        </div>
        <div class="nav_list">
          <div class="dropdown" :class="{ open: dropdownOpen }" v-click-outside="closeDropdown">
            <button class="dropdown-toggle" @click="dropdownOpen = !dropdownOpen">Category
              <span class="caret" :class="{ open: dropdownOpen }">&#9662;</span>
            </button>
              <ul class="dropdown-menu">
                <li v-for="cat in categories" :key="cat">
                  <a href="#" @click.prevent="selectCategory(cat)">{{ cat }}</a>
                </li>
              </ul>
          </div>
        <router-link class="list" :to="{ name: 'Subscribe' }">Subscribe</router-link>
        <a class="list" href="#contact">Contact</a>
        <router-link class="list" :to="{ name: 'LogIn' }">LogIn</router-link>
      </div>
        <div class="searchbox">
          <input class="search_input" type="text" placeholder="search" aria-label="Search_input">
          <button class="search_btn" aria-label="SS">
            <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16a6.471 6.471 0 004.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM10 15.5A5.5 5.5 0 1115.5 10 5.506 5.506 0 0110 15.5z"/>
            </svg>
          </button>
        </div>
      </div>
  <div v-if="product">
   <h4 class="product_name" >{{ product.name }}</h4>
  </div>
  <div class="product_img"><img src="" alt=""></div>
  
</template>

<script>
 export default {
  name: 'ProductDetails',
  data() {
    return {
      products:[
        {id:1, name:'oatmeal'},
        {id:2, name:'sourdough'},
        {id:3, name:'salad'},
        {id:4, name:'cookie'},
      ],
      product: null
    }
  },
  created() {
    const id = parseInt(this.$route.params.id)
    this.product = this.products.find(p => p.id === id)
  }
 }
</script>