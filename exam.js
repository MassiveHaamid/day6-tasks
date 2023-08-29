/*
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    // isPG method to filter PG-rated movies
    isPG() {
        return this.rating === "PG";
    }
}

// Creating an instance of the class Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Array of movies
const movies = [
    new Movie("Billa", "HamizStar", "PG"),
    new Movie("veeram", "Ajay", "R"),
    new Movie("Gurub", "Dulkar", "PG-13"),
    new Movie("Leo", "LCU", "PG"),
];

// Using the isPG method to filter PG-rated movies
const pgMovies = movies.filter(movie => movie.isPG());

console.log(pgMovies);
*/

/* Write a “person” class to hold all the details.

class Person {
    constructor(name, email, gender, age, bloodGroup, education, phoneNo, address) {
      this.name = name;
      this.email = email;
      this.gender = gender;
      this.age = age;
      this.bloodGroup = bloodGroup;
      this.education = education;
      this.phoneNo = phoneNo;
      this.address = address;
    }
  }
  
  let person1 = new Person(
    "Hamiz",
    "hamiz132021@gmail.com",
    "Male",
    "18",
    "A1+",
    "Qualified",
    "7550372282",
    `SNR Garden, Wahab Petrol Opp Road, Kuniyamuthur, CBE-641008`
  );
  
  console.log(person1);
  */
  
  /*
  //write a class to calculate the uber price.

  class UberTaxi {
    constructor(distanceInKilometers) {
      this.distanceInKilometers = distanceInKilometers;
      this.baseFare = 25;  // Base fare in INR
      this.farePerKilometer = 10;  // Fare per kilometer in INR
    }
  
    calculateFare() {
      const totalFare = this.baseFare + this.distanceInKilometers * this.farePerKilometer;
      return totalFare;
    }
  
    calculateReturnFare() {
      const returnDistance = this.distanceInKilometers * 2;
      const totalReturnFare = this.baseFare + returnDistance * this.farePerKilometer;
      return totalReturnFare;
    }
  }
  
  const distanceTraveled = 8;  // Distance in kilometers
  let uberTaxi = new UberTaxi(distanceTraveled);
  

  let fare = uberTaxi.calculateFare();
  console.log(`Fare for ${distanceTraveled} kilometers: ₹${fare}`);
  
  let returnFare = uberTaxi.calculateReturnFare();
  console.log(`Return fare for ${distanceTraveled} kilometers: ₹${returnFare}`);
*/  

