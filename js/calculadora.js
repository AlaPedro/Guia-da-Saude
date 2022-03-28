function calcularDados (){

    let dataSexo = document.querySelector('input[name="sexo"]:checked').value

    let dataPeso = Number( document.getElementById(`peso`).value)
    
    let dataAltura = Number ( document.getElementById (`altura`).value)
    
    let dataIdade = Number  (document.getElementById (`idade`).value)
    
    let dataAtividade = Number (document.getElementById (`atividade`).value)

    let dadosPessoaisTS = `sexo ${dataSexo} peso ${dataPeso} altura ${dataAltura} idade ${dataIdade} atividade ${dataAtividade}`
            console.log (dadosPessoaisTS);

    if (dataSexo === 'H') {
          let taxaMetabolicaOld = (66 + (13.7 * dataPeso) + (5 * dataAltura) - (6.8 * dataIdade)) * dataAtividade;
          let taxaMetabolicaBasal = Math.round (taxaMetabolicaOld)

          let resultado = document.getElementById ('resultado')
          console.log (resultado)

          document.getElementById('resultado-box').style.display = 'flex';

          document.getElementById('btn-cal-remove').style.display = 'block';

          resultado.innerHTML = `Sua taxa metabolica basal é: <b> ${taxaMetabolicaBasal} Calorias </b>`
      }

      else {
          let taxaMetabolicaOld = (665 + (9.6 * dataPeso) + (1.8 * dataAltura) - (4.7 * dataIdade)) * dataAtividade;
          let taxaMetabolicaBasal = Math.round (taxaMetabolicaOld)

          let resultado = document.getElementById ('resultado')
          console.log (resultado)

          document.getElementById('resultado-box').style.display = 'flex';
            
          resultado.innerHTML = `Sua taxa metabolica basal é: <b> ${taxaMetabolicaBasal} Calorias </b>`
      }
};


function perderPeso (){

  let dataSexo = document.querySelector('input[name="sexo"]:checked').value

  let dataPeso = Number( document.getElementById(`peso`).value)
  
  let dataAltura = Number ( document.getElementById (`altura`).value)
  
  let dataIdade = Number  (document.getElementById (`idade`).value)
  
  let dataAtividade = Number (document.getElementById (`atividade`).value)

  let dadosPessoaisTS = `sexo ${dataSexo} peso ${dataPeso} altura ${dataAltura} idade ${dataIdade} atividade ${dataAtividade}`
          console.log (dadosPessoaisTS);

  if (dataSexo === 'H') {
        let taxaMetabolicaOld = ((66 + (13.7 * dataPeso) + (5 * dataAltura) - (6.8 * dataIdade)) * dataAtividade) * (0.8);
        let taxaMetabolicaBasal = Math.round (taxaMetabolicaOld)
        console.log(taxaMetabolicaBasal)

        let novoResultado = document.getElementById ('novoResultado')
        console.log (novoResultado)

        document.getElementById('btns-results').style.display = 'none';

        novoResultado.innerHTML = `Seu objetivo diário é de: <b> ${taxaMetabolicaBasal} Calorias </b>`
    }

    else {
        let taxaMetabolicaOld = ((665 + (9.6 * dataPeso) + (1.8 * dataAltura) - (4.7 * dataIdade)) * dataAtividade) * (0.8);
        let taxaMetabolicaBasal = Math.round (taxaMetabolicaOld)

        let novoResultado = document.getElementById ('novoResultado')
        console.log (novoResultado)

        document.getElementById('btns-results').style.display = 'none';

        novoResultado.innerHTML = `Seu objetivo diário é de: <b> ${taxaMetabolicaBasal} Calorias </b>`
    }
};

function ganharPeso (){

  let dataSexo = document.querySelector('input[name="sexo"]:checked').value

  let dataPeso = Number( document.getElementById(`peso`).value)
  
  let dataAltura = Number ( document.getElementById (`altura`).value)
  
  let dataIdade = Number  (document.getElementById (`idade`).value)
  
  let dataAtividade = Number (document.getElementById (`atividade`).value)

  let dadosPessoaisTS = `sexo ${dataSexo} peso ${dataPeso} altura ${dataAltura} idade ${dataIdade} atividade ${dataAtividade}`
          console.log (dadosPessoaisTS);

  if (dataSexo === 'H') {
        let taxaMetabolicaOld = ((66 + (13.7 * dataPeso) + (5 * dataAltura) - (6.8 * dataIdade)) * dataAtividade) * (1.2);
        let taxaMetabolicaBasal = Math.round (taxaMetabolicaOld)
        console.log(taxaMetabolicaBasal)

        let novoResultado = document.getElementById ('novoResultado')
        console.log (novoResultado)

        document.getElementById('btns-results').style.display = 'none';

        novoResultado.innerHTML = `Seu objetivo diário é de: <b> ${taxaMetabolicaBasal} Calorias </b>`
    }

    else {
        let taxaMetabolicaOld = ((665 + (9.6 * dataPeso) + (1.8 * dataAltura) - (4.7 * dataIdade)) * dataAtividade) * (1.2);
        let taxaMetabolicaBasal = Math.round (taxaMetabolicaOld)

        let novoResultado = document.getElementById ('novoResultado')
        console.log (novoResultado)

        document.getElementById('btns-results').style.display = 'none';

        novoResultado.innerHTML = `Seu objetivo diário é de: <b> ${taxaMetabolicaBasal} Calorias </b>`
    }
};


    
        // Remover dados btn

        function removeData () {
            console.log('Remove data')
            document.location.reload(true);
        }