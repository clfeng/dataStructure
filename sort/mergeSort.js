function mergeSort(arr){
	let len = arr.length,
		middle = Math.floor(len/2);
	if(len < 2) return arr;
	let left = arr.slice(0, middle),
		right = arr.slice(middle);
	return _merge(mergeSort(left), mergeSort(right));
}

function _merge(left, right){
	let ret = [];
	while(left.length && right.length){
		if(left[0] < right[0]){
			ret.push(left.shift());
		}else{
			ret.push(right.shift());
		}
	}
	while(left.length){
		ret.push(left.shift());
	}
	while(right.length){
		ret.push(right.shift());
	}
	return ret;
}

/*var ret = mergeSort(staticArr);
console.log(ret);*/



let arr = genAlmostSortedArr(10000, 0, 10000);
let start = (new Date()).getTime();
mergeSort(arr);
let end = (new Date()).getTime();
let time = parseFloat((end-start)/1000);
console.log(time);


arr = genAlmostSortedArr(100000, 0, 100000);
start = (new Date()).getTime();
mergeSort(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log(time);

/*
arr = genAlmostSortedArr(1000000, 0, 1000000);
start = (new Date()).getTime();
mergeSort(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log(time);
*/

/*
n = 10000; --->0.022s;
n = 100000; ----> 0.177s;
n = 1000000; ----> 浏览器几乎卡死，预计是百万数据需要的内存空间过大导致浏览器崩溃
时间复杂度O(nlogn)
空间复杂度O(n)
稳定性: 稳定

*/
