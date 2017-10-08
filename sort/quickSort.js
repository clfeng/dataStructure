function quickSort(arr, left, right){
	left = typeof left === 'number'? left: 0;
	right = typeof right === 'number'? right: arr.length - 1;
	if(left < right){
		let partitionIndex = _partition(arr, left, right);
		quickSort(arr, left, partitionIndex - 1);
		quickSort(arr, partitionIndex + 1, right);
	}
	return arr;
}

function _partition(arr, left, right){
	let randomIndex = Math.floor(Math.random()*(right - left + 1) + left);
	swap(arr, left, randomIndex);
	let pivot = arr[left],
		index = left;
	// 进行数组的遍历处理,遍历处理完之后[left+1, index] < pivot
	for(let i = left + 1; i <= right; i++){
		if(arr[i] < pivot){
			swap(arr, i, ++index);
		}
	}
	swap(arr, left, index);
	return index;
}
/*
let ret = quickSort(staticArr);
console.log(ret);	*/


/*let arr = genArr(10000, 0, 10000);
let start = (new Date()).getTime();
quickSort(arr);
let end = (new Date()).getTime();
let time = parseFloat((end-start)/1000);
console.log(time);


arr = genArr(100000, 0, 100000);
start = (new Date()).getTime();
quickSort(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log(time);



arr = genArr(1000000, 0, 1000000);
start = (new Date()).getTime();
quickSort(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log(time);
*/

/*
n = 10000; --->0.012s;
n = 100000; ----> 0.015s;
n = 1000000; ---->0.142
时间复杂度O(nlogn)
空间复杂度O(logn)
稳定性: 不稳定
*/


// 两路快排
// 当数组中存在大量重复元素的时候,就会导致快速排序每次分成两组的时候
// 分的极度不平衡,将会使得快速排序变得很慢
function quickSort_2(arr, left, right){
	left = typeof left === 'number'?  left : 0;
	right = typeof right === 'number'? right: arr.length - 1;

	if(left < right) {
		let partitionIndex = _partition_2(arr, left, right);
		quickSort_2(arr, left, partitionIndex - 1);
		quickSort_2(arr, partitionIndex + 1, right);
	}
	return arr;
}


function _partition_2(arr, left, right){
	let randomIndex = Math.floor(left + Math.random()*(right - left + 1));
	swap(arr, randomIndex, left);
	let pivot = arr[left];
	let lt = left + 1,
		gt = right;
	// 对数组进行遍历,使得最后的结果满足
	// [left+1, ..., lt)<= pivot; (gt, ...,right]>=pivot,此时lt = gt
	while(true){
		while(lt <= right && arr[lt] < pivot) lt++;
		while(gt >= left + 1 && arr[gt] > pivot) gt--;
		if(lt > gt) break;
		swap(arr, lt, gt);
		lt++;
		gt--;
	}
	swap(arr, left, gt);
	return gt;
}	

/*let ret = quickSort_2(staticArr);
console.log(ret);*/

/*
let arr = genArr(10000, 0, 100);
let start = (new Date()).getTime();
quickSort_2(arr);
let end = (new Date()).getTime();
let time = parseFloat((end-start)/1000);
console.log(time);


arr = genArr(100000, 0, 100);
start = (new Date()).getTime();
quickSort_2(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log(time);



arr = genArr(1000000, 0, 100);
start = (new Date()).getTime();
quickSort_2(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log(time);*/


/*

使用quickSort()
n = 10000; --->0.014s;
n = 100000; ----> 0.066s;
n = 1000000; ---->5.16s


使用quickSort_@()
//二路快拍可以在数据具有大量重复元素的的情况下，
//使得每次分成的组的大小不至于过于不均匀
n = 10000; --->0.009s;
n = 100000; ----> 0.017s;
n = 1000000; ---->0.134s
时间复杂度O(nlogn)
空间复杂度O(logn)
稳定性: 不稳定
*/


function quickSort_3(arr, left, right){
	left = typeof left === 'number'? left : 0;
	right = typeof right === 'number'? right : arr.length - 1;
	if(left >= right) return arr;
	let randomIndex = Math.floor(Math.random()*(right - left + 1) + left);
	swap(arr, left, randomIndex);

	let pivot = arr[left],
		lt = left,
		gt = right + 1,
		i = left + 1;
	// 对数组进行遍历，遍历之后的结果为
	// arr[left+1, ..., lt] < pivot;
	// arr(lt, ..., gt) == pivot
	// arr[gt, rigth] > pivot;
	while(i < gt){
		if (arr[i] < pivot) {
			swap(arr, i, ++lt);
			i++;
		}else if(arr[i] === pivot){
			i++;
		}else{
			// arr[i] > pivot
			swap(arr, i, --gt);
		}
	}
	quickSort_3(arr, left, lt);
	quickSort_3(arr, gt, right);
	return arr;
}
/*
let ret = quickSort_3(staticArr);
console.log(ret);*/


/*
let arr = genArr(10000, 0, 100);
let start = (new Date()).getTime();
quickSort_3(arr);
let end = (new Date()).getTime();
let time = parseFloat((end-start)/1000);
console.log(time);


arr = genArr(100000, 0, 100);
start = (new Date()).getTime();
quickSort_3(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log(time);



arr = genArr(1000000, 0, 100);
start = (new Date()).getTime();
quickSort_3(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log(time);*/


/*

n = 10000; --->0.012s;
n = 100000; ----> 0.005s;
n = 1000000; ----> 0.048s
时间复杂度O(nlogn)
空间复杂度O(logn)
稳定性: 不稳定
*/