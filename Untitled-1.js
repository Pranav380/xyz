
let str = "naman";
let str2 = str;
function reverse(str){
    let i =0 j = str.length-1;
    while(i<j){
        let x= str[i];
        str[i]=str[j];
        str[j]=x;
   }
    console.log("reverse is: "+str);
}
if(str==str1)
    console.log("Palindrome");
else
    console.log("Not Palindrome");

function replaceCharacters(str, oldChar, newChar) {
    return str.split(oldChar).join(newChar);
}
console.log("After replaceing :"+ replaceCharacters(str1,n,r));
