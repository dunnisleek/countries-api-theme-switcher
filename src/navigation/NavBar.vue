<template>
  <nav>
       <div>
       <h2>where in the world ?</h2>
       </div>
       <div class="switcher" @click="toggleTheme"> 
       
              <span><i class="far fa-moon"></i> {{darkMode ? 'light mode' : 'dark mode'}}</span>
              
       </div>
  </nav>
</template>

<script>
export default {
       data(){
              return{
                     darkMode: false
              }
       },
       methods:{
              toggleTheme(){
                     this.darkMode =! this.darkMode
                     localStorage.setItem('darkMode', this.darkMode)
                     this.applyTheme()
              },
              applyTheme(){
                     if(this.darkMode){
                               // Apply dark mode styles
                             document.body.classList.add('dark-theme');
                     }
                     else {
                             // Remove dark mode styles
                             document.body.classList.remove('dark-theme');
      }
              }
       },
       created() {
    // Retrieve user's theme preference from local storage
    const storedTheme = localStorage.getItem('darkMode');
    this.darkMode = storedTheme === 'true';
    this.applyTheme();
  }
}
</script>

<style >
nav{
       /* background: #fff; */
       color:  hsl(207, 26%, 17%);
       display:flex;
       justify-content: space-between;
       align-content: center;
       align-items: center;
       padding:15px 7rem;
       box-shadow: 0px 10px 5px  hsl(0, 3%, 98%); 
       /* box-shadow: 0px 10px 5px #f5f4f4; */
       /* width:1440px; */
    
}
h2{
       font-size:20px;
       line-height: 25px;
       font-weight:800;
       font-family: Nunito Sans;
}

.switcher{
       cursor: pointer;
       font-weight:600;
       font-size: 16px ;
       line-height:20px;
       text-transform: capitalize;
       font-family: Nunito Sans;
       color:  hsl(207, 26%, 17%);
       /* color:hsl(200, 15%, 8%); */
}
.dark-theme {
  /* Dark mode styles */
  background-color:   hsl(207, 26%, 17%);
  color: hsl(0, 0%, 100%);
  /* Add any other dark mode styles you need */
}
.dark-theme nav{
       color:hsl(0, 0%, 100%);
       background: hsl(209, 23%, 22%);
       box-shadow: 0px 10px 5px hsl(209, 23%, 22%); 
}
.dark-theme .switcher{
       color:hsl(0, 0%, 100%);
}
.dark-theme .whitebg{
       background-color:   hsl(207, 26%, 17%);
       color:hsl(0, 0%, 100%);
}

/* FILTER BG COLOR */
.dark-theme .filter select{
       background: hsl(209, 23%, 22%);
       color:hsl(0, 0%, 100%);
       box-shadow: 0px 10px 5px hsl(209, 23%, 22%); 
}

.dark-theme .searchbox{
       background: hsl(209, 23%, 22%);
       padding: 10px 20px 10px 20px;
       color:white;
       border:none;
       outline:none;
}
/* this is for search icon */
.dark-theme .searchicon{
       background: hsl(209, 23%, 22%);
       border:none;

}
.dark-theme .searchbox input{
       color:hsl(0, 0%, 100%);
      
}

/* text style for each country */
.dark-theme .grid-item span{
       font-size:16px;
       line-height: 20px;
       font-weight: 600;
       font-family: Nunito Sans;
      color:#fff;
}
.dark-theme .details-righthand span{
  color:hsl(0, 0%, 78%)!important;
    font-weight:600px;
  }
.dark-theme .grid-item h4{
       color:white;
       font-family: Nunito Sans;
}
.dark-theme  input[type="text"]::placeholder {
       color:hsl(0, 0%, 100%); /* Replace "green" with your desired color */
}


.dark-theme .detail-container{
       color:#ffffff;
}
.dark-theme .backBtn {
       background:hsl(209, 23%, 22%) ;
       box-shadow: 0px 10px 5px hsl(209, 23%, 22%); 
       color:#ffffff;
       

}

/* to change the icon to white in searchbox */
.dark-theme .fa-search{
       color:#ffffff;
}
.dark-theme .loadspin{
       color:#ffffff;
       padding-top:40px;
}


</style>