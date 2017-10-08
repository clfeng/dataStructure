let arr = genArr(10000, 0, 10000);
let start = (new Date()).getTime();
heapSort_1(arr);
let end = (new Date()).getTime();
let time = parseFloat((end-start)/1000);
console.log('heapSort_1 '+time);


start = (new Date()).getTime();
heapSort_2(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log('heapSort_2 '+ time);

start = (new Date()).getTime();
heapSort_3(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log('heapSort_3 '+ time);




arr = genArr(100000, 0, 100000);
start = (new Date()).getTime();
heapSort_1(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log('heapSort_1 '+ time);


start = (new Date()).getTime();
heapSort_2(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log('heapSort_2 '+ time);

start = (new Date()).getTime();
heapSort_3(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log('heapSort_3 '+ time);

// 百万数据的处理很慢
/*arr = genArr(1000000, 0, 1000000);
start = (new Date()).getTime();
heapSort_1(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log('heapSort_1 '+ time);


start = (new Date()).getTime();
heapSort_2(arr);
end = (new Date()).getTime();
time = parseFloat((end-start)/1000);
console.log('heapSort_2 '+ time);

*/
/*

n --> 10000;
heapSort_1 0.035
heapSort_2 0.022

n --> 100000;
heapSort_1 0.908
heapSort_2 0.88


*/

/*
重要结论
将n个元素逐个插入到一个空堆中，算法复杂度是O(nlogn)

heapify的过程，算法复杂度是O(n);


*/