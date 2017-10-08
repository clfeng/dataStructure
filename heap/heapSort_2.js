function heapSort_2(arr){
	let maxHeap = new MaxHeap(arr);
	// maxHeap.print()
	let retArr = [];

	while(!maxHeap.isEmpty()){
		retArr.unshift(maxHeap.extractMax());
	}
	return retArr;
}


/*let arr = genArr(50, 0, 100);
let retArr = heapSort_2(arr);
console.log(retArr);*/