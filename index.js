var recipes = { ingredients: 'measurment' };

function updateObjectWithKeyAndValue(object, key, value) { //non destructive updates original object
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
// modifies the original object

function deleteFromObjectByKey(object, key){
      var newObject = Object.assign({}, object);
   newObject;
   delete newObject[key];
   return newObject;
}
//assigns a new object and modifies the new object

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
// modifies the original object