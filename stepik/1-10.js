function containsElement(arr, element) {
	console.log(arr.find(el => el === element));
	return (arr.find(el => el === element)===undefined) ? false : true;
}

let arr =[1,2,3];
let el = 1;
// console.log(containsElement(arr, el))




// 1.2 Task5
//---------------------------------
// Напишите функцию, которая в качестве аргумента получает массив из продуктов и возвращает массив из двух значений. 
// Первое значение - количество товаров с оценкой больше 4.5, 
// второе значение - количество товаров с оценкой меньше, либо равно 4.5.
const products = [
	{
			"id": 3,
			"title": "Фотокамера Canon EOS Rebel T7i",
			"price": 749,
			"mark": 4.3
	},
	{
			"id": 4,
			"title": "Наушники Sony WH-1000XM4",
			"price": 349,
			"mark": 4.7
	}
]
function handler() {
	return products.reduce((acc,{marks}) => {
		acc.push(((acc[marks]) ? acc[marks]+1 : 1))
			return acc


			//  if(acc[el.mark] < 4.5) {
			// 	acc[el.mark] += 1
			//  }
	},[])
}

console.log(handler());


const euros = [29.76, 41.85, 46.5];
const doubled = euros.reduce((total, amount) => {
  total.push(amount * 2);
  return total;
}, []);
doubled // [59.52, 83.7, 93]