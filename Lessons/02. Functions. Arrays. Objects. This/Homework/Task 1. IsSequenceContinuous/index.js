const isSequenceContinuous = (numbers) => {
    // Начало
//JS code to implement the approach

// The function checks if the array elements
// are consecutive. If elements are consecutive,
// then returns true, else returns false
function areConsecutive(arr, n)
{
	
	// Sort the array
	arr.sort();
	// checking the adjacent elements
	for (var i = 1; i < n; i++)
		if(arr[i]!=arr[i-1]+1)
			return false;
			
	return true;
}
	
// Driver Code
var arr = [5, 4, 2, 3, 1, 6];
var n = arr.length;
if(areConsecutive(arr, n) == true)
	console.log("Array elements are consecutive ");
else
	console.log("Array elements are not consecutive ");

// This code is contributed by phasing17

    // Конец
};

export default isSequenceContinuous;