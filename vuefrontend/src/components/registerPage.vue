<template>
    <div id="registerPage">
      <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto blue-border">
        <div class="card card-signin flex-row my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Register</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input type="text" id="inputUserame" v-model="username" class="form-control" placeholder="Username" required autofocus>
                <label for="inputUserame">Username</label>
              </div>
              <div class="form-label-group">
                <input type="text" id="inputFirstName" v-model="firstName" class="form-control" placeholder="First Name" required>
                <label for="inputFirstName">First Name</label>
              </div>
              <div class="form-label-group">
                <input type="text" id="inputLastName" v-model="lastName" class="form-control" placeholder="Last Name" required>
                <label for="inputLastName">Last Name</label>
              </div>
              <div class="form-label-group">
                <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="Email address" required>
                <label for="inputEmail">Email address</label>
              </div>
              <div class="form-label-group">
                <input type="text" id="city" v-model="city" class="form-control" placeholder="City" required>
                <label for="city">City</label>
              </div>
              <div class="form-label-group">
                <input type="text" id="phone" v-model="phone" class="form-control" placeholder="phone" required>
                <label for="phone">Phone</label>
              </div>
              
              <hr>

              <div class="form-label-group">
                <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Password" required>
                <label for="inputPassword">Password</label>
              </div>
              
              <div class="form-label-group">
                <input type="password" id="inputConfirmPassword" v-model="confpassword" class="form-control" placeholder="Password" required>
                <label for="inputConfirmPassword">Confirm password</label>
              </div>

              <button @click="register" class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
              <a class="d-block text-center mt-2 btn btn-lg btn-primary btn-block text-uppercase" href="/front/loginPage">Login</a>
              <button @click="goBack" class="btn btn-lg btn-warning btn-block text-uppercase">Back</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  </div> 
    </div>
    
</template>

<script>
import axios from "axios";

export default {
  name: "registerPage",
  data:function(){
    return{
      username:"",
      password : "",
      firstName:"",
      lastName:"",
      email:"",
      confpassword:"",
      city :"",
      phone:""
    }
  },
  methods:{
    goBack:function(e){
      e.preventDefault();
      console.log("clicked");
      window.location.href = "/";
    },
    register:function(){
      if (this.confpassword !== this.password){
        alert("Passwords don't match");
      }else{
      if(this.username != "" && this.password != "" && this.firstName != "" && this.lastName != ""&& this.email!=""){
          axios.post("/auth/register",{username : this.username, password: this.password,
          firstName : this.firstName, lastName: this.lastName, email: this.email,phone:this.phone,city:this.city})
                      .then(response => {
                        console.log(response);
                          if(response.data =="OK"){
                            alert("Registration is successfull");
                            window.location="./";
                          }
                          else{
                            alert("User with that username already exists");
                          }
                      }); 
        }else{
          alert("All fields must be filled");
        }
      
      }
    }
  }
}

</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
table{
  margin-left: auto;
    margin-right: auto;
  margin-top: 5%
}
h2{
  margin: auto;
  margin-bottom: 2%;
}
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: .75rem;
}

body {
  background: #007bff;
  background: linear-gradient(to right, #0062E6, #33AEFF);
}

.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}



.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  height: auto;
  border-radius: 2rem;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}
.blue-border{
  border: 1px solid lightblue;
}
</style>