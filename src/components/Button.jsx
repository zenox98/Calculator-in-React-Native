import { TouchableOpacity, Text } from "react-native";
import { Colors, FontFamily } from "../utilities/GlobalStyles.js";
import { Styles } from "../utilities/GlobalStyles.js";

export default Button = ({title, onPress, isBlue, isGray, isRed}) => {

    return (
        <TouchableOpacity
            style={
                isBlue ? Styles.btnBlue : 
                isGray ? Styles.btnGray :
                isRed ? Styles.btnRed : Styles.btnDark
            }
            onPress={onPress}
        >
            <Text 
               style={
                   isBlue || isGray ? Styles.smallTextLight : Styles.smallTextDark 
            }
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}