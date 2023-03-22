// Code your solution here
// we need to write functions using filter method so that PickMeUp Taxi service employees can easily query the data
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

//we need to write findMatching function that takes an aray of drivers name and a string as arguments
//it should return the matching list of drivers
// the function should be case insensitive
//the result should be ;
//to return all drivers that match the passed in name
//to return matching drivers if case does not match but letters do
//to  return an empty array if there is no match
function findMatching(array,name){
    return array.filter(function(driver){
        return driver.toLowerCase()===name.toLowerCase()
    })
};
findMatching(drivers,'Bobby')

//fuzzyMatch:
//we need it as afunction that takes in an array of drivers name and a string as argumenta
//it should return adreiver if beinning letters match
//not return middle  matching letters
//not return ending matching letters

function fuzzyMatch(array,name){
    return array.filter( driver=>driver.toLowerCase().substring(0,name.length)===name.toLowerCase())
}
fuzzyMatch(drivers,'Bobby')

//matchName takes an array of drivers objects and a string as arguments
//each driver has aname and a hometown
//it should return each element whose name property matches the string argument
//it should acces the data structure to check if name matches
 function matchName(drivers,argument){
    return drivers.filter(driver=>driver.name===argument)
 }

 