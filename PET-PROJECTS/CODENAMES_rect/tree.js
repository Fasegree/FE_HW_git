
class Leaf {
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null
	}
}

class Tree{
	constructor(value){
		this.leaves = new Leaf(value);

	}
	
	addLeaf(value){
		if (this.isLeaf(value))
		{throw new Error("the current value is already here");}

			let current = this.leaves;
			while(true){
				if (value < current.value){
					if(current.left === null) {
						current.left = new Leaf(value)
						break;
				}else current = current.left;
			} else {
				if(current.left === null) {
					current.left = new Leaf(value)
					break;
				}else current = current.left;
			}
		
		} 
}

isLeaf(value) {
	let current = this.leaves;
	while (current != null) {
		if (value == current.value) return true;
		else if (value > current.value) current = current.right;
		else current = current.left;
	}

	return false;
}

		// isLeaf(value){
		// 	let current = this.value;
		// 	while(true){
		// 		if(value === current.value){
		// 			return true
		// 		} else if(value > current.value){
		// 				if(current.right === null) {
		// 					return false
		// 				} else current = current.right
		// 		} else if(value < current.value){
		// 			if (current.left === null){
		// 				return true
		// 			} else current =  current.left
		// 		}
		// 	}
		// }
}

let tree  = new Tree(10)

tree.addLeaf(11)
tree.addLeaf(11)
tree.addLeaf(11)
console.log(';sad');
