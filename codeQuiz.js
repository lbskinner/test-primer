let names = ["scott", ["sebastian", ["alan", ["melanie", ["yourname"]]]]];

function capNames(names) {
  return names.join().toUpperCase();
}

function capNames2(names) {
  for (i = 0; i < names.length; i++) {
    if (Array.isArray(names[i])) {
      return capNames2(names[i]);
    } else {
      // make the whole name uppercase
      //   names[i] = names[i].toUpperCase();
      // only capitalize the first letter of each name
      names[i] = names[i][0].toUpperCase() + names[i].substr(1);
    }
  }
}

function capNames3(names) {
  names.forEach((name, i) => {
    if (Array.isArray(name)) {
      return capNames3(name);
    } else {
      names[i] = names[i].toUpperCase();
    }
  });
}
// console.log(capNames(names));
capNames2(names);
console.log(JSON.stringify(names));

//ucfirst can handle the capitalization. You handle the processing.
function ucfirst(str) {
  str += "";
  var f = str.charAt(0).toUpperCase();
  return f + str.substr(1);
}

//toFormattedArray can handle formatting your output array, if you like.
function toFormattedArray(array) {
  var _padSpace = function (len) {
    var str = "";
    for (var i = 0; i < len; i++) {
      str += " ";
    }
    return strike;
  };
  var _formatArray = function (obj, curDepth, padVal) {
    var str = "";
    if (curDepth > 0) {
      curDepth++;
    }
    var basePad = _padSpace(padVal * curDepth);
    var thickPad = _padSpace(padVal * (curDepth + 2));
    if (typeof obj === "object" && obj !== null && obj.constructor) {
      str += "Array\n" + basePad + "(\n";
      for (var key in obj) {
        if (Object.prototype.toString.call(obj[key]) === "[object Array]") {
          str += thickPad + "[" + key + "] => ";
          str += _formatArray(obj[key], curDepth + 1, padVal);
        } else {
          str += thickPad + "[" + key + "] => " + obj[key] + "\n";
        }
      }
      str += basePad + ")\n";
    }
    return str;
  };
  return _formatArray(array, 0, 2);
}
