let fs = require('fs');

class Node{
	constructor(key, value){
		this.key = key;
		this.value = value;
		// 在初次构造的时候将左右孩子都设置为null
		this.left = this.right = null;
	}
}

class BST{
	constructor(){
		this.root = null;
		this.count = 0;
	}
	size(){
		return this.count;
	}
	isEmpty(){
		return this.count === 0;
	}
	insert(key, value){
		this.root = this._insert(this.root, key, value);
	}
	contain(key){
		return this._contain(this.root, key);
	}
	search(key){
		return this._search(this.root, key);
	}
	preOrder(){
		this._preOrder(this.root);
	}
	inOrder(){
		this._inOrder(this.root);
	}
	postOrder(){
		this._postOrder(this.root);
	}
	_postOrder(rootNode){
		if (rootNode !== null) {
			this._postOrder(rootNode.left);
			this._postOrder(rootNode.right);
			console.log(rootNode.key + ":" + rootNode.value);
		}
	}
	_inOrder(rootNode){
		if (rootNode !== null) {
			this._inOrder(rootNode.left);
			console.log(rootNode.key + ":" + rootNode.value);
			this._inOrder(rootNode.right);
		}
	}
	_preOrder(rootNode){
		if (rootNode !== null) {
			console.log(rootNode.key + ":" + rootNode.value);
			this._preOrder(rootNode.left);
			this._preOrder(rootNode.right);
		}
	}
	_search(rootNode, key){
		// 在以rootNode为根的二叉树中查找以key所对应的value
		if (rootNode === null) return null;
		if (rootNode.key === key) {
			return rootNode;
		}else if(rootNode.key < key){
			return this._search(rootNode.left, key);
		}else {
			return this._search(rootNode.right, key);
		}
	}
	_contain(rootNode, key){
		if(rootNode === null) return false;
		if(rootNode.key === key){
			return true;
		}else if(rootNode.key < key){
			return this._contain(rootNode.left, key);
		}else{
			// rootNode.key > key;
			return this._contain(rootNode.right, key);
		}

	}

	_insert(rootNode, key, value){
		if (rootNode === null) {
			this.count++;
			return new Node(key, value);
		}
		if (rootNode.key === key) {
			rootNode.value = value;
		}else if(rootNode.key > key){
			rootNode.right = this._insert(rootNode.right, key, value);
		}else{
			rootNode.left = this._insert(rootNode.left, key, value);
		}
		return rootNode;
	}
}

let bst = new BST();

fs.readFile('./communist.txt', function (err, file){
	if (err) throw err;
	let temp = file.toString().split(' ');
	while(temp.length){
		let item = temp.shift().toLowerCase();
		let ret = bst.search(item);
		if(ret === null){
			// console.log('insert ' + item)
			bst.insert(item, 1);
		}else{
			// console.log("update " + ret);
			ret.value++;
		}
	}
	let start = new Date().getTime();
	let ret = bst.search('united');
	let time = Math.floor((new Date().getTime() - start));
	console.log(time);
	console.log(ret.value);
	// bst.preOrder();
	// bst.inOrder();
	// bst.postOrder();
})
