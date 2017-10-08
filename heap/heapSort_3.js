function heapSort_3(arr){
	let len = arr.length;
	// heapify
	for(let i = Math.floor(len/2) - 1; i >= 0; i--){
		_shiftDown(arr, i, len);
	}
	for(let j = len - 1; j > 0; j--){
		swap(arr, 0, j);
		_shiftDown(arr, 0, j);
	}
	return arr;
}



function _shiftDown(arr, k, n){
	// n为边界,角标的值需 < n
	while(2*k + 1 < n){
		let lg = 2*k + 1 ;
		if(lg + 1 < n && arr[lg] < arr[lg + 1]){
			lg++;
		}
		if(arr[lg] < arr[k]) return;
		swap(arr, lg, k);
		k = lg;
	}
}

