import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS } from "../styles/Color";

export type BoxProps = {
  description: string;
  image: ImageSourcePropType;
};

const Box = ({ description, image }: BoxProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxInfo}>
        <View style={styles.boxTextContainer}>
          <Text style={styles.boxText}>{description}</Text>
        </View>
        <View style={styles.boxImage}>
          <Image source={image} style={styles.img} />
        </View>
      </View>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    borderColor: COLORS.borderPrimary,
    borderStyle: "dashed",
    borderWidth: 1,
    margin: 4,
    marginHorizontal: 8,
    backgroundColor: COLORS.backgroundColor,
  },
  boxTextContainer: {
    padding: 10,
    marginLeft: "auto",
    maxWidth: 250,
  },
  boxText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  boxInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: COLORS.backgroundColor,
    padding: 10,
  },
  boxImage: {
    borderRadius: 50,
    marginLeft: "auto",
  },

  img: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  cosasQmeGustanMuxoEstails: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
  },
});
