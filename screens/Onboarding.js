import { View, Text, Button, Image, TextInput } from "react-native";
import React from "react";
import Styles from "../Styles";

const styles = Styles;

const Onboarding = () => {
  return (
    <View style={[styles.container, styles.primaryBackgroundColor1]}>
      <View style={[styles.navArea]}>
        <Image title="Logo" source={require("../assets/images/logo.png")} />
      </View>
      <Text style={[styles.leadText]}>Let us get to know you</Text>
      <View>
        <Text style={[styles.leadText]}>First Name</Text>
        <TextInput style={styles.inputStyle} />
        <Text style={[styles.leadText]}>Email</Text>
        <TextInput style={styles.inputStyle} />
      </View>
      <View>
        <Button title="Next" style={styles.buttonStyle1} />
      </View>
    </View>
  );
};

export default Onboarding;
