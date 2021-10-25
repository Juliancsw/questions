var sum_to_n_a = function(n) {
    // your code here
    let result = 0;
    for(let i=0; i<n+1; i++){
    	result += i;
    }
    return result;
};

var sum_to_n_b = function(n) {
    // your code here
    let result = 0, i=0;
    
   	while(i<n+1){
    	result += i;
      i++;
    }
    
    return result;
};

var sum_to_n_c = function(n) {
    // your code here
    
    if(n == 0){
    	return 0;
    } else {
    	return sum_to_n_c(n-1) + n;
    }
};