import { StyleSheet } from "react-native";
import { Colors as myColors, FontFamily } from "./Fonts";

export const Styles = StyleSheet.create({
    
    // font styles
    smallTextDark: {
        fontSize: 24,
        color: myColors.white,
        fontFamily: FontFamily.SFProRoundedBold
    },

    smallTextLight: {
        fontSize: 24,
        color: myColors.white,
        fontFamily: FontFamily.SFProRoundedBold
    },

    // Buttons Styles
    btnDark: {
        width: 73,
        height: 80,
        borderRadius: 24,
        backgroundColor: myColors.grey2,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },

    btnBlue: {
        width: 75,
        height: 80,
        borderRadius: 24,
        backgroundColor: myColors.blue1,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },

    btnGray: {
        width: 73,
        height: 80,
        borderRadius: 24,
        backgroundColor: myColors.grey1,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },

    btnRed: {
        width: 73,
        height: 80,
        borderRadius: 24,
        backgroundColor: myColors.red,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },

    //--------------------------------------
    // screen styles
    //--------------------------------------
    // display_NumContainer : {
    //     width: '100%',
    //     height: 150,

    //     justifyContent: "flex-end",

    //     borderColor: myColors.white, borderWidth: 1,

    //     paddingRight: 10,
    // },
    
    
    display_Num : {
        textAlign: "right",
        fontSize: 60,
        fontFamily: FontFamily.SFProRoundedSemibold,
        color: myColors.gray,

        color: myColors.white
    },
})