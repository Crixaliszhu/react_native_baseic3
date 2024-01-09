import {Animated, Button, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useRef} from "react";

type Props = {
    show: boolean,
}

export default (props: Props) => {
    const {show} = props

    const fadeAnim = useRef(new Animated.Value(show ? 0 : 1)).current


    useEffect(() => {
        Animated.timing(fadeAnim, {useNativeDriver: false, toValue: 1, duration: 3000}).start()
    }, [fadeAnim])

    const hide = () => {
        Animated.timing(fadeAnim, {useNativeDriver: false, toValue: 0, duration: 3000}).start()
    }

    return (
        <Animated.View style={{opacity: fadeAnim}}>
            <View style={styles.container}>
                <Text style={styles.textSt}>弹窗标题</Text>
                <Text style={styles.textSt}>弹窗内容</Text>
                <View style={styles.btnBg}>
                    <Button title={'  取消  '} onPress={hide}></Button>
                    <Button title={'  确认  '} onPress={hide}></Button>
                </View>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 240,
        backgroundColor: '#ff0',
        padding: 20,
    },
    textBg: {
        flex: 1,
        margin: 24,
    },
    textSt: {
        flex: 1,
        textAlign: 'center',
    },
    btnBg: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})
