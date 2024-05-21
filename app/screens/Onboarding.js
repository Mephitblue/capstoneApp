import { View, Text, Pressable, Image, TextInput } from "react-native";
import React from "react";
import Styles from "../Styles";

const styles = Styles;

const Onboarding = () => {
  return (
    <View style={[styles.container, styles.primaryBackgroundColor1]}>
      <Image
        title="Logo"
        source={require("../../assets/images/Logo.png")}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />

      <Text style={[styles.leadText]}>Let us get to know you</Text>
      <View>
        <Text style={[styles.leadText]}>First Name</Text>
        <TextInput style={styles.inputStyle} />
        <Text style={[styles.leadText]}>Email</Text>
        <TextInput style={styles.inputStyle} />
      </View>
      <View>
        <Pressable
          title="Next"
          style={[styles.buttonStyle1, styles.buttonStyle1Active]}
        />
      </View>
    </View>
  );
};

export default Onboarding;
