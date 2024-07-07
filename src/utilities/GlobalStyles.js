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
    
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },


    // screen styles
    screenFirstNumber: {
        fontSize: 66,
        fontFamily: FontFamily.SFProRoundedSemibold,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },

    screenSecondNumber: {
        fontSize: 40,
        fontFamily: FontFamily.SFProRoundedRegular,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
})