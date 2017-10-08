function heapSort_1(arr){
	let maxHeap = new MaxHeap();
	for(let item of arr){
		maxHeap.insert(item);
	}
	let retArr = [];
	while(!maxHeap.isEmpty()){
		retArr.unshift(maxHeap.extractMax());
	}
	return retArr;
}