l1= ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '/', '.', '`', '_', '{', '}', '|', '<', '>', ',', '?', '"', "'", ':', ';', '=', ' ']

l2= ['~!', '!@', '@#', '#$', '$%', '%^', '^&', '&*', '*(', '()', '!!', '@@', '##', '$$', '%%', '^^', '&&', '**', '((', '@!', '#@', '$#', '%$', '^%', '&^', '*&', '`1', '12', '23', '34', '45', '56', '67', '78', '89', '90', '1`', '21', '32', '43', '54', '65', '76', '87', '98', '~(', '!*', '@&', '#^', '$5', '09', ')(', 'qw', 'we', 'er', 'rt', 'ty', 'yu', 'ui', 'io', 'op', 'qp', '`Q', '1W', '2E', '3R', '4T', '5Y', '6U', '7I', '8O', '9P', '0[', '[]', '=/', '9+', '?0', '``', '_=', '{%', '}%', '\\/', '<.', '>.', '..', '??', "''", '""', ';;', '::', '#+', '88']


function decode(text,l2){
    l=text.match(/.{1,2}/g)
    w=[]
    for(i=0;i<l.length;i++){
        console.log(Array.from(l2).indexOf("^^"))
        k=Array.from(l2).indexOf(l[i]);
        w.push(l1[k])
    }
    console.log(w.join(""))
    return w.join("");
}



function encode(text,l1){
    l=text.split("")
    console.log(l)
    w=[]
  
    for(i=0;i<l.length;i++){
        k=Array.from(l1).indexOf(l[i]);
        w.push(l2[k])
    }
    console.log(w.join(""))
    return w.join("")
}

//encode("hello",l1)  /// encode works
//document.getElementById("flat_hash").addEventListener("",e());
//document.getElementById("flat_decode").addEventListener('click',e2());
//document.getElementById("multi_hash").addEventListener('click',e3());
//document.getElementById("multi_decode").addEventListener('click',e4());

function e(){
    console.log("h")
    document.getElementById('flat_input').value = encode(document.getElementById("flat_input").value,l1);
}
function e2(){
    document.getElementById('flat_input').value = decode(document.getElementById("flat_input").value,l2);
}


function e3(){
    document.getElementById('multi_input').value = encode(document.getElementById("multi_input").value,l1);
}

function e4(){
    document.getElementById('multi_input').value = decode(document.getElementById("multi_input").value,l2);
}

