/*function signature/sample */
function gonoVote(array) {
        if(Array.isArray(array))
        {
            let cntHa = 0 , cntNa = 0;
            for(let i = 0; i < array.length; i++)
            {
                if(array[i] == "ha") cntHa++;
                if(array[i] == "na") cntNa++;
                
                console.log(array[i]);
                
            }
            if(cntHa > cntNa) return true;
            if(cntHa == cntNa) return "equal";
            else return false;
            

        }
        else return "Invalid";
        
        
        
}


gonoVote([ 3, 4, 5 ]);

