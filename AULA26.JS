function compararValores(asia,europa) {
    let comparacoes =[]; if(asia.length = europa.lenght){
      for(let i=0;i<asia.length; i++){ let comparacao = asia[i] = europa[i];
      comparacoes.push(comparacao);}
    }
  }
  
  const alicia = [23, 69, 32];
  const bob = [12, 67, 43];
  function encontrarGanhador(a,b){
    let pontosAlicia = 0;
    let pontosBob =0;
    if(alicia.length = bob.length){
      if(a[i] > b[i]) {
        pontosAlicia ++;
      } else if (a[i] < b[i]) {
        pontosBob += 1;
      } 
    }
    return(pontosAlicia > pontosBob)?'Alicia com ${pontosAlicia} pontos' :'Bob com ${pontosBob}';
  }
  console.log('OGanhador é: ${encontrarGanhador(alicia, bob)}');



  