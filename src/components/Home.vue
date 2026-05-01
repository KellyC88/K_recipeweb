<template>
  <div class="Home">
    <div class="first_layer">
      <div class="nav_bar">
        <!-- first layer -->
        <img class="logo" src="@/assets/wabisabi_logo.png" alt="">
       <div class="brand">
        <router-link class="brand_name" :to="{ name: 'Home' }">Wabisabi</router-link>
       </div>
      <div class="nav_list">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Oatmeal</a></li>
            <li><a class="dropdown-item" href="#">Breakfast</a></li>
            <li><a class="dropdown-item" href="#">High Protein</a></li>
            <li><a class="dropdown-item" href="#">Sourdough</a></li>
          </ul>
        </div>
        <router-link class="list" :to="{ name: 'Subscribe' }">Subscribe</router-link>
        <a class="list" href="#subscribe">Subscribe</a>
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
    <div class="brand_concept">
      <h4 class="concept">Brand concept / Brand concept / Brand concept/Brand concept/ Brand concept/</h4>
      <img class="brand_bgimg" src="@/assets/plant.jpg" alt="">
    </div>
    
  </div>
  <div class="product_set1" ref="productSet1">
    <h3 class="topic">Most Popular</h3>
    <div class="box">
      <router-link class="img_container" :to="{name:'ProductDetails', params:{id:1}}">
        <div class="img_overlay">
          <div class="img_text">OATMEAL</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/product8.JPG"></a>
      </router-link>
      <router-link class="img_container" :to="{name:'ProductDetails', params:{id:2}}">
        <div class="img_overlay">
          <div class="img_text">SOURDOUGH</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/product8.JPG"></a>
      </router-link>
      <router-link class="img_container"  :to="{name:'ProductDetails', params:{id:3}}">
        <div class="img_overlay"> 
          <div class="img_text">SALAD</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/product8.JPG"></a>
      </router-link>
      <router-link class="img_container" :to="{name:'ProductDetails', params:{id:4}}">
        <div class="img_overlay">
          <div class="img_text">COOKIE</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/product8.JPG"></a>
      </router-link>
    </div>
  </div>
  <div class="intro_box">
    <h4 class="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, similique pariatur laboriosam laudantium soluta porro alias veritatis fugit? Dolorem aliquam nihil ullam, nisi quis eveniet tempore voluptas veniam ratione quas.</h4>
  </div>
  <div class="product_set2" ref="productSet2">
    <h3 class="topic">Latest Update</h3>
    <div class="box">
      <div class="img_container">
        <div class="img_overlay">
          <div class="img_text">CAKE</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/product8.JPG"></a>
      </div>
      <div class="img_container">
        <div class="img_overlay">
          <div class="img_text">NAME</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/product8.JPG"></a>
      </div><div class="img_container">
        <div class="img_overlay">
          <div class="img_text">NAME</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/product8.JPG"></a>
      </div>
      <div class="img_container">
        <div class="img_overlay">
          <div class="img_text">NAME</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/product8.JPG"></a>
      </div>
    </div>
  </div>
  <div class="product_set3" ref="productSet3">
    <h3 class="topic">Most Popular</h3>
    <div class="box">
      <div class="img_container">
        <div class="img_overlay">
          <div class="img_text">CAKE</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/product8.JPG"></a>
      </div>
      <div class="img_container">
        <div class="img_overlay">
          <div class="img_text">NAME</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/product8.JPG"></a>
      </div><div class="img_container">
        <div class="img_overlay">
          <div class="img_text">NAME</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/product8.JPG"></a>
      </div>
      <div class="img_container">
        <div class="img_overlay">
          <div class="img_text">NAME</div>
        </div>
        <a href="#!" ><img class="img" src="@/assets/product8.JPG"></a>
      </div>
    </div>
  </div>
  <div class="footer">
   <h3 class="footer_info">
    <span class="info1" >Tel : +886 912345678</span>
    <span class="info2" >Email : wabisabi26@gmail.com</span>
    <span class="footer_icon">
      <i class="fa-brands fa-instagram"></i>
    </span>
   </h3> 
  
  </div>

</div>
</template>
 
  

<script>
export default {
  name: 'Home',
  data() {
    return {
      products: [
        { id: 1, name: 'oatmeal' },
        { id: 2, name: 'sourdough' },
        { id: 3, name: 'salad' },
        { id: 4, name: 'cookie' },
      ],
      dropdownOpen: false,
      selectedCategory: null,
      categories: [
        'Oatmeal',
        'Breakfast',
        'High Protein',
        'Dessert',
        'Lunch',
        'Dinner',
      ],
    };
  },
  mounted() {
    this.setupIntersectionObserver();
  },
  methods: {
    setupIntersectionObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const containers = entry.target.querySelectorAll('.img_container');
            containers.forEach((container, index) => {
              setTimeout(() => {
                container.classList.add('animate');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.4,   
      });

      if (this.$refs.productSet1) observer.observe(this.$refs.productSet1);
      if (this.$refs.productSet2) observer.observe(this.$refs.productSet2);
      if (this.$refs.productSet3) observer.observe(this.$refs.productSet3);
    },
    selectCategory(cat) {
      this.selectedCategory = cat;
      this.dropdownOpen = false;
    },
    closeDropdown() {
      this.dropdownOpen = false;
    },
  },
  directives: {
    'click-outside': {
      mounted(el, binding) {
        el._clickOutside = (e) => {
          if (!el.contains(e.target)) binding.value();
        };
        document.addEventListener('click', el._clickOutside);
      },
      unmounted(el) {
        document.removeEventListener('click', el._clickOutside);
      },
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Momo+Signature&display=swap');
$bonewhite: #f4efe6;
$warmwhite: #e7dfcf;
$warmbeige: #c4b39a;
$sand: #cec1ab;
$olivebrown:#92816c;
$earthbrown: #8a7356;
$mocha: #5a4d41;
$espresso: #5b4c3a;
$charcoal: #191a1e;
$winered: #49110b;
</style>
