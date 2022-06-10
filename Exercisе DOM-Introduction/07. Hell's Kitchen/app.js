function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let bestRestaurant = document.querySelector('#bestRestaurant p');
   let workers = document.querySelector('#workers p');


   function onClick () {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let restaurantsObj = {};

      for (let restaurant of input){
         let restaurantNameAndWorkers = restaurant.split(' - ');
         let restaurantName = restaurantNameAndWorkers[0];
         
         if (!restaurantsObj.hasOwnProperty(restaurantName)){
             restaurantsObj[restaurantName] = {};
         }
        
         restaurantNameAndWorkers[1].split(', ').forEach(element => {
            let worker = element.split(' ');
            restaurantsObj[restaurantName][worker[0]] = Number(worker[1]);
         });
      }
      
      // console.log(restaurantsObj)

      let currentBestRestaurant = NaN;
      let currentBestRestaurantName = '';
      let currentBestAvgSalary = 0;
      let currentBiggestSalary = 0;
      
      for (let [name, obj] of Object.entries(restaurantsObj)){

         let currentSum = 0;
         let currentAvg = 0;
         let currentName = name;
         let currentMaxSalary = 0;
         let currentEntries = 0;
         for(let worker in obj){
            let salary = obj[worker];
            currentSum += salary;
            currentEntries ++;

            if (salary > currentMaxSalary){
               currentMaxSalary = salary;
            }
         }
         if (currentEntries != 0){
            currentAvg = currentSum / currentEntries;
         }
         
         if(currentAvg > currentBestAvgSalary){
            currentBestRestaurant = obj;
            currentBiggestSalary = currentMaxSalary;
            currentBestRestaurantName = currentName;
            currentBestAvgSalary = currentAvg
         }
      }
      // console.log(currentBestRestaurantName);
      // console.log(currentBestRestaurant);
      // console.log(currentBiggestSalary);
      // console.log(currentBestAvgSalary);

      let restaurantText = `Name: ${currentBestRestaurantName} Average Salary: ${currentBestAvgSalary.toFixed(2)} Best Salary: ${currentBiggestSalary.toFixed(2)}`;
      bestRestaurant.textContent = restaurantText;

      let workersText = ''
      currentBestRestaurant = Object.entries(currentBestRestaurant).sort((a, b) => b[1] - a[1]);
      currentBestRestaurant.forEach(x => {
         workersText += `Name: ${x[0]} With Salary: ${x[1]}` + ' ';
      });
      workers.textContent = workersText;
   }
}
