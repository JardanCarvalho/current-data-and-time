function getData() {
    const data = new Date();

    let diaSemana = (data) => {
        let diaDaSemana = data.getDay();
        switch (diaDaSemana) {
            case 0:
                diaDaSemana = "Domingo";
                return diaDaSemana;
            case 1:
                diaDaSemana = "Segunda";
                return diaDaSemana;
            case 2:
                diaDaSemana = "Terça";
                return diaDaSemana;
            case 3:
                diaDaSemana = "Quarta";
                return diaDaSemana;
            case 4:
                diaDaSemana = "Quinta";
                return diaDaSemana;
            case 5:
                diaDaSemana = "Sexta";
                return diaDaSemana;
            case 6:
                diaDaSemana = "Sábado";
                return diaDaSemana;
        };
    };

    let dia = data.getDate();
    if (dia < 10) {
        dia = `0${dia}`
    }

    let mes = (data) => {
        let mes = data.getMonth();
        switch (mes) {
            case 0:
                mes = "janeiro";
                return mes;
            case 1:
                mes = "fevereiro";
                return mes;
            case 2:
                mes = "março";
                return mes;
            case 3:
                mes = "abriu";
                return mes;
            case 4:
                mes = "maio";
                return mes;
            case 5:
                mes = "junho";
                return mes;
            case 6:
                mes = "julho";
                return mes;
            case 7:
                mes = "agosto";
                return mes;
            case 8:
                mes = "setembro";
                return mes;
            case 9:
                mes = "outubro";
                return mes;
            case 10:
                mes = "novembro";
                return mes;
            case 11:
                mes = "dezembro";
                return mes;
        };
    };

    const ano = data.getFullYear();

    let horas = data.getHours();
    if (horas < 10) {
        horas = `0${horas}`;
    };

    let minutos = data.getMinutes();
    if (minutos < 10) {
        minutos = `0${minutos}`;
    };

    return `${diaSemana(data)}, ${dia} de ${mes(data)} de ${ano} <br/> ${horas}:${minutos}`;
}

function printDate() {
    let paragrafo = document.querySelector("#h1-data");
    paragrafo.innerHTML = getData();
}
printDate();