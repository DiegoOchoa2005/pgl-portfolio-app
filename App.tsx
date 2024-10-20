import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Card } from "./components/Card";
import Box from "./components/Box";
import { boxes } from "./data/BoxData";
import { COLORS } from "./styles/Color";
import { Audio } from "expo-av";
const screenWidth = Dimensions.get("window").width;
const screenHeigth = Dimensions.get("window").height;
export default function App() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [displayQR, setDisplayMyQR] = useState(false);
  const [originalImage, setOriginalImage] = useState(true);
  const [sandyImage, setImage] = useState(
    require("./assets/img/sandynormal.png")
  );
  const handleQR = () => setDisplayMyQR(!displayQR);
  const handleSandyImage = () => {
    if (originalImage) {
      playSound();
      setImage(require("./assets/img/sandycacheteada.png"));
    } else {
      setImage(require("./assets/img/sandynormal.png"));
    }
    setOriginalImage(!originalImage);
  };

  useEffect(() => {
    const loadSound = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require("./sounds/cachetada.mp3")
        );
        setSound(sound);
      } catch (error) {
        console.error("Error al cargar el sonido:", error);
      }
    };

    loadSound();
  }, []);

  const playSound = async () => {
    try {
      if (sound != null) {
        await sound.replayAsync();
      }
    } catch (error) {
      console.error("Error al reproducir el sonido:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ExpoStatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Portfolio App</Text>
        <View style={styles.headerButtons}>
          <Pressable
            style={styles.pressableButton}
            onPress={() => setDisplayMyQR(false)}
          >
            <Text style={styles.pressableText}>Mi info</Text>
          </Pressable>
          <Pressable style={styles.pressableButton} onPress={() => handleQR()}>
            <Text style={styles.pressableText}>Mi Repo</Text>
          </Pressable>
        </View>
      </View>
      {displayQR ? (
        <View style={styles.body}>
          <View style={styles.repoContainer}>
            <View style={styles.qrCode}>
              <QRCode
                size={180}
                value="https://github.com/DiegoOchoa2005/pgl-portfolio-app"
              />
            </View>
            <View style={styles.cuteDraw}>
              <TouchableOpacity onPress={handleSandyImage} activeOpacity={1}>
                <Image style={styles.sandyImage} source={sandyImage} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.body}>
          <View style={styles.bodyCard}>
            <Card
              avatar={require("./assets/SofyanAmrabat.jpg")}
              title="Descripción sobre mí!"
              description="Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
              prácticas para mis queridos alumnos"
            />
          </View>
          <View style={styles.boxTitle}>
            <Text style={styles.boxTitleInfo}>cosas que me gustan mucho:</Text>
          </View>
          <View style={styles.boxList}>
            <FlatList
              data={boxes}
              renderItem={({ item }) => (
                <Box description={item.description} image={item.image} />
              )}
              keyExtractor={(_item, index: number) => `${index}`}
            />
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
  header: {
    display: "flex",
    width: screenWidth,
    height: 65 + (StatusBar.currentHeight as number),
  },
  headerTitle: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28,
    padding: 8,
  },
  headerButtons: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "space-between",
    padding: 5,
  },
  pressableButton: {
    padding: 5,
    borderRadius: 5,
    marginHorizontal: "auto",
    backgroundColor: COLORS.backgroundColor,
  },
  pressableText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
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
  boxList: {
    width: 380,
    height: screenHeigth - 386,
    maxWidth: 380,
    maxHeight: screenHeigth - 386,
  },
  boxTitle: {
    backgroundColor: "cyan",
    width: 310,
    maxWidth: 310,
    padding: 5,
    marginBottom: 5,
  },
  boxTitleInfo: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 18,
    textAlign: "center",
  },
  repoContainer: {
    display: "flex",
    backgroundColor: "pink",
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
