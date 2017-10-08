function binarySearchCeil(arr, target){
	let l = 0,
		r = arr.length - 1,
		mid;
	while(l <= r){
		mid = l + Math.floor((r - l)/2);
		if (arr[mid] === target) {
			while((mid + 1 <= arr.length - 1) && arr[mid + 1] === target){
				mid++;
			}
			return mid;	
		}else if(arr[mid] < target){
			l = mid + 1;
		}else {
			// arr[mid] > target
			r = mid - 1;
		}
	}
	return mid + 1;

}

let ret = quickSort_3(staticArr);
ret.splice(2, 0, 12);
console.log(ret);

let index = binarySearchCeil(ret, 49);
console.log(index);	