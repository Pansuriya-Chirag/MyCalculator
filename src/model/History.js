import React, { useEffect } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Animated,
} from 'react-native';


const History = (props) => {
    const slideInval = new Animated.Value(0);

    useEffect(() => {
        slideIn();
    }, [])



    const slideIn = () => {
        Animated.timing(slideInval, {
            toValue: 1,
            duration: 500,
        }).start(() => { });
    };

    const slideOut = () => {
        Animated.timing(slideInval, {
            toValue: 0,
            duration: 500,
        }).start();
    };

    const { hideHistory, history, deleteHistory } = props;
    return (
        <View style={styles.historyComponent}>
            <Animated.View
                style={{
                    ...styles.historyContainer,
                    bottom: slideInval.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['100%', '0%'],
                    }),
                }}>
                <View style={styles.historyHeader}>
                    <View style={styles.headingTextContainer}>
                        <Text style={styles.historyText}>History</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.clearHistoryButton}
                        onPress={deleteHistory}>
                        <Text style={styles.clearText}>Clear</Text>
                    </TouchableOpacity>
                    <View></View>
                </View>

                <View style={styles.historyContent}>
                    <ScrollView style={{ flex: 1 }}>
                        {history.map((item) => {
                            return (
                                <View style={styles.historyItem}>
                                    <Text style={styles.historyExpression}>
                                        {item.expression}
                                    </Text>
                                    <Text style={styles.historyResult}>{item.result}</Text>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>

                <TouchableOpacity
                    onPress={hideHistory}
                    style={styles.closeHistoryButtonWrapper}>
                    <Text style={styles.closeHistoryButtonText}>Close</Text>
                </TouchableOpacity>
            </Animated.View>
            <View style={styles.disabledBottom}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    historyComponent: {
        flex: 1,
        backgroundColor: '#00000061',
    },
    historyContainer: {
        backgroundColor: '',
        flex: 9,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'column',
        position: 'relative',
    },
    disabledBottom: {
        flex: 1,
    },
    historyContent: {
        flex: 8,
    },
    closeHistoryButtonWrapper: {
        flex: 1,
        borderTopColor: 'white',
        borderTopWidth: 1,
        textAlign: 'center',
        justifyContent: 'center',
    },
    historyHeader: {
        flex: 1,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    clearHistoryButton: {
        flex: 3,
        borderLeft: '1px solid white',
        justifyContent: 'center',
        textAlign: 'Center',
    },
    headingTextContainer: {
        flex: 7,
        justifyContent: 'center',
    },
    historyText: {
        color: 'white',
        fontSize: 30,
        paddingLeft: 10,
    },
    clearText: {
        fontSize: 24,
        color: 'white',
    },
    closeHistoryButtonText: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    },
    historyItem: {
        marginBottom: 35,
        paddingLeft: 10,
    },
    historyExpression: {
        color: 'white',
        fontSize: 24,
    },
    historyResult: {
        color: 'white',
        fontSize: 18,
    },
});

export default History;
