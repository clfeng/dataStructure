function shellSort(arr){
	let len = arr.length, 
		gap = Math.ceil(len/2);
	for(; gap > 0; gap = gap == 1? 0: Math.ceil(gap/2)){
		for(let i = 0; i < gap; i++){
			for(let j = i; j < len - gap; j +=gap){
				if (arr[j] > arr[j+gap]) {
					swap(arr, j, j+gap);
				}
			}
		}
	}
	return arr;	
}

/*var ret = shellSort(staticArr);
console.log(ret);*/


let arr = genAlmostSortedArr(10000, 0, 10000);
let start = (new Date()).getTime();
shellSort(arr);
let end = (new Date()).getTime();
let time = parseFloat((end-start)/1000);
console.log(time);


arr = genAlmostSortedArr(100000, 0, 100000);
start = (new Date()).getTime();
shellSort(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log(time);

arr = genAlmostSortedArr(1000000, 0, 1000000);
start = (new Date()).getTime();
shellSort(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log(time);


/*
n = 10000; --->0.014s;
n = 100000; ----> 0.01s;
n = 1000000; ----> 0.096s;
时间复杂度O(nlogn)
空间复杂度O(1)
稳定性: 不稳定

*/

