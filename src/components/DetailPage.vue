<template>
       <div class="wrapper">
        <nav-bar></nav-bar>
         <div v-if="country" class="detail-container">
          <button class="backBtn" @click="goBack"><i class="fa fa-arrow-left"></i>&nbsp;&nbsp;Back</button>
          <div class="twoRowSection">
          <div class="column-1">
            <img :src="country.flags.png" alt="Image"  >
          </div>
          <div class="column-2">
            <h2>{{country.name.common}}</h2>

            <div class='details-righthand'>
            <div>
              <!-- <h4>Native Name: {{country.name.nativeName.deu.common}}</h4> -->
              <h4>Native Name: <span class="red">{{ country.name.common }}, {{ country.name.official }}</span></h4>
              <h4>Population: <span>{{country.population}} </span></h4>
              <h4>Region: <span>{{country.region }}</span></h4>
              <h4> Sub Region: <span>{{country.subregion }}</span></h4>
              <!-- <h4>Capital : {{country.capital }}</h4> -->
              <h4>Capital:<span>{{getCapital(country)}}</span></h4>
            </div>

            <div class="secondDetails">
              <h4>Top leavel domain : <span>{{getTld(country)}}</span></h4>
              <!--we added a v-for loop to iterate through the country.currencies object, where currency represents each individual currency object, and code represents the currency code (e.g., EUR) as the key of the currencies object. We then display the currency name using currency.name.-->
              <h4 v-for="(currency, code) in country.currencies" :key="code">
               <p>Currency: <span>{{ currency.name }}</span></p>
              </h4>
              <h4>Languages: <span>{{getLanguages(country.languages) }}</span></h4>
            
            </div>
          </div>
            <h4 class="last-row">
              <!-- Border Countries: <span class="bordercounty">{{ getBorders(country) }}</span> -->
              Border Countries : <span v-for="(border, index) in getBorders(country)" :key="index"
              class="bordercountry"
             >{{border }}</span>
            </h4>
         
          </div>
        </div>
           <!-- Display other country details here -->
         </div>
         <div class="loadspin" v-else>
           Loading...
         </div>
       </div>
     </template>
     
     <script>
    import NavBar from '@/navigation/NavBar.vue';
     import axios from 'axios'
     import {getCapital, getLanguages, getBorders,getTld} from '@/UtilityFunction';
   
     export default {
       name: 'detailPage',
       components:{NavBar},
       data() {
         return {
           country: null,
           id:''
         };
       },
       methods: {
       //i imported this function from the UtilityFunction, wc help loop through an array inside an array
         getCapital,
         getLanguages,
         getBorders,
        getTld,
         goBack(){
          this.$router.go(-1)
         },
      

       },
    
    
      
       created() {
        this.id= this.$route.params.id
        axios.get(`https://restcountries.com/v3.1/all?id=${this.id}`).then((response) =>{
          console.log(response.data)
          this.country = response.data[this.id]
        })
       },

     };
     </script>
     
     <style scoped>
  .wrapper{
    max-width:1440px;
    margin: 0 auto;
  }
     .detail-container {
      padding-top:70px;
      padding-left:3rem;
     }
     .backBtn {
      display: flex;
      margin-left: 5rem ;
      margin-bottom:30px;
      box-shadow: 1px 4px 10px 2px #00000063;
      padding:10px 25px;
      border:none;
      
     
     }
     .twoRowSection {
      display: flex;
      
   
     }
     .details-righthand{
      display:flex;
      align-items: flex-start;
      gap:50px;
     }
     .column-1 {
    flex: 1; /* This column will take 1/3 (40%) of the available space */
     flex-basis: 45%; 
     /* Set the initial size of the column to 40% */
     /* Add any additional styling for column-1 here */
  }

.column-2 {
  flex: 1; /* This column will take 2/3 (60%) of the available space */
  flex-basis: 55%; /* Set the initial size of the column to 60% */
  /* Add any additional styling for column-2 here */
  }
  .column-1 img{
    width:500px;
    height:50vh;
    object-fit: cover;
  }
  .column-2 h2{
    display:flex;
    font-family: Nunito Sans;
    font-size:30px;
    font-weight: 600;
    padding-bottom: 30px;
    text-align: left;
  }
  .details-righthand h4{
    text-align: left;
    padding-bottom: 15px;
  }
  .details-righthand span{
  color:hsl(0, 1%, 41%);
    font-weight:600px;
  }
  .last-row{
    display:flex;
    padding-top:30px;
  }


.backgroundColor{
  margin:10px 20px
}


     </style>
     