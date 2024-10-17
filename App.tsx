import { useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Card } from "./components/Card";
import BoxData from "./components/Box";
import { boxes } from "./data/BoxData";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.firsttoprowContainer}>My Portfolio App</Text>
        <View style={styles.rowTopSecondContainer}>
          <Pressable
            style={styles.buttonruta}
            onPress={() => setDisplayMyQR(true)}
          >
            <Text
              style={{
                ...{
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                },
                ...styles.shadoxboxing,
              }}
            >
              Mi info
            </Text>
          </Pressable>
          <Button
            onPress={() => setDisplayMyQR(false)}
            title="Mi Repo"
            color="light-gray"
            accessibilityLabel="Un botón pal QR"
          />
        </View>
      </View>
      {displayMyQR ? (
        <View style={styles.bodystails}>
          <View>
            <Card
              avatar={require("./assets/SofyanAmrabat.jpg")}
              title="Descripción sobre mí!"
              description="Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
              prácticas para mis queridos alumnos"
            />
            <Text
              style={{
                color: "beriblak",
                fontWeight: "900",
                textTransform: "capitalize",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              cosas que me gustan mucho:
            </Text>
            <FlatList
              data={boxes}
              renderItem={({ item }) => (
                <BoxData description={item.description} image={item.image} />
              )}
              keyExtractor={(_item, index: number) => `${index}`}
            />
          </View>
        </View>
      ) : (
        <View style={styles.bodystails}>
          <View style={styles.CentrarcodigoQR}>
            <QRCode value="https://github.com/adhernea" />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  firsttoprowContainer: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  rowTopSecondContainer: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonruta: {
    width: "50%",
  },
  bodystails: {
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  CentrarcodigoQR: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  shadoxboxing: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
