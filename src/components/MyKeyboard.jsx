import React from "react";
import { View, Text } from "react-native";

import Button from "./Button.jsx";

import { Styles } from "../utilities/GlobalStyles";
import { Colors } from "../utilities/Fonts.js"

export default MyKeyboard = () => {

    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState(null);


    const handleNumberPress = (buttonValue) => {
        if (firstNumber.length < 10) {
          setFirstNumber(firstNumber + buttonValue);
        }
      };
    
      const handleOperationPress = (buttonValue) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
      };
    
      const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
      };


      const firstNumberDisplay = () => {
        if (result !== null) {
            return <Text style={result < 99999 ? [Styles.screenFirstNumber, {color: Colors.result}] : [Styles.screenFirstNumber, {fontSize: 50, color: Colors.result}]}>{result?.toString()}</Text>; 
        }
        if (firstNumber && firstNumber.length < 6) {
          return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
        }
        if (firstNumber === "") {
          return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
          return (
            <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
              {firstNumber}
            </Text>
          );
        }
        if (firstNumber.length > 7) {
          return (
            <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
              {firstNumber}
            </Text>
          );
        }
      };
    
      const getResult = () => {
          switch (operation) {
            case "+":
                clear();
                setResult(parseInt(secondNumber) + parseInt(firstNumber));
                break;
            case "-":
                clear();
                setResult(parseInt(secondNumber) - parseInt(firstNumber));
                break;
            case "*":
                clear();
                setResult(parseInt(secondNumber) * parseInt(firstNumber));
                break;
            case "/":
                clear();
                setResult(parseInt(secondNumber) / parseInt(firstNumber));
                break;
            default:
                clear();
                setResult(0);
                break;
            }
        };


    return (
        <View style={{ flex : 1, backgroundColor : Colors.black }}>
            
            {/** Area 1 : Cal. Screen */}
            <View style={{ 
                width : '100%', height : '33%',
                justifyContent: "flex-end",
                alignSelf: "center",

                // borderColor : Colors.white, borderWidth : 1,

                paddingLeft : 5,
                paddingRight : 10,
            }}>

                
                    <Text style={Styles.screenSecondNumber}>
                        {secondNumber}
                        <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
                        </Text>
                    {firstNumberDisplay()}
            </View>


            {/** Area 2 : KeyBoard */}
            <View style={{ 
                width : '100%', height : '67%',
                // borderColor : Colors.white, borderWidth : 1,
                justifyContent : 'center',
                alignItems : 'center',
            }}>

                <View style={Styles.row}>
                    <Button title="C" isGray onPress={clear} />
                    <Button title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
                    <Button title="％" isGray onPress={() => handleOperationPress("％")} />
                    <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />
                </View>
                <View style={Styles.row}>
                    <Button title="7" onPress={() => handleNumberPress("7")} />
                    <Button title="8" onPress={() => handleNumberPress("8")} />
                    <Button title="9" onPress={() => handleNumberPress("9")} />
                    <Button title="×" isBlue onPress={() => handleOperationPress("*")} />
                </View>
                <View style={Styles.row}>
                    <Button title="4" onPress={() => handleNumberPress("4")} />
                    <Button title="5" onPress={() => handleNumberPress("5")} />
                    <Button title="6" onPress={() => handleNumberPress("6")} />
                    <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
                </View>
                <View style={Styles.row}>
                    <Button title="1" onPress={() => handleNumberPress("1")} />
                    <Button title="2" onPress={() => handleNumberPress("2")} />
                    <Button title="3" onPress={() => handleNumberPress("3")} />
                    <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
                </View>
                <View style={Styles.row}>
                    <Button title="." onPress={() => handleNumberPress(".")} />
                    <Button title="0" onPress={() => handleNumberPress("0")} />
                    <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
                    <Button title="=" isBlue onPress={() => getResult()} />
                </View>

            </View>

        </View>
    )
}

