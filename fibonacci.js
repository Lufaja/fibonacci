function fib(n=20){
    var a = 1;
    var b = 0;
    var c = 0;
    for (var i=1; i <= n; i++){
        c = a + b; 
        a = b;
        b = c;
        console.log(c);
    };
}
fib()