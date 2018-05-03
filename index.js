var recipes = { ingredients: 'measurment' };

function updateObjectWithKeyAndValue(object, key, value) { //non destructive updates object
  return Object.assign(object, { [key]: value });
}

function updateObjectWithKeyAndValue (object, key, value) { // non destructive gives new object with update
 var newObj = Object.assign({}, object, { [key]: value });
 return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
   delete Object[key];
  return Object;
}

function destructivelyUpdateObjectWithKeyAndValue