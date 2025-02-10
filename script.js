function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0;i<str.length;i++){
		if(str.charAt(i)==str.charAt(i+1)){
			return null;
		}
		else{
			return str.charAt(i);
		}
	}
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
