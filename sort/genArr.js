/*
*n为生成的数组的长度
*start为生成的测试数据的最小值
*end为生成的数组的最大值
*/
function genArr(n, start, end){
	let range = end - start,
		arr = [];
	for(let i = 0; i < n; i++){
		arr.push(Math.floor(Math.random()*range) + start);
	}
	return arr;
}

function genAlmostSortedArr(n, start, end){
	let arr = [];
	for(let i = 0; i < n; i++){
		arr.push(start + i);
	}
	for(let i = 0; i < 20; i++){
		let randNum = Math.floor(Math.random()*(end-start));
		let randIndex = Math.floor(Math.random()*n);
		arr[randIndex] = randNum;
	}
	return arr;
}

