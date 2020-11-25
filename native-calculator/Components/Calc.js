import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

// Baseado em https://codepen.io/Emperor359/pen/JKgzax

class Calc extends Component {
    
    render(){
      return (
        <View style={styles.calcContainer}>
            <View style={styles.resultContainer}>
                <Text style={{textAlign: 'right', color: 'black', fontSize: 40}}>{this.props.value}</Text>
            </View>
            <View style={styles.buttonsContainer}>
            {this.props.btns.map((item, key) => {
                if(item === "C"){
                return(
                    <TouchableOpacity onPress={ this.props.clear.bind(this) } key={key} style={styles.appButtonContainer}><Text style={styles.appButtonText}>{item}</Text></TouchableOpacity>
                )
                } else if(item === "="){
                return(
                    <TouchableOpacity onPress={ this.props.equal.bind(this, this.props.value) } key={key} style={styles.appButtonContainer}><Text style={styles.appButtonText}>{item}</Text></TouchableOpacity>
                )
                }else if(item === "del"){
                    return(
                        <TouchableOpacity onPress={ this.props.remElem.bind(this) } key={key} title={item} style={styles.appButtonContainer}><Text style={styles.appButtonText}>{item}</Text></TouchableOpacity>
                    )
                } else {
                return(
                    <TouchableOpacity onPress={ this.props.addElem.bind(this, item) } key={key} title={item} style={styles.appButtonContainer}><Text style={styles.appButtonText}>{item}</Text></TouchableOpacity>
                )
                }
            })}
            </View> 
        </View>
      );
    }
    
  }
  
// Estilos customizados
const styles = StyleSheet.create({
    calcContainer: {
        backgroundColor: 'gray',
        marginTop: 150,
        padding: 8,
        flex: 1,
        },

    resultContainer: {
        backgroundColor: 'white',
        margin: '2%',
        borderRadius: 5,
    },
    
    // Baseado em https://github.com/deadcoder0904/react-native-redux-calculator/blob/master/src/components/Controls/styles.js
    buttonsContainer: {
        width: '100%',
        flexDirection: "row",
        flexWrap: "wrap",
        position: "relative",
    },

    // Baseado em https://blog.logrocket.com/creating-custom-buttons-in-react-native/
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: '2%',
        width: "20%",
    },
        appButtonText: {
        fontSize: 25,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
        },
});

  export default Calc;