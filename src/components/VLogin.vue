<template>
    <div id="vlogin">
        <!--<h1>Login</h1>-->
        <!--<p>-->
            <!--<input type="text" placeholder="请输入用户名" v-model="username">-->
        <!--</p>-->
        <!--<p>-->
            <!--<input type="password" placeholder="请输入密码" v-model="password">-->
        <!--</p>-->
        <!--<input type="button" value="登录" @click="doLogin">-->

        <h1>Peterson AFB</h1>
        <div class="login-form">
            <!--<div class="close" @click="closeWindow"> </div>-->
            <div class="head-info">
                <!--<label class="lbl-1"> </label>-->
                <!--<label class="lbl-2"> </label>-->
                <!--<label class="lbl-3"> </label>-->
            </div>
            <div class="clear"> </div>
            <div class="avtar"><img id='logo' src="../assets/img/logo.png" /></div>
            <form autocomplete="off" action="">
                 <input type="text" class="text" value="Username" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Username';}" v-model="username" autocomplete="off" >
                 <input type="password" value="Password" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Password';}" v-model="password" autocomplete="off" >

            </form>
            <p id="infoMsg">Should you have any question please contact <a href="mailto:jwang@nf-gov.com"> Jiayu Wang</a></p>
            <p id="errMsg" v-if="errMsg">{{errMsg}}</p>
             <div class="signin"><input type="button" value="Login" @click="doLogin"></div>
        </div>
        <div class="copy-rights">
          <p>Copyright &copy; {{ new Date().getFullYear() }} NewFields Government Services, All Rights Reserved.</p>
        </div>


    </div>
</template>

<script>

    // import $ from 'jquery';
    const configVar = require('../../config');
    export default {
        name: "VLogin",
        data(){
            return{
                username: null,
                password: null,
                projectname: configVar.proj.loginVerifyProjectName,
                errMsg: '',
            }
        },
        methods:{
            // closeWindow(){
            //     $('.login-form').fadeOut('slow', function(c){
            //         $('.login-form').remove();
            //     });
            // },
            doLogin(){
                var that = this;
                this.$axios.request({
                    url:"http://www.newfieldsgovernmentservices.com/api/v1/auth/",
                    method:"POST",
                    data:{
                        user:this.username,
                        pwd:this.password,
                        projectname: this.projectname,
                    },
                    headers:{
                        'Content-Type':'application/json'
                    }
                }).then(function(arg){
                    if(arg.data.code === 1000){
                        that.$store.commit('saveToken', {token: arg.data.token, username: that.username});
                        that.$router.push({path:'/'})
                    } else {
                        // alert(arg.data.error)
                        that.errMsg = arg.data.error;
                    }
                }).catch(function (arg) {
                    console.log("发生错误");
                })
            }
        }
    }
</script>

<style scoped>
#vlogin{
	background: url('../assets/img/bg.jpg') no-repeat 0px 0px;
	font-family: 'Open Sans', sans-serif;
	background-size:cover;
	-webkit-background-size:cover;
	-moz-background-size:cover;
	-o-background-size:cover;
	height: 100vh;
}

.wrap{
	margin: 0 auto;
	width: 80%;
}

#vlogin a,form li,input[type="button"],input[type="text"],.sixth-login input[type="button"],.third-login input[type="button"]{
	transition: 0.1s all;
	-webkit-transition: 0.1s all;
	-moz-transition: 0.1s all;
	-o-transition: 0.1s all;
}

#logo{
  width: 200px;
}

#infoMsg, #infoMsg a{
    font-family: "Tahoma";
    font-size: 12px;
    color: #7b7d73;
    padding-bottom: 5px;
}

#errMsg{
    font-family: "Open Sans";
    font-size: 14px;
    color: #b4ffbc;
    padding-bottom: 18px;
}

.close{
background: url('../assets/img/close.png') no-repeat 0px 0px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 20px;
  top: 20px;
  -webkit-transition: color 0.2s ease-in-out;
  -moz-transition: color 0.2s ease-in-out;
  -o-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
}

  h1 {
	font-family: 'Exo 2', sans-serif;
	  text-align: center;
	  padding-top: 4em;
	  font-weight: 400;
	  color:#FFF;
	  font-size: 2em;
}
.login-form {
	background: #2b2b36;
	position: relative;
	width: 30%;
	margin: 3% auto 0 auto;
	text-align: center;
	border-radius: 15px;
	-webkit-border-radius: 15px;
	-moz-border-radius: 15px;
	-o-border-radius: 15px;
}
.head img {
	width: 100%;
}
.avtar img {
  margin: 2em 0 0;
}
.head-info {
  padding: 5px 0;
  text-align: center;
  font-weight: 600;
  font-size: 2em;
  color: #fff;
  background: #23232e;
  height: 50px;
	border-top-left-radius: 10px;
	-webkit-border-top-left-radius: 10px;
	-moz-border-top-left-radius: 10px;
	-o-border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	-webkit-border-top-right-radius: 10px;
	-moz-border-top-right-radius: 10px;
	-o-border-top-right-radius: 10p
}
input[type="text"] {
	  width: 70%;
	  padding: 1em 2em 1em 3em;
	  color: #9199aa;
	  font-size: 18px;
	  outline: none;
	  background: url("../assets/img/adm.png") no-repeat 10px 15px;
	  border: none;
	  font-weight: 100;
	  border-bottom: 1px solid#484856;
	  margin-top: 2em;
}
 input[type="password"]{
	  width: 70%;
	  padding: 1em 2em 1em 3em;
	  color: #dd3e3e;
	  font-size: 18px;
	  outline: none;
	  background: url("../assets/img/key.png") no-repeat 10px 23px;
	  border: none;
	  font-weight: 100;
	  border-bottom: 1px solid#484856;
	  margin-bottom: 3em;
 }
/*.key {*/
   /*background: url("../assets/img/pass.png") no-repeat 447px 17px;*/
/*}*/
input[type="button"]{
  font-size: 30px;
  color: #fff;
  outline: none;
  border: none;
  background: #0093e2;
  width: 100%;
  padding: 18px 0;
  border-bottom-left-radius: 15px;
	-webkit-border-bottom-left-radius: 15px;
	-moz-border-bottom-left-radius: 15px;
	-o-border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	-webkit-border-bottom-right-radius: 15px;
	-moz-border-bottom-right-radius: 15px;
	-o-border-bottom-right-radius: 15px;
	cursor: pointer;
}
input[type="button"]:hover {
	background: #ff7800;
  border-bottom-left-radius: 15px;
	-webkit-border-bottom-left-radius: 15px;
	-moz-border-bottom-left-radius: 15px;
	-o-border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	-webkit-border-bottom-right-radius: 15px;
	-moz-border-bottom-right-radius: 15px;
	-o-border-bottom-right-radius: 15px;
  	transition: 1s all;
	-webkit-transition: 1s all;
	-moz-transition: 1s all;
	-o-transition: 1s all;
}
label.lbl-1 {
  background: #6756ea;
  width: 20px;
  height: 20px;
  display: block;
  float: right;
  border-radius: 50%;
  margin: 16px 10px 0px 0px;
}
label.lbl-2 {
  background: #ea569a;
  width: 20px;
  height: 20px;
  display: block;
  float: right;
  border-radius: 50%;
   margin: 16px 10px 0px 0px;
}
label.lbl-3 {
  background: #f1c85f;
  width: 20px;
  height: 20px;
  display: block;
  float: right;
  border-radius: 50%;
  margin: 16px 10px 0px 0px;
}
/*--copyrights--*/
.copy-rights{
	text-align: center;
	margin-top: 8em;
}
.copy-rights p{
	color:#FFF;
	font-size: 1em;
	line-height:1.8em;
}
.copy-rights p a{
	color:#ff2a75;
	-webkit-transition: all 0.3s ease-out;
	-moz-transition: all 0.3s ease-out;
	-ms-transition: all 0.3s ease-out;
	-o-transition: all 0.3s ease-out;
	transition: all 0.3s ease-out;
	text-decoration:none;
}
.copy-rights p a:hover{
	color:#3faa53;
	text-decoration:none;
		transition: 0.1s all;
	-webkit-transition: 0.1s all;
	-moz-transition: 0.1s all;
	-o-transition: 0.1s all;
}
/*--/copyrights--*/
/*--start-responsive-design--*/
@media (max-width:1440px){
	.key {
	  background: url(../assets/img/pass.png) no-repeat 376px 17px;
	}

	#vlogin {
	  min-height: 811px;
	}
}
@media (max-width:1366px){
	.key {
	  background: url(../assets/img/pass.png) no-repeat 358px 19px;
	}
	.copy-rights {
	  margin-top: 3em;
	}
	#vlogin {
	  min-height: 768px;
	}
}
@media (max-width:1280px){
	.key {
	   background: url(../assets/img/pass.png) no-repeat 336px 18px;
	}
	#vlogin {
	  min-height: 711px;
	}
	.copy-rights {
	  margin-top: 0.5em;
	}
}
@media (max-width:1024px){
	.login-form {
	  width: 37%;
	}
	.key {
	   background: url(../assets/img/pass.png) no-repeat 339px 18px;
	}
	.copy-rights {
	  margin-top: 3em;
	}
	h1 {
	  padding-top: 2em;
	}
	#vlogin {
	  min-height: 675px;
	}
}
@media (max-width:768px){
	.login-form {
	  width: 50%;
	    margin: 12% auto 0 auto;
	}
	.key {
	  background: url(../assets/img/pass.png) no-repeat 342px 18px;
	}
	#vlogin {
	  min-height: 929px;
	}
}
@media (max-width:640px){
	.login-form {
	  width: 60%;
	  margin: 20% auto 0 auto;
	}
	.key {
	  background: url(../assets/img/pass.png) no-repeat 342px 19px;
	}
}
@media (max-width:480px){
	.login-form {
	  width: 80%;
	}
}
@media (max-width:320px){
	h1 {
	  padding-top: 1em;
	  font-size: 1.5em;
	}
	.login-form {
	  width: 90%;
	  margin: 10% auto 0 auto;
	}
	input[type="text"] {
	  width: 62%;
	  padding: 1.2em 2em .5em 2.5em;
	  font-size: 17px;
	  margin-top: .5em;
	}
	input[type="password"] {
		width: 62%;
		padding: 1.2em 2em .5em 2.5em;
		font-size: 17px;
		margin-top: .5em;
		margin-bottom: 2em;
		  background: url(../assets/img/key.png) no-repeat 8px 23px;
	}
	.key {
	  background: url(../assets/img/pass.png) no-repeat 235px 27px;
	}
	.avtar img {
	  margin: 1.1em 0 0;
	}
	.head-info {
	  height: 35px;
	  }
	label.lbl-1 {
	  margin: 8px 10px 0px 0px;
	}
	label.lbl-2 {
	  margin: 8px 10px 0px 0px;
	}
	label.lbl-3 {
	  margin: 8px 10px 0px 0px;
	}
	.close {
	  left: 16px;
	  top: 13px;
	}
	.copy-rights {
	  margin-top: 2em;
	}
	#vlogin {
	    min-height: 504px;
	}
	input[type="button"] {
	  font-size: 28px;
	  padding: 10px 0;
	}
}

</style>
