var recipes = { ingredients: 'measurment' };

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [object]: key });
}

function updateObjectWithKeyAndValue (object, key, value) {
 var newObj = Object.assign({}, object, { [key]: value });
 return newObj;
}


