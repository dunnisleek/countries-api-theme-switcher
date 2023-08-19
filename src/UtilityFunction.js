export function getCapital(country){
        // Check if capital is an array
  if (Array.isArray(country.capital)){
       // If it is an array, join the elements with a comma to display multiple capitals
       return country.capital.join(',')
  }else{
         // If it's not an array, return capital directly
       return country.capital
  }
}
//this is for top domain name
export function getTld(country){
  if(Array.isArray(country.tld)){
    return country.tld.join(',  ');
  }else{
    return country.tld
  }
}
//this is for an object inside an object
export function getLanguages(languages) {
       if (languages) {
         return Object.values(languages).join(',');
       } else {
         return 'N/A';
       }
     }
  

     export function getBorders(country){
       if(Array.isArray(country.borders)){
              return country.borders.join(',');
       }else if(country.borders){
              return country.borders
       }else{
              return 'n/a'
       }
     }

  


//am using this to loop through an array inside an array capital:['brazil']