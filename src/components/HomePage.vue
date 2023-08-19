<template>
 <div class="mainsection">
       <nav-bar></nav-bar>
       <!-- /**SEARCH BAR */ -->
       <div class="search-container">
       <div>
       <form @submit.prevent="filterItem" >
        <!-- <button type="submit" class="searchbox searchicon"><i class="fa fa-search"></i></button> -->

        <i class="fa fa-search"></i>
       <input type="text" class="searchbox" placeholder="Search for a country..." name="search" v-model="search">
       </form>
       </div>

<!-- FILTER DROPDOWN  -->
<div>
       <form class="filter">
              <select name="select" class="custom-dropdown" v-model="selectedRegion">
                     <option value="">Filter by Region</option>
                     <option value="Africa">Africa</option>
                     <option value="Americas">Americas</option>
                     <option value="Asia">Asia</option>
                     <option value="Europe">Europe</option>
                     <option value="Oceania">Oceania</option>
              </select>

       </form>
</div>
</div>
<!-- /** START OF COUNTRY LISTS IN FULL */ -->
 <div class="grid-container">
    <div  v-for="(country, id) in  visibleCountries" :key="country.id" class="grid-item" @click="goToCountryDetail(id)">
      
       <img :src="country.flags.png" alt="Image" >
       <div class="whitebg">
              <!-- <h3>{{ id }}</h3> -->
              <!-- <router-link :to="`/details/${id}`">view</router-link> -->
           
       <h3>{{ country.name.common}}</h3>
       <h4><span>Population: </span> {{ country.population }}</h4>
       <h4><span>Region: </span>{{ country.region }}
       </h4>
       <h4><span>Capital: </span> {{ getCapital(country) }}

       </h4>
     </div>
    </div>
    <button class="loadMoreBtn" @click="loadMore">Load More</button>
</div>

 </div>
</template>

<script>
import NavBar from '@/navigation/NavBar.vue';
import axios from "axios"
import {getCapital} from '../UtilityFunction.js'
export default {
  name:'HomePage',
  components:{NavBar},
  data(){
       return{
              countryList:[],
              search:'',
              selectedRegion: '',
              displayCount: 12, // Number of countries to initially display
              
       }
  },
  computed:{
     
       filteredCountry() {
    // ... existing filtering based on search query
    return this.countryList.filter((country) => {
      const nameMatch = country.name.common.toLowerCase().includes(this.search.toLowerCase());
      const regionMatch = this.selectedRegion === '' || country.region === this.selectedRegion;
      return nameMatch && regionMatch;
    });
  },
  // visibleCountries computed property returns a sliced array of countries based on the current display count
  visibleCountries() {
      return this.filteredCountry.slice(0, this.displayCount);
    },
  },
  methods:{
//        getUsers(){
//         const URL = "https://restcountries.com/v3.1/all";
//         axios
//         .get(URL)
//         .then(res => {
//           console.log(res.data)
//           this.countryList = res.data
       
//         })
//       }  

      async getCountry(){
              const result =  await axios.get("https://restcountries.com/v3.1/all")
              this.countryList = result.data
       },
       goToCountryDetail(id) {
              this.$router.push(`/details/${id}`);
    },
    getCapital,
    loadMore(){
       this.displayCount += 4 // Increment the display count by 4
    }
},
mounted(){
       this.getCountry()
      }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainsection{
       
       /* background:  hsl(0, 0%, 98%); */
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Create four equal-width columns */
  gap: 40px; /* Optional gap between grid items */
  max-width:87%;
  width:100%;
  justify-content: center;
  margin:0 auto;
  justify-items: center;
  text-align: left;
 
  
}

.grid-item{
       margin:30px 0px;
       /* background:#ffffff ; */
       box-shadow: 0px 4px 32px 1px #00000029;
       border-radius: 0px 0px 5px 5px;
      
       
}
.search-container{
       display:flex;
       justify-content: space-between;
       padding:15px 7rem;
        
}
.search-container form{
       padding-top:60px;
}
.grid-container img{
  width:250px;
  height:20vh;
  object-fit: cover;
  border-radius: 5px 5px 0px 0px;
}
.whitebg{
       /* background: #ffffff; */
       padding:2rem;
       border-radius: 0px 0px 5px 5px;
      

}
.filter select{
       padding:10px 25px;
       border-radius: 5px;
       outline:none;
       border:none;
       box-shadow: 0px 4px 32px 1px #00000029;
       font-size:14px;

}
.custom-dropdown {
       position: relative;
  display: inline-block;
}
.custom-dropdown select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  /* background-color: #fff; */
  color: #333;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

/* Styling the options */
.custom-dropdown select option {
  background-color: #f2f2f2; /* Change this to your desired background color */
  color: #d20d0d; /* Change this to your desired text color */
}
h3{
       font-size:20px;
       line-height: 24px;
       font-family: Nunito Sans;
       padding-bottom:20px;
       
}
.searchbox{
       border:none;
       padding: 10px 20px 10px 60px;
       box-shadow: 0px 4px 32px 1px #00000029;
       position: relative;
       width:350px;
       border-radius:5px;
       outline: none;
}
.fa-search:before {
    content: "\f002";
    position: absolute;
    z-index: 9;
    top: 140px;
    left:128px;
    
}

 h4{
       font-size:14px;
       line-height: 20px;
       font-weight: 500;
       font-family: Nunito Sans;
       text-transform: capitalize;
      color:hsl(0, 0%, 52%);
     
}


span{
       font-size:16px;
       line-height: 20px;
       font-weight: 600;
       font-family: Nunito Sans;
      color:hsl(200, 15%, 8%);
}
/* loadmore button style */
.loadMoreBtn{
       font-family: Nunito Sans;
       font-weight: 600;
       display: block;
     
      position: relative;
      /* top:185%;  */
       left: 175%; 
       right: auto;
       width:200px;
       height: 4vh;
       margin-bottom: 40px;

}

/* Media query for mobile devices */
@media (max-width: 768px) {
       .grid-container {
              display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* gap: 10px; */
    /* max-width: 50%; */
    margin: 0 auto;
    width: 90%;

       } 
}
</style>
