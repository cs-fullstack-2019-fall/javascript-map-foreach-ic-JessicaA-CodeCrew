//Create a function that will take the array [1, 2, 3, 4, 5, 6] and add all of the elements in the array. Return the sum.

var numbers = [1,2,3,4,5,6];

function addAllInArray(arrayOfInts) {
    var total = 0;
    arrayOfInts.forEach(function(eachElement){
    total = total + eachElement;
        console.log(total);
    });

}

addAllInArray([1,2,3,4,5,6]);

//Create a function that will take an integer array as a parameeter and return the maxiumum value in that array.
// maxOfArray([1,2,3,4,5,6]);
//
// function maxOfArray(arrayOfInts)
// {
//     var minimumValue = 100000000000000000;
//     arrayOfInts.forEach
//     (
//         function(eachElement)
//         {
//         if(eachElement < minimumValue)
//             {
//                 minimumValue = eachElement;
//             }
//         }
//     );
//     console.log(minimumValue);
//     return minimumValue;
// }


//Create a function that will take an integer array as a parameeter and return the maxiumum value in that array.

