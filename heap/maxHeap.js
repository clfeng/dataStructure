class MaxHeap{
	constructor(arr){
		this.data = [];
		this.count = 0;

		if(typeof arr !== 'undefined'){
			this.data = Array.from(arr);
			this.data.unshift('');
			this.count = this.data.length - 1;
			for(let i = Math.floor(this.count/2); i > 0; i--){
				this._shiftDown(i);
			}
		}

	}
	size(){
		return this.count;
	}
	isEmpty(){
		return this.count === 0;
	}
	insert(item){
		this.data[this.count+1] = item;
		this.count++;
		this._shiftUp(this.count);
		return true;
	}
	extractMax(){
		if(this.count > 0){
			let ret = this.data[1];
			this._swap(this.data, 1, this.count);
			this.data.pop()
			this.count--;
			this._shiftDown(1);
			return ret;
		}
	}
	_shiftDown(k){
		/*if(k < this.count){
			let largest = k;
			if (2*k <= this.count && this.data[2*k] > this.data[largest]) {
				largest = 2*k;
			}
			if(2*k + 1 <= this.count && this.data[2*k + 1] > this.data[largest]){
				largest = 2*k + 1;
			}
			if(largest === k) return;
			this._swap(this.data, k, largest);
			this._shiftDown(largest);
		}*/

		while(2*k <= this.count){
			let largest = 2*k;
			if(this.data[largest] < this.data[largest + 1]){
				// 找出左右孩子中最大的元素的角标
				largest++;
			}
			if (this.data[largest] <= this.data[k]) break;
			this._swap(this.data, largest, k);
			k = largest;
		}



	}
	_shiftUp(k){
		while(k > 1 && this.data[Math.floor(k/2)] < this.data[k]){
			this._swap(this.data, Math.floor(k/2), k);
			k = Math.floor(k/2);
		}
	}
	_swap(arr, i, j){
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	print(){
		let line = '',
		layer = this._layerCount(this.count);
		for(let i = layer; i > 0; i--){
			let startLineCount = Math.pow(2, i - 1) - 1;
			let middleLineCount = Math.pow(2, i) - 1;
			line = '';
			for(let j = 0; j < startLineCount; j++){
				line += '--';
			}
			for(let k = Math.pow(2, layer - i), end = Math.pow(2, layer - i + 1); k < end && k < this.count + 1; k++){
				if(this.data[k] < 10) line +='0';
				line += this.data[k];
				for(let j = 0; j < middleLineCount && (k + 1 < end && k + 1 < this.count + 1); j++){
					line += '--';
				}
			}
			console.log(line);
		}
	}
	_layerCount(n){
		let layer = 0;
		while(Math.pow(2, layer) < n){
			layer++;
		}
		return layer;
	}
}

// demo
/*let maxHeap = new MaxHeap();
let temp;
for(let i = 0; i < 50; i++){
	temp = Math.floor(Math.random()*100);
	maxHeap.insert(temp);
}*/
// print the maxHeap tree;
// maxHeap.print();


// print the arr from maximum to minimum
/*let ret = '';
while(!maxHeap.isEmpty()){
	ret += ' ' + maxHeap.extractMax();
}
console.log(ret);*/