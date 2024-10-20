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
  backgroundColorPrimary?: string;
  backgroundColorSecondary?: string;
  backgroundColorTertiary?: string;
  textColorPrimary?: string;
  textColorSecondary?: string;
};

export const Card = ({
  avatar,
  title,
  description,
  backgroundColorPrimary,
  backgroundColorSecondary,
  backgroundColorTertiary,
  textColorPrimary,
  textColorSecondary,
  borderColor,
}: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardAvatar}>
        <Image style={styles.avatar} source={avatar} />
      </View>
      <View
        style={[
          styles.cardInfo,
          { backgroundColor: backgroundColorPrimary, borderColor },
        ]}
      >
        <Text
          style={[
            styles.cardTitle,
            {
              color: textColorPrimary,
              backgroundColor: backgroundColorSecondary,
              borderColor,
            },
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.cardDescription,
            {
              color: textColorSecondary,
              backgroundColor: backgroundColorTertiary,
            },
          ]}
        >
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
    height: "auto",
    maxWidth: 380,
  },
  cardInfo: {
    display: "flex",
    flexDirection: "column",
    borderStyle: "dashed",
    borderWidth: 1,
    marginHorizontal: "auto",
    marginTop: 6,
    marginBottom: 6,
    padding: 5,
    borderRadius: 10,
    maxWidth: 390,
    height: 110,
    maxHeight: 110,
  },
  cardAvatar: {
    marginHorizontal: "auto",
    paddingTop: 10,
  },
  cardTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardDescription: {
    padding: 5,
    fontSize: 16,
    textAlign: "justify",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
