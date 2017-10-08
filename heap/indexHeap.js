/*
索引堆
将数组直接构建成堆会导致数组对应的索引的data会发生改变
最开始我们通过数组的索引和数据的值进行一一对应。当需要查找数据的时候就可以通过O(1)直接找到
但是在构建成堆之后由于数据和索引的关系放生来改变要再找到对应的数据则需要O(logn)的时间复杂度
(将数组中的data视为操作系统的一个任务有助于理解)

索引堆通过将索引和数据分离的方式
有两个数组：
一个索引数组
一个数据数组

进行对构建的时候只对索引数组进行改变，以后寻值通过索引数组的值，找到数据数组对应的角标

好处:
1.能够快速找到对应的数据项
2.当数据项比较中的值所占的内存比较大的时候，交换操作很费资源，该种方式能够提高交换的效率

*/

class IndexHeap(){
	constructor(){
		this.data = [];
		this.indexes = [];
		this.count = 0;
	}
	size(){
		return this.count;
	}
	isEmpty(){
		return this.count === 0;
	}
	insert(i, item){
		// 内部实现的索引是从1开始，而用户传入的是从0开始
		i++;
		this.data[i] = item;
		this.indexes[++this.count] = i;
		this._shiftUp(this.count);
		return true;
	}
	extractMax(){
		if(this.count > 0){
			let ret = this.data[this.indexes[1]];
			this._swap(this.indexes, 1, this.count);
			this.indexes.pop()
			this.count--;
			this._shiftDown(1);
			return ret;
		}
	}
	extractMaxIndex(){
		if (this.count > 0) {
			let ret = this.indexes[1];
			this._swap(this.indexes, 1, this.count);
			this.count--;
			this.indexes.pop();
			this._shiftDown(1);
			return ret;
		}
	}
	getItem(i){
		return this.data[i+1];

	}
	change(i, newItem){
		// i++,外部传入的值从0开始
		i++;
		this.data[i] = newItem;
		for(let j = 0; j < this.count; j++){
			if (this.indexes[j] === i) {
				this._shiftDown(j);
				this._shiftUp(j);
				break;
			}
		}
	}
	_shiftDown(k){
		while(2*k <= this.count){
			let largest = 2*k;
			if(this.data[this.indexes[largest]] < this.data[this.indexes[largest + 1]]){
				// 找出左右孩子中最大的元素的角标
				largest++;
			}
			if (this.data[this.indexes[largest]] <= this.data[this.indexes[k]]) break;
			this._swap(this.indexes, largest, k);
			k = largest;
		}
	}
	_shiftUp(k){
		while(k > 1 && this.data[this.indexes[Math.floor(k/2)]] < this.data[this.indexes[k]]){
			this._swap(this.indexes, Math.floor(k/2), k);
			k = Math.floor(k/2);
		}
	}
	_swap(arr, i, j){
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}	
}

