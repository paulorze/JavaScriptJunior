// Ordenar las tareas de Cofla y mostrar la tabla de horarios para 14 días. (En este no había entendido la consigna así que terminé viendo la respuesta antes de hacer mi versión)

const estudio = "100 minutos de Estudio";
const tarea = "100 minutos de Tarea";
const descanso = "10 minutos de Descanso";
const quehaceres = "30 minutos de Quehaceres de la casa";
const trabajo = "240 minutos de Trabajo";

for (let index = 0; index < 14; index++) {
    if (index == 0) {
        console.group(`Semana 1`)
    }
    console.groupCollapsed(`Día ` + (index + 1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(quehaceres);
    console.log(tarea);
    console.groupEnd();
    
    if (index == 6) {
        console.groupEnd();
        console.group(`Semana 2`);
    }
}

