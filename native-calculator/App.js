import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import calcReducer from './reducers';
import { StyleSheet, View } from 'react-native';
import Calc from "./Components/Calc";

// Baseado em https://codepen.io/Emperor359/pen/JKgzax

const store = createStore(calcReducer);

// Funcao para mapear estado em props
function mapStateToProps(state) {
  return{
    value: state.value,
    btns: state.btns
  }
}

// Funcao para mapear chamadas da funcao reducer em props
function mapDispatchToProps(dispatch) {
  return{
    addElem: (text) => { // Para adicionar elemento na expressao
      dispatch({
        type: 'ADD_ELEM',
        text
      })
    },
    remElem: () => { // Para remover ultimo elemento da expressao
      dispatch({
        type: 'REM_ELEM'
      })
    },
    clear: () => { // Para limpar expressao
      dispatch({
        type: 'CLEAR'
      })
    },
    equal: (value) => { // Para calcular expressao
      dispatch({
        type: 'EQUAL',
        value
      })
    }
  }
}

// Conectar com o componente Calc
const CalcConnected = connect(mapStateToProps, mapDispatchToProps)(Calc);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CalcConnected/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
