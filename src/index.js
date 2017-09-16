module.exports = function multiply(first, second) {
  let result = [];


  for (let i = second.length - 1; i >= 0; i--) {
    let s = +second[i];
    let r = [];
    let mem = 0;
    for (let j = first.length - 1; j >= 0; j--) {
      let mul;
      let f = +first[j];
      mul = f * s + mem;
      mul = "" + mul;
      if (mul.length > 1) {
        r[j + 1] = mul[1];
        mem = +mul[0];
      } else {
        mem = 0;
        r[j + 1] = mul;
      }
      r[0] = "" + mem;
    }
    for (let k = 0; k < second.length - i - 1; k++) {
      r[r.length] = '0';
    }
    if (result.length === 0) {
      result = [].concat(r);
    } else {
      let c = 0;
      let d = [];
      for (let l = r.length - 1; l >= 0; l--) {
        let a;
        let sum = 0;
        if (r.length == result.length) {
          a = +result[l];
        } else {
          a = +result[l - 1];
        }
        let b = +r[l];
        if (!a) {
          sum = b + c;
        } else {
          sum = a + b + c;
        }
        sum = "" + sum;
        if (sum.length > 1) {
          d[l + 1] = sum[1];
          c = +sum[0];
        } else {
          c = 0;
          d[l + 1] = sum;
        }
        d[0] = "" + c;
      }
      result = [].concat(d);
    }
  }
  for (let m = 0; m < result.length; m++) {
    if (result[0] === "0") {
      result = result.slice(1, result.length);
    }
  }
  return result.join('');
}
