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
  levelOrder(){
    let queue = [];
    queue.push(this.root);
    while(queue.length){
      let node = queue.shift();
      console.log(node.value);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
  mininum(){
    if (this.count) {
      let miniNode = this._mininum(this.root);
      return miniNode.key;
    }
  }
  maxinum(){
    if (this.count) {
      let maxiNode = this._maxinum(this.root);
      return maxiNode.key;
    }
  }
  // 删除二分搜索树中的最小值所在节点，返回删除了最小值节点的二分搜索树的根
  removeMin(){
    if (this.root) {
      this.root = this._removeMin(this.root);
    }
  }
  removeMax(){
    if (this.root) {
      this.root = this._removeMax(this.root);
    }
  }
  // 删除任意节点
  remove(key){
    if (this.root) {
      this.root = this._removeByPrecursor(this.root, key);
    }
  }
  _removeByPrecursor(rootNode, key){
    // 通过将前驱节点代替删除节点的方式实现
    if (rootNode === null) return;
    if (rootNode.key > key) {
      rootNode.left = this._removeByPrecursor(rootNode.left, key);
      return rootNode;
    }
    if (rootNode.key < key) {
      rootNode.right = this._removeByPrecursor(rootNode.right, key);
      return rootNode;
    }
    // rootNode.key == key;
    if (rootNode.left === null) {
      return rootNode.right;
    }
    if (rootNode.right === null) {
      return rootNode.left;
    }
    // rootNode.right !== null && rootNode.left !== null;
    let precursor = this._maxinum(rootNode.left);
    precursor.left = this._removeMax(rootNode.left);
    precursor.right = rootNode.right;
    this.count--;
    return precursor;
  }
  _remove(rootNode, key){
    // 通过将后继绩点代替删除节点的方式实现
    if (rootNode === null) {
      // 找不到的情况
      return;
    }
    if (rootNode.key > key) {
      rootNode.left = this._remove(rootNode.left);
      return rootNode;
    }
    if (rootNode.key < key) {
      rootNode.right = this._remove(rootNode.right);
      return rootNode;
    }

    // rootNode.key == key;
    if (rootNode.left === null) {
      this.count--;
      return rootNode.right;
    }
    if (rootNode.right === null) {
      this.count--;
      return rootNode.left;
    }
    // rootNode.right === null && rootNode.left === null;
    let successor = this._mininum(rootNode.right);
    successor.right = this._removeMin(rootNode.right);
    successor.left = rootNode.left;
    this.count--;
    return successor;
  }
  _removeMax(rootNode){
    if (rootNode.right === null) {
      this.count--;
      return rootNode.left;

    }
    rootNode.right = this._removeMax(rootNode.right);
    return rootNode;
  }
  _removeMin(rootNode){
    if (rootNode.left === null) {
      this.count--;
      return rootNode.right;
    }
    rootNode.left = this._removeMin(rootNode.left);
    return rootNode;
  }
  _mininum(rootNode){
    if (rootNode.left === null) {
      return rootNode;
    }
    return this._mininum(rootNode.left);
  }
  _maxinum(rootNode){
    if (rootNode.right === null) {
      return rootNode;
    }
    return this._maxinum(rootNode.right);
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
      return this._search(rootNode.right, key);
    }else {
      return this._search(rootNode.left, key);
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
      rootNode.left = this._insert(rootNode.left, key, value);
    }else{
      rootNode.right = this._insert(rootNode.right, key, value);
    }
    return rootNode;
  }
}