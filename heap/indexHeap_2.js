
class IndexHeap(){
	constructor(){
		this.data = [];
		this.indexes = [];
		this.rev = [];
		this.count = 0;
		/*
			rev和indexes具有以下性质
			indexes[i] = j;
			rev[j] = i;

			indexes[rev[i]] = i;
			rev[indexes[i]] = i;
		*/

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
		this.rev[i] = this.count;
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
			this.rev[this.indexes[1]] = 1;
			// 将反向索引对应的位置置0,表示该元素已经不存在。
			this.rev[this.indexes[this.count]] = 0;
			this.count--;
			this.indexes.pop();
			this._shiftDown(1);
			return ret;
		}
	}
	getItem(i){
		if (!this._contain(i)) return;
		return this.data[i+1];

	}
	change(i, newItem){
		// i++,外部传入的值从0开始
		if (!this._contain(i)) return;
		i++;
		this.data[i] = newItem;
		// for(let j = 0; j < this.count; j++){
		// 	if (this.indexes[j] === i) {
		// 		this._shiftDown(j);
		// 		this._shiftUp(j);
		// 		break;
		// 	}
		// }
		let j = this.rev[i];
		this._shiftUp(j);
		this._shiftDown(j);
		return;
	}
	_contain(i){
		if (i + 1 >= 1 && i + 1 <= this.count) 
			return this.rev[i+1] == 0;
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
			this.rev[this.indexes[largest]] = largest;
			this.rev[this.indexes[k]] = k;
			k = largest;
		}
	}
	_shiftUp(k){
		while(k > 1 && this.data[this.indexes[Math.floor(k/2)]] < this.data[this.indexes[k]]){
			this._swap(this.indexes, Math.floor(k/2), k);
			this.rev[this.indexes[Math.floor(k/2)]] = Math.floor(k/2);
			this.rev[this.indexes[k]] = k;
			k = Math.floor(k/2);
		}
	}
	_swap(arr, i, j){
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	
}
