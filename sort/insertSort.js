function insertSort(arr){
	for(let i = 1, len = arr.length; i < len; i++){
		let temp = arr[i];
		for(let j = i-1; j >= 0; j--){
			if(arr[j] > temp){
				swap(arr, j, j+1);
			}else{
				arr[j+1] = temp;
				break;
			}
		}
	}
	return arr;
}

/*let ret = insertSort(staticArr);
console.log(ret);*/

/*
let arr = genArr(10000, 0, 10000);
let start = (new Date()).getTime();
insertSort(arr);
let end = (new Date()).getTime();
let time = parseFloat((end-start)/1000);
console.log(time);


arr = genArr(100000, 0, 100000);
start = (new Date()).getTime();
insertSort(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log(time);
*/
/*
n = 10000; --->0.064s;
n = 100000; ----> 4.4227s;

时间复杂度O(n^2)
空间复杂度O(1)
稳定性: 不稳定

*/

// 当数据近乎有序的时候

let arr = genAlmostSortArr(10000, 0, 10000);
let start = (new Date()).getTime();
insertSort(arr);
let end = (new Date()).getTime();
let time = parseFloat((end-start)/1000);
console.log(time);


arr = genAlmostSortArr(100000, 0, 100000);
start = (new Date()).getTime();
insertSort(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log(time);


/*
n = 10000; --->0.006s;
n = 100000; ----> 0.004s;
当数组中的数据几乎有序的时候算法的时间复杂度退化为O(n);

*/