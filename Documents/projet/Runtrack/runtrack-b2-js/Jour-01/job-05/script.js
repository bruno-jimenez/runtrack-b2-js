function myPrimelist(limit) {
    
var primelist = [];
      
    for(var i = 1; i < limit; i++){
        if(limit%i === 1)
            
            primelist.push(i)
            
        else (limit%i === 0)
            continue ;
        
    }
    return primelist
}
