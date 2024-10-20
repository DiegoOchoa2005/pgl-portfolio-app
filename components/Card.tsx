import React from "react";
import {
  ImageSourcePropType,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";

export type CardProps = {
  avatar: ImageSourcePropType;
  title: string;
  description: string;
  borderColor?: string;
  backgroundColor?: string;
  backgroundColorSecondary?: string;
  textColorPrimary?: string;
  textColorSecondary?: string;
};

export const Card = ({
  avatar,
  title,
  description,
  backgroundColor,
  textColorPrimary,
  textColorSecondary,
  borderColor,
}: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardAvatar}>
        <Image style={styles.avatar} source={avatar} />
      </View>
      <View style={[styles.cardInfo, { backgroundColor, borderColor }]}>
        <Text style={[styles.cardTitle, { color: textColorPrimary }]}>
          {title}
        </Text>
        <Text style={[styles.cardDescription, { color: textColorSecondary }]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    width: 380,
    height: 230,
    maxWidth: 380,
  },
  cardInfo: {
    display: "flex",
    flexDirection: "column",
    borderStyle: "dashed",
    borderWidth: 1,
    margin: 10,
    padding: 5,
    borderRadius: 10,
    maxWidth: 390,
    height: 100,
    maxHeight: 100,
  },
  cardAvatar: {
    marginHorizontal: "auto",
    paddingTop: 5,
  },
  cardTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
  },
  cardDescription: {
    fontSize: 16,
    textAlign: "justify",
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 30,
  },
});
