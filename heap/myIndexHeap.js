class myIndexHeap{
	constructor(){
		this.data = [];
		this.indexes = [];
		this.count = 0;
	}
	size(){
		return this.count;
	}
	isEmpty(){
		return this.count == 0;
	}
	insert(item){
		this.data[this.count] = item;
		this.indexes[this.count] = this.count;
		this.count++;
		this._shiftUp(this.count - 1);
	}
	extractMax(){
		
	}
	_shiftUp(k){
		while(Math.ceil(k/2) - 1 >= 0){
			let j = Math.ceil(k/2) - 1;
			if (this.data[this.indexes[k]] < this.data[this.indexes[j]]) return;
			this._swap(this.indexes, k, j);
			k = j;
		}
	}

	_swap(arr, i, j){
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}