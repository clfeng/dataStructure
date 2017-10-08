/*
*用于交换数组中的两项
*/
function swap(arr, i, j){
	let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
}

// 一个静态的数组,用于最初代码编写时的测试
let staticArr = [5,48,1,56,76,12,45,20,12,16];