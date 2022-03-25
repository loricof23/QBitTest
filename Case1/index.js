const fruits = [
  {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10
  },
  {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20
  },
  {
    fruitId: 3,fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50
  },
  {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100
  },
  {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10
  },
  {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20
  },
  {
    fruitId: 5,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150
  }
]


function getFruits(passedFruits) {
  const result = [];

  for(let i = 0; i < passedFruits.length; i++){
    let text = passedFruits[i].fruitName;
    let lowerCasedText = text.toLowerCase();
    if (!result.includes(lowerCasedText)) {
      result.push(lowerCasedText);   
    }
  }
  return result;
}

function ListFruitInFruitType(passedFruits) {
  const result = {
    IMPORT: [],
    LOCAL: [],
  }
   for(let i = 0; i < passedFruits.length; i++){
     let text = passedFruits[i].fruitName;
     let lowerCasedText = text.toLowerCase();
     if (passedFruits[i].fruitType === "IMPORT"){
       if (!result.IMPORT.includes(lowerCasedText)) {
        result.IMPORT.push(lowerCasedText);   
        }
     } else {
        if (!result.LOCAL.includes(lowerCasedText)) {
        result.LOCAL.push(lowerCasedText);   
        }
     }
  }
  return result;
}

function totalStock(passedFruits) {
  const result = {
    IMPORT: 0,
    LOCAL: 0,
  };

  for(let i = 0; i < passedFruits.length; i++) {
  
    if (passedFruits[i].fruitType === "IMPORT"){
      result.IMPORT += passedFruits[i].stock;
    } else {
      result.LOCAL += passedFruits[i].stock;
    }
  }

  return result;
};

console.log(getFruits(fruits));
console.log(ListFruitInFruitType(fruits));
console.log(totalStock(fruits));