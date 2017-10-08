function selectSort(arr){
	let index;
	for(let i = 0, len = arr.length; i < len; i++){
		index = i;
		for(let j = i + 1; j < len; j++){
			if(arr[j] < arr[index]){
				index = j;
			}
		}
		swap(arr, index, i);
	}
	return arr;
}

/*
var ret = selectSort(staticArr);
console.log(ret);*/


// 大量数据的测试

let arr = genArr(10000, 0, 10000);
let start = (new Date()).getTime();
selectSort(arr);
let end = (new Date()).getTime();
let time = parseFloat((end-start)/1000);
console.log(time);


arr = genArr(100000, 0, 100000);
start = (new Date()).getTime();
selectSort(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log(time);

/*
n = 10000; --->0.089s;
n = 100000; ----> 6.381s;

时间复杂度O(n^2)
空间复杂度O(1)
稳定性: 不稳定

*/
