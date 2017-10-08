function binarySearch(arr, target){
	let l = 0,
		r = arr.length - 1;
	// 在区间[l, ..., r]中寻找到target值
	while(l <= r){
		let mid = l + Math.floor((r-l)/2);
		if (arr[mid] === target) {
			return mid;
		}else if(arr[mid] > target){
			r = mid - 1;
		}else {
			// arr[mid] < target;
			l = mid + 1;
		}
	}
	return - 1;
}

let ret = quickSort_3(staticArr);
console.log(ret);

let index = binarySearch(ret, 48);
console.log(index);	