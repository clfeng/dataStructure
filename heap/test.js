let maxHeap = new MaxHeap();


let arr = genArr(10000, 0, 10000);
for(let i = 0, len = arr.length; i < len; i++){
	maxHeap.insert(arr[i]);
}
let start = (new Date()).getTime();
let printArr = [];
while(!maxHeap.isEmpty()){
	printArr.unshift(maxHeap.extractMax());
}

let end = (new Date()).getTime();
let time = parseFloat((end-start)/1000);
// console.log(time);



arr = genArr(100000, 0, 100000);
for(let i = 0, len = arr.length; i < len; i++){
	maxHeap.insert(arr[i]);
}
start = (new Date()).getTime();
printArr = [];
while(!maxHeap.isEmpty()){
	printArr.unshift(maxHeap.extractMax());
}
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log("heapSort "+time);


let quickArr = Array.from(arr);
start = (new Date()).getTime();
quickSort(quickArr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log("quickSort "+time);

let quickArr_3 = Array.from(arr);
start = (new Date()).getTime();
quickSort(quickArr_3);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log("quickArr_3 "+time);
