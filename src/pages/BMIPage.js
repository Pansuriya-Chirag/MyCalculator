import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";

const BmiPage = (props) => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [resultNumber, setResultNumber] = useState(0);
  const [resultText, setResultText] = useState("");

  const handleCalculate = () => {
    let imc = (weight * 703) / height ** 2;
    setResultNumber(imc.toFixed(2));

    if (imc < 18.5) {
      setResultText("Underweight");
    } else if (imc > 18.5 && imc < 25) {
      setResultText("Normal Weight");
    } else if (imc >= 25 && imc < 30) {
      setResultText("Overweight");
    } else {
      setResultText("Obesity");
    }
  };

  return (

    <ImageBackground
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <Text
          style={{
            color: "#FFCB1F",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 30,
            fontSize: 15
          }}
        >
          <Text style={{ marginHorizontal: 5, color: 'green', fontWeight: 'bold', fontSize: 30 }}>BMI Calculator</Text>
        </Text>
        <View style={styles.intro}>
          <TextInput
            placeholder="Height"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={height => { setHeight(height) }}
          />
          <TextInput
            placeholder="Weight"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={weight => { setWeight(weight) }}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleCalculate}
        >
          <Text style={styles.buttonText}>Calculate </Text>
        </TouchableOpacity>
        <Text style={styles.result}>{resultNumber}</Text>
        <Text style={[styles.result, { fontSize: 35 }]}>
          {resultText}
        </Text>
      </View>
    </ImageBackground>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  intro: {
    flexDirection: "row"
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
    color: "green"
  },
  button: {
    backgroundColor: "#1D1D1B"
  },
  buttonText: {
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "green",
    fontWeight: "bold"
  },
  result: {
    alignSelf: "center",
    color: "green",
    fontSize: 65,
    padding: 15
  }
});


export default BmiPage
