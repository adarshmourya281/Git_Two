let number=11;
factor=0;
for(let i=1;i<=N;i++){
    if(number%i==0){
        factor++;
    }
}
if(factor==2){
    console.log(number,"is Prime");
}else{
    console.log(number,"Not Prime");
}