import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Pressable,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  useColorScheme,
  Switch,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { Card } from "./components/Card";
import Box from "./components/Box";
import { boxes } from "./data/BoxData";
import { Audio } from "expo-av";
import { getStyles } from "./styles/ThemeManager";
export default function App() {
  const currentColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(currentColorScheme);
  const [styles, setStyles] = useState(getStyles(colorScheme || "light"));
  const [checked, setChecked] = useState(false);
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

  const toggleColorScheme = () => {
    setColorScheme((prevColorScheme) =>
      prevColorScheme === "light" ? "dark" : "light"
    );
  };

  useEffect(() => {
    setStyles(getStyles(colorScheme || "light"));
  }, [colorScheme]);

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
        <Text style={styles.headerTitle}>Mi Portafolio</Text>
        <View style={styles.headerButtons}>
          <Pressable
            style={styles.pressableButton}
            onPress={() => setDisplayMyQR(false)}
          >
            <Text style={styles.pressableText}>Información</Text>
          </Pressable>
          <Pressable style={styles.pressableButton} onPress={() => handleQR()}>
            <Text style={styles.pressableText}>Repositorio</Text>
          </Pressable>
          <Switch
            style={styles.switch}
            value={checked}
            onValueChange={(value) => {
              setChecked(value);
              toggleColorScheme();
            }}
          />
        </View>
      </View>
      {displayQR ? (
        <View style={styles.body}>
          <View style={styles.repoContainer}>
            <View style={styles.qrCode}>
              <QRCode
                size={180}
                value="https://github.com/DiegoOchoa2005/pgl-portfolio-app"
                logo={require("./assets/img/sandyLogo.png")}
                logoSize={30}
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
              avatar={require("./assets/img/avatar.webp")}
              title="Acerca de mi persona"
              description="Soy un estudiante de informática que le gusta romperse la cabeza para lograr lo que quiere, sin tener tiempo para dormir pero si para dibujar."
              backgroundColorPrimary={
                styles.itemBackgroundSecondary.backgroundColor
              }
              backgroundColorSecondary={
                styles.itemBackgroundPrimary.backgroundColor
              }
              backgroundColorTertiary={
                styles.itemBackgroundTertiary.backgroundColor
              }
              borderColor={styles.itemBackgroundPrimary.borderColor}
              textColorPrimary={styles.itemFontPrimary.color}
              textColorSecondary={styles.itemFontSecondary.color}
            />
          </View>
          <View style={styles.boxTitle}>
            <Text style={styles.boxTitleInfo}>Me gustan cosas como:</Text>
          </View>
          <View style={styles.boxList}>
            <FlatList
              data={boxes}
              renderItem={({ item }) => (
                <Box
                  description={item.description}
                  image={item.image}
                  borderColor={styles.itemBackgroundPrimary.borderColor}
                  backgroundColorPrimary={
                    styles.itemBackgroundSecondary.backgroundColor
                  }
                  textColorPrimary={styles.itemFontPrimary.color}
                  backgroundColorSecondary={
                    styles.itemBackgroundTertiary.backgroundColor
                  }
                />
              )}
              keyExtractor={(_item, index: number) => `${index}`}
            />
          </View>
        </View>
      )}
    </View>
  );
}
