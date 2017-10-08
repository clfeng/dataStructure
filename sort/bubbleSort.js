function bubbleSort(arr){
	for(let i = 0, len = arr.length; i < len; i++){
		for(let j = 0; j < len - 1 - i; j++){
			if(arr[j] > arr[j+1]){
				swap(arr, j, j+1);
			}
		}
	}
	return arr;	
}

/*
let ret = bubbleSort(staticArr);
console.log(ret);*/

let arr = genArr(10000, 0, 10000);
let start = (new Date()).getTime();
bubbleSort(arr);
let end = (new Date()).getTime();
let time = parseFloat((end-start)/1000);
console.log(time);


arr = genArr(100000, 0, 100000);
start = (new Date()).getTime();
bubbleSort(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log(time);

/*
n = 10000; --->0.2s;
n = 100000; ----> 21.617s;

时间复杂度O(n^2)
空间复杂度O(1)
稳定性: 稳定

*/
