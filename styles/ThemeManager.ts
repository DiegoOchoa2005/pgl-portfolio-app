import { Dimensions, StatusBar, StyleSheet } from "react-native";
import { COLORS_DARK, COLORS_LIGHT } from "./Color";
const screenWidth = Dimensions.get("window").width;
const screenHeigth = Dimensions.get("window").height;
export const getStyles = (colorScheme: string) => {
  const getTheme = colorScheme === "light" ? COLORS_LIGHT : COLORS_DARK;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: getTheme.backgroundPrimary,
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      display: "flex",
      width: screenWidth,
      height: 65 + (StatusBar.currentHeight as number),
    },
    headerTitle: {
      backgroundColor: getTheme.backgroundSecondary,
      color: getTheme.textPrimary,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 28,
      padding: 8,
    },
    headerButtons: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: getTheme.backgroundTertiary,
      justifyContent: "space-between",
      padding: 5,
    },
    pressableButton: {
      padding: 5,
      borderRadius: 5,
      marginHorizontal: "auto",
      backgroundColor: getTheme.backgroundSecondary,
    },
    pressableText: {
      color: getTheme.textPrimary,
      fontWeight: "bold",
      textTransform: "uppercase",
    },

    switch: {
      marginVertical: "auto",
      height: 20,
    },
    body: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: screenWidth,
      height: screenHeigth - 130,
      maxWidth: screenWidth,
      maxHeight: screenHeigth - 130,
    },

    bodyCard: {
      marginTop: 25,
    },
    itemBackgroundPrimary: {
      backgroundColor: getTheme.backgroundPrimary,
      borderColor: getTheme.borderColor,
    },
    itemBackgroundSecondary: {
      backgroundColor: getTheme.backgroundSecondary,
    },
    itemBackgroundTertiary: {
      backgroundColor: getTheme.backgroundTertiary,
    },
    itemFontPrimary: {
      color: getTheme.textPrimary,
    },
    itemFontSecondary: {
      color: getTheme.textSecondary,
    },
    boxList: {
      width: 380,
      height: screenHeigth - 386,
      maxWidth: 380,
      maxHeight: screenHeigth - 386,
    },
    boxTitle: {
      backgroundColor: getTheme.backgroundSecondary,
      borderRadius: 20,
      borderColor: getTheme.borderColor,
      borderWidth: 1,
      borderStyle: "dashed",
      width: 310,
      maxWidth: 310,
      padding: 5,
      marginBottom: 5,
    },
    boxTitleInfo: {
      color: getTheme.textSecondary,
      fontWeight: "bold",
      textTransform: "uppercase",
      fontSize: 18,
      textAlign: "center",
    },
    repoContainer: {
      display: "flex",
      backgroundColor: getTheme.backgroundPrimary,
      height: screenHeigth,
      width: screenWidth,
      zIndex: -1,
    },
    qrCode: {
      alignItems: "center",
      alignContent: "center",
      marginTop: 80,
    },
    cuteDraw: {
      alignItems: "center",
    },
    sandyImage: {
      height: 520,
      width: screenWidth,
    },
  });
};
