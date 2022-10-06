function encode(string) {
    let string2 = string;
    string2 = string2.replace(/a/g, '1');
    string2 = string2.replace(/e/g, '2');
    string2 = string2.replace(/i/g, '3');
    string2 = string2.replace(/o/g, '4');
    string2 = string2.replace(/u/g, '5');
    return string2;
  }
  function decode(string) {
    let string2 = string;
    string2 = string2.replace(/1/g, 'a');
    string2 = string2.replace(/2/g, 'e');
    string2 = string2.replace(/3/g, 'i');
    string2 = string2.replace(/4/g, 'o');
    string2 = string2.replace(/5/g, 'u');
    return string2;
  }