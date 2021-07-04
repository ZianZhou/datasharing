let _ = {
  clamp(number, lower,upper){
    var lowerClampedValue = Math.max(number,lower);
    var clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start,end){
    if(end===undefined){
      end=start;
      start=0;
    }
    if(start>end){
      var temp=end;
      end=start;
      start=temp;
    }
    var isInRange = false;
    if(start<=number && number<end){
      isInRange=true;
    }
    return isInRange;
  },
  words(string){
    var words = string.split(' ');
    return words;
  },
  pad(string,length){
    if(length<=string.length){
      return string;
    }
    var startPaddingLength = Math.floor((length-string.length)/2);
    var endPaddingLength = length-string.length-startPaddingLength;
    var paddedString = ' '.repeat(startPaddingLength)+string+' '.repeat(endPaddingLength);
    return paddedString; 
  },
  has(object,key){
    var hasValue = object[key]===undefined?false:true;
    return hasValue;
  },
  invert(object){
    var invertedObject = {};
    for(let item in object){
      var originalValue = object[item];
      invertedObject[originalValue]=item;
    }
    return invertedObject;
  },
  findKey(object,predicate){
    for(let item in object){
      var value = object[item];
      var predicateReturnValue = predicate(value);
      if(predicateReturnValue){
        return item;
      } 
    }
    return undefined;
  },
  drop(array,n){
    if(n===undefined){
      n=1;
    }
    let droppedArray = array.slice(n, array.length);
    return droppedArray;
  },
  dropWhile(array,predicate){
    var dropNumber= array.findIndex((element,index)=>{
      return !predicate(element,index,array);
    });
    var droppedArray = this.drop(array,dropNumber);
    return droppedArray;
  },
  chunk(array,size){
    if(size===undefined){
      size=1;
    }
    var arrayChunks = [];
    let counter =0;
    for(let i=0;i<array.length;i+=size){
      var arrayChunk = array.slice(i,i+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
}




// Do not write or modify code below this line.
module.exports = _;
