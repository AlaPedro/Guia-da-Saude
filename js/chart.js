        const labels = [];
      
        const data = {
          labels: labels,
          datasets: [{
            data: [],
            label: 'Monitoramento de peso',
            backgroundColor: 'rgb(0, 0, 0)',
            borderColor: 'rgb(255, 255, 255)',
            borderWidth: 5,
            tension: 0.1,    
          }]
        };
      
        const config = {
          type: 'line',
          data: data,
          options: {}
        };
      
        const myChart = new Chart(
        document.getElementById('myChart'),
        config
        );
        
        function addData(){
            const valor = document.getElementById('input-chart')
            .value

            const d = new Date();
            let diaAnoMes = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();

            config.data.labels.push(diaAnoMes);
            config.data.datasets.forEach((dataset => {
                dataset.data.push(valor);
            }));
            
            console.log('myChartUpdate agora')
            myChart.update();

          
            // SETANDO Local Storage 
            console.log('setando local storage')
            // setando no local storage a data
            localStorage.setItem('dadoData', JSON.stringify(config.data.labels))
            
            localStorage.setItem('dadoPeso', JSON.stringify(config.data.datasets))
  
        }

        const el = document.getElementById ('botao');
            el.addEventListener('click', () => (myChart), false);

            //GETANDO Local Storage
          
           function loadLocalStorage () {
            let resultadoData = localStorage.getItem('dadoData')
          
            resultadoData.forEach((item) => {
              config.data.labels.push(item)
            })
            
            myChart.update();
          }

            window.addEventListener("load", () => {loadLocalStorage()})

            window.addEventListener("load", console.log('Load Foi concluído'))

            


        
        