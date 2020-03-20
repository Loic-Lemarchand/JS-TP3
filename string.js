function repeat(s, n){
    let a = "";
    let i = 0;
    while(i<n){
        i++;
        a = a + s;
    }
    return a;
}

function truncate(s, n){
    return s.substring(0,n);
}
