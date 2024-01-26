import { ImageBackground, Text, View } from "react-native";
export const Card = (data: any) => {
  const image = {
    uri: data.posterImage,
  };

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={{
        height: 200,
        width: 150,
        borderRadius: 12,
        overflow: "hidden",
        padding: 12,
        justifyContent: "space-between",
        marginRight: 8,
      }}
    >
      <View
        style={{
          borderRadius: 6,
          width: 34,
          height: 24,
          backgroundColor: "#06C149",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>
          {Math.round((data.averageRating / 10) * 10) / 10}
        </Text>
      </View>
      <View
        style={{
          width: 150,
          height: 60,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          {data.index + 1}
        </Text>
      </View>
    </ImageBackground>
  );
};
