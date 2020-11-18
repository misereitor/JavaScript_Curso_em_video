let num = [8,4,6,7,5,4,1,7,5,5,4]
for(cont=0;cont<num.length;cont++){
    console.log(`O valor ${num[cont]} está na posição ${cont}`)
}

for(let cont1 in num){
    console.log(`O valor ${num[cont1]} está na posição ${cont1}`)
}