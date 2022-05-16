import {combineReducers} from 'redux'

//Estado default de la store
const defaultHora = []

export function deletehora(state = defaultHora, hora) {
    hora = null
    //alert("Horario asignado")
    return state
}

//Importando la funcion horario
const servicesApp = combineReducers({
    deletehora
})

export default servicesApp