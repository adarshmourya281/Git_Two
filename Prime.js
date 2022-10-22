let number=11;
factor=0;
for(let i=1;i<=N;i++){
    if(number%2==0){
        f++;
    }
}
if(factor==0){
    console.log(number,"is Prime");
}else{
    console.log(number,"Not Prime");
}