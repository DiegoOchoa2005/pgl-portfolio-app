import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

export type BoxProps = {
  description: string;
  image: ImageSourcePropType;
  borderColor?: string;
  backgroundColorPrimary?: string;
  backgroundColorSecondary?: string;
  textColorPrimary?: string;
  textColorSecondary?: string;
};

const Box = ({
  description,
  image,
  borderColor,
  backgroundColorPrimary,
  backgroundColorSecondary,
  textColorPrimary,
}: BoxProps) => {
  return (
    <View style={[styles.container, { borderColor: borderColor }]}>
      <View
        style={[styles.boxInfo, { backgroundColor: backgroundColorPrimary }]}
      >
        <View
          style={[
            styles.boxTextContainer,
            {
              backgroundColor: backgroundColorSecondary,
              borderColor: borderColor,
            },
          ]}
        >
          <Text style={[styles.boxText, { color: textColorPrimary }]}>
            {description}
          </Text>
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
    borderStyle: "dashed",
    borderWidth: 1,
    margin: 4,
    marginHorizontal: 8,
  },
  boxTextContainer: {
    padding: 10,
    marginLeft: "auto",
    width: "auto",
    maxWidth: 260,
    borderWidth: 1,
    borderStyle: "dotted",
    borderRadius: 15,
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
});
