function findCombinations(arr, target) {
    let fistArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (Math.abs(arr[i] + arr[j]) === target) {
            // console.log(i,j)
            fistArray.push([arr[i], arr[j]]);
          break
        }
      }
    }
  
    return fistArray;
  }
  
  function mergeAndSort(array) {
    var newArray=[];

    array.forEach(element => {
        newArray.push(...element)
    });
    return newArray.sort((a,b)=>a-b)
   
  }
  

  



  let arr = [1, 3, 2, 2, -4, -6, -2, 8];
  let target = 4;
  

  let fistArray = findCombinations(arr, target);

  
// //   // Merge and sort the array
  let mergedArray = mergeAndSort(fistArray);
  console.log("Merge Into a Single Array:", mergedArray);



  

  