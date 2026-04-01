function counter(){
    let cnt = 0;
    function increment()
    {
        cnt++;
        console.log(cnt);
        
    }

    return increment;
}


let cnter = counter();

console.log(cnter);

cnter();

cnter();

