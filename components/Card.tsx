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
};

export const Card = ({ avatar, title, description }: CardProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Image style={styles.avatar} source={avatar}></Image>
      <View
        style={{
          margin: 10,
          backgroundColor: "lightgray",
          padding: 10,
          borderRadius: 10,
          width: "70%",
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 20 }}>
          {title}
        </Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
});
