const phoneOptions = {
    "Nokia": 20,
    "Free phone": 0,
    "Samsung": 699,
    "iPhone 12": 799,
    "Google phone": 599,
    "iPhone 12 Pro": 1199
}; 

function sortByPrice(object){
    let newList = [];
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            newList.push({
              'Phone': property,
              'price': object[property]
            });
        }
    }
    newList.sort(function(a,b){ return b.price - a.price;});
    return newList;
}

console.log(sortByPrice(phoneOptions));