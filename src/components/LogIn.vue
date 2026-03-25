<template>
  <div class="Login_main_intro">
    <div class="img_container">
      <img class="Login_img" src="../assets/product8.JPG" alt="">
    </div>
   <div class="nav_bar">
        <!-- first layer -->
        <img class="logo" src="../assets/wabisabi_logo.png" alt="">
       <div class="brand">
        <router-link class="brand_name" :to="{ name: 'Home' }">Wabisabi</router-link>
       </div>
        <div class="nav_list">
        <a class="list" href="#category">Category</a>
        <router-link class="list" :to="{ name: 'Subscribe' }">Subscribe</router-link>
        <!-- <a class="list" href="#subscribe">Subscribe</a> -->
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
    <div class="Login_container">
      <div class="Login_title"><h2>LogIn</h2></div>
      <div class="Login_form_container">
        <h4 class="Login_word">Please enter your email and password</h4>
        <div class="data_box">
         <div class="Login_email_box">
            <input id="log_email" type="email" v-model="email" placeholder="email" required />
         </div>
        <div class="Login_password_box">
         <input id="log_password" type="password" v-model="password" placeholder="password" required minlength="6" />
        </div>
        </div>
        <div class="login_btn_box">
          <button class="login_btn">Log In</button>
        </div>
        <div class="signup">
          <h4 class="signup_word">Haven't Join Us?</h4>
          <a href="#!" class="signup_link">Join Here !</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'LogIn',
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style lang="scss">

$bonewhite: #f4efe6;
$warmbeige: #c4b39a;
$sand: #cec1ab;
$olivebrown:#92816c;
$earthbrown: #8a7356;
$mocha: #5a4d41;
$espresso: #5b4c3a;
$charcoal: #191a1e;
$winered: #49110b;


.Login_main_intro{
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100vh;
  // background-color: $bonewhite;
}

.img_container{
  width: 100%;
  height: 100%;
}
.Login_img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  }


.Login_container{
  position: absolute;
  width: 650px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  background-color: $olivebrown;
  border-radius: 25px;
  background: rgba(0,0,0,0.5);
  border: 1px solid $olivebrown;
  animation: slideUp 0.7s ease-in-out;
}
.Login_title{
  margin-bottom: 35px;
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%,0%);
  color: $bonewhite;
  font-family: "Momo Signature", cursive;
  font-weight: 400;
  letter-spacing: 1.5px;
}
.Login_form_container{
  width: 500px;
  height: 300px;
  // border: 1px solid $sand;
  position: relative;
  margin-top: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.Login_word{
    display: block;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: smaller;
    text-align: center;
    margin: 0px;
    padding-top: 20px;
    color: $bonewhite;
  }
.data_box{
  position: relative;
  width: 100%;
  height: 100px;
  margin-top: 40px;
  // border: 1px solid lightcoral;

.Login_email_box, .Login_password_box{
  position: relative;
  // border: 1px solid lightblue;
  width: 100%;
  text-align: center;
  margin-top: 21px;
}
}
  #log_email, #log_password{
    width: 230px;
    height: 25px;
    border-radius: 15px;
    border: 1px solid $olivebrown;
    padding-left: 20px;
    font-family:'Times New Roman', Times, serif;
    color: $olivebrown;
    outline: none;
}
  input::placeholder{
    color: $warmbeige;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 1.5px;
    
  }
  .login_btn_box{
    position: relative;
    text-align: center;
    margin-top: 10px;
    // padding-top: 20px;
    // border: 1px solid $bonewhite;
  }
  .login_btn{
    width: 12%;
    height: 25px;
    border-radius: 15px;
    background-color: $mocha;
    border: 1px solid $bonewhite;
    font-size: 15px;
    color: $bonewhite;
    font-family: 'Times New Roman', Times, serif;
    &:hover{
      background-color: $warmbeige;
      color: $espresso;
      cursor: pointer;
      transition: all 0.1s ease;
    }
}
.signup{
    position: relative;
    bottom: 30px;
    margin: 0;
    // border: 1px solid $bonewhite;
    text-align: center;
    top: 20px;
    left: 50%;
    transform: translate(-50%,0%);
    display: inline-flex;
    gap: 20px; 
  }
  .signup_word{
    color: $bonewhite;
    margin: 0;
    font-weight: 100;
    font-size: 15px;
    display: inline-block;
    gap: 50px;
  }
  .signup_link{
    display: inline-block;
    color: $warmbeige;
    font-size: small;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-decoration: none;
    border-bottom: 1px solid $warmbeige;
    &:hover{
      color: $bonewhite;
      border-bottom: 1px solid $bonewhite;
      transition: all 0.1s ease;
    }

  }
</style>


