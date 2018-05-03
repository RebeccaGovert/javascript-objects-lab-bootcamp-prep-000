var recipes = { ingredients: 'measurment' };

function updateObjectWithKeyAndValue(object, key, value) { //non destructive updates object
  return Object.assign(object, { [key]: value });
}

function updateObjectWithKeyAndValue (object, key, value) { // non destructive gives new object with update
 var newObj = Object.assign({}, object, { [key]: value });
 return newObj;
}



