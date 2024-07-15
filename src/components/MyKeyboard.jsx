import React from "react";
import { View, Text, ScrollView, TextInput } from "react-native";

import Button from "./Button.jsx";

import { Styles } from "../utilities/GlobalStyles";
import { Colors } from "../utilities/Fonts.js"

export default MyKeyboard = () => {

  const [value, setValue] = React.useState('');
	const [bracketopen, setBracketOpen] = React.useState(false);

    
  const HandlePress = (val) => {
    // console.log('pressed : ', val);

    if (val == 'C') {
			setValue('')
		}
		
		else if (val == '=') {
			
			try {
				if (
					(value.match(/\(/g) || []).length 
					== 
					(value.match(/\)/g) || []).length
				) {

					if (
						value.slice(-1) == '+' 
						|| value.slice(-1) == '-' 
						|| value.slice(-1) == '*' 
						|| value.slice(-1) == '/'
					) {
						setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`)
					}
					else {
						setValue(`${eval(value.replace('()', '(0)') + '*1')}`)
					}
				}
			}
			
			catch (e) {
				setValue('Format Error')
			}
		}
	
		else if (val == '⌫') {
			setValue(value.slice(0, -1))
		}
	
		else if (val == '()') {
			
			if (value == '0') {
				setValue('(')
				setBracketOpen(true)
			}
			
			else if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/') {
				setValue(value + '(')
				setBracketOpen(true)
			}
			
			else {
				if (bracketopen == true) {
					setValue(value + ')')
					setBracketOpen(false)
				}
				else {
					setValue(value + '(')
					setBracketOpen(true)
				}
			}
		}
	
		else {
			if (value == '0') {
				if (val == '+' || val == '-' || val == '*' || val == '/' || val == '.' || val == '%') {
					setValue(value + val)
					}
				else {
					setValue(val)
				}
			}
				
			// console.log(val)
			
			else if (isNaN(val)) {
			// console.log(value.slice(-1))
				
				if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '.' || value.slice(-1) == '%') {
					setValue(value.slice(0, -1) + val)
				}
				else {
					setValue(value + val)
				}
			}
				
			else if (!isNaN(val)) {
				setValue(value + val)
			}
		}
	
	// end of handlePross code
	}


  return (
        <View style={{ flex : 1, backgroundColor : Colors.black }}>
            
            {/** Area 1 : Cal. Screen */}
            <View style={{ 
                width : '100%', height : 230,
                justifyContent: "flex-end",
                alignSelf: "center",								
                // borderColor : Colors.white, borderWidth : 1,
                justifyContent: "flex-start",

				paddingRight : 10
            }}>

				<TextInput
                	multiline
					scrollEnabled
					textAlign="right"
                  	showSoftInputOnFocus={false}
                  	
					style={Styles.display_Num}
                  	value={value}

					selectionColor={Colors.grey1}
                  	selectionState={{ start: value.length, end: value.length }}
                  	selectionHandleColor={Colors.blue1}
                />  
            </View>


            {/** Area 2 : KeyBoard */}
            <View style={{ 
                width : '100%', height : '67%',
                borderColor : Colors.grey2, borderTopWidth : 2,
                justifyContent : 'center',
                alignItems : 'center',
            }}>

                <View style={Styles.row}>
                    <Button title="C" isRed onPress={() => HandlePress("C")} />
                    <Button title="()" isGray onPress={() => HandlePress("()")} />
                    <Button title="%" isGray onPress={() => HandlePress("%")} />
                    <Button title="÷" isBlue onPress={() => HandlePress("÷")} />
                </View>
                <View style={Styles.row}>
                    <Button title="7" onPress={() => HandlePress("7")} />
                    <Button title="8" onPress={() => HandlePress("8")} />
                    <Button title="9" onPress={() => HandlePress("9")} />
                    <Button title="x" isBlue onPress={() => HandlePress("*")} />
                </View>
                <View style={Styles.row}>
                    <Button title="4" onPress={() => HandlePress("4")} />
                    <Button title="5" onPress={() => HandlePress("5")} />
                    <Button title="6" onPress={() => HandlePress("6")} />
                    <Button title="-" isBlue onPress={() => HandlePress("-")} />
                </View>
                <View style={Styles.row}>
                    <Button title="1" onPress={() => HandlePress("1")} />
                    <Button title="2" onPress={() => HandlePress("2")} />
                    <Button title="3" onPress={() => HandlePress("3")} />
                    <Button title="+" isBlue onPress={() => HandlePress("+")} />
                </View>
                <View style={Styles.row}>
                    <Button title="." onPress={() => HandlePress(".")} />
                    <Button title="0" onPress={() => HandlePress("0")} />
                    <Button title="⌫" onPress={() => HandlePress("⌫")} />
                    <Button title="=" isBlue onPress={() => HandlePress("=")} />
                </View>

            </View>

        </View>
    )
}

