import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Notfication } from "../svgs/Notfication";
import { Search } from "../svgs/Search";
import { Logo } from "../svgs/Logo";
import { Play } from "../svgs/Play";
import { Add } from "../svgs/Add";
import { Card } from "../components/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
export default function Home() {
  const [top, setTop] = useState([]);
  const image = {
    uri: "https://w0.peakpx.com/wallpaper/616/347/HD-wallpaper-demon-slayer.jpg",
  };
  const styles = StyleSheet.create({
    buttonone: {
      width: 84,
      height: 32,
      backgroundColor: "#06C149",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
      gap: 5,
    },
    buttontwo: {
      width: 103,
      height: 32,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      borderWidth: 2,
      borderColor: "white",
      borderRadius: 100,
      gap: 5,
    },
  });
  const gettophits = async () => {
    const result: any = await axios.get(
      "https://kitsu.io/api/edge/anime?filter[categories]=trending"
    );
    setTop(result?.data.data);
  };
  useEffect(() => {
    gettophits();
  });

  return (
    <ScrollView>
      <View>
        <View>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={{
              height: 400,
            }}
          >
            <View
              style={{
                height: "50%",
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ paddingLeft: 20 }}>
                <Logo></Logo>
              </View>
              <View style={{ paddingRight: 20, flexDirection: "row", gap: 10 }}>
                <Search></Search>
                <Notfication></Notfication>
              </View>
            </View>
            <View
              style={{
                height: "50%",
                width: "100%",
                // alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <View style={{ height: "65%", padding: 20, gap: 5 }}>
                <Text
                  style={{ fontSize: 24, fontWeight: "bold", color: "white" }}
                >
                  Demon Slayer: Kimetsu ...
                </Text>
                <Text style={{ fontSize: 12, color: "white" }}>
                  Action, Shounen, Martial Arts, Adventure, ...
                </Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <View style={styles.buttonone}>
                    <Play></Play>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      Play
                    </Text>
                  </View>
                  <View style={styles.buttontwo}>
                    <Add></Add>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      My List
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            paddingLeft: 24,
            paddingBottom: 24,
            paddingTop: 24,
            gap: 24,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 24,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Top Hits Anime
            </Text>
            <Text style={{ fontSize: 17, color: "#06C149" }}>See all</Text>
          </View>
          <FlatList
            data={top}
            horizontal={true}
            renderItem={({ item, index }: any) => (
              <Link href={`./animedetail/${item.id}`}>
                <Card
                  posterImage={item.attributes.posterImage.original}
                  averageRating={item.attributes.averageRating}
                  index={index}
                ></Card>
              </Link>
            )}
          >
            {/* style={{ flexDirection: "row", gap: 8 }} */}
          </FlatList>
        </View>
        <View
          style={{
            paddingLeft: 24,
            paddingBottom: 24,
            paddingTop: 24,
            gap: 24,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 24,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Top Hits Anime
            </Text>
            <Text style={{ fontSize: 17, color: "#06C149" }}>See all</Text>
          </View>
          <FlatList
            data={top}
            horizontal={true}
            renderItem={({ item, index }: any) => (
              <Card
                posterImage={item.attributes.posterImage.original}
                averageRating={item.attributes.averageRating}
                index={index}
              ></Card>
            )}
          >
            {/* style={{ flexDirection: "row", gap: 8 }} */}
          </FlatList>
        </View>
      </View>
    </ScrollView>
  );
}
