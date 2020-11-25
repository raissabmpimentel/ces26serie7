// Estado padrao e botoes da calculadora
const calcState = {
    value: 0,
    btns: [ "1", "2", "3", "C", "4", "5", "6", "del", "7", "8", "9", "+", "0", ".", "=", "-", "(" ,")", "*", "/"]
} 

// Funcao reducer
function calcReducer(state = calcState, action) {
switch(action.type){
    case 'ADD_ELEM': // Para adicionar elemento na expressao
        return{
            ...state,
            value: state.value === 0 ? action.text : state.value + action.text // Adicionar texto a expressao
        }
    case 'CLEAR': // Para limpar expressao, retornando 0 no valor
        return{
            ...state,
            value: 0
        }
    case 'EQUAL': // Para calcular expressao
        var val = action.value
        try { // Tentar calcular expressao, se der erro val se mantera com expressao anterior
            val = eval(action.value)
        } catch (error) {
        }

        return{ // Retornar valor calculado ou a expressao anterior (caso haja erro)
            ...state,
            value: val
        }
        
    case 'REM_ELEM': // Para remover ultimo elemento da expressao
        return{
            ...state, // Se valor for 0 ou a expressao tem apenas um elemento, retornar o valor 0. Caso contrario, retornar a string removendo seu ultimo elemento
            value: (state.value === 0 || String(state.value).slice(0, -1) === '') ? 0 : String(state.value).slice(0, -1)
        }
    default:
        return state;
}
}

  export default calcReducer;