function tempo(){

    var meses = ['Janeriro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    var data = new Date();
    var hr = data.getHours();
    var min = data.getMinutes();
    var sec = data.getSeconds();
    var dat = data.getDate();
    var yr = data.getFullYear();
   

    if(hr < 10){
        hr = '0' + hr;
    }

    if(sec < 10){
        sec = '0' + sec;
    }

    if(min < 10){
        min = '0' + min;
    }

    if(dat < 10){
        dat = '0' + dat;
    }

    var hour = hr;
    var tempo_hora = document.getElementById('hours');
    tempo_hora.innerHTML = hour;

    var minute = min;
    var tempo_minuto = document.getElementById('minutes');
    tempo_minuto.innerHTML = minute;

    var second = sec;
    var tempo_segundo = document.getElementById('seconds');
    tempo_segundo.innerHTML = second;

    var day = dat
    var data_dia = document.getElementById('days')
    data_dia.innerHTML = day

    var month = meses[data.getMonth()] 
    var data_mes = document.getElementById('months')
    data_mes.innerHTML = month

    var year = yr
    var data_ano = document.getElementById('years')
    data_ano.innerHTML = year

}
setInterval(tempo,500);