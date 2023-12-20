let arr1 = ['mamun' , 'farid'];
let arr2 = ["farid", "mamun"];

function bestFriends(array01, array02){
    if (arr1[0] === arr2[1]) {
      console.log("mamun and farid are bestfrinds");
    } else {
      console.log("they are not bestfriends");
    }
}
bestFriends(arr1, arr2);