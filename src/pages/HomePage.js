import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const HomePage = (props) => {
    return (
        <View style={styles.fixToText}>
            <Button
                title="BMI Calculator"
                color="purple"
                onPress={() => props.navigation.navigate('BMIPage')}
            />
            <Button
                title="Calculator"
                color="olive"
                onPress={() => props.navigation.navigate('CalculatorPage')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'bottom',
        marginHorizontal: 100,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        justifyContent: 'center',
        margin: 100,

    },

});
export default HomePage;