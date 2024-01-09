/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {PropsWithChildren, useRef, useState} from 'react';
import {
    Animated,
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {getDetailInfo} from "./src/pages/PromiseModule/utils.ts";
import {VERSION} from "./src/pages/module.ts";

type SectionProps = PropsWithChildren<{
    title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
}

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    /**
     * 淡入淡出动画
     */
    const fadeAnim = useRef(new Animated.Value(0)).current
    /**
     * 滑入滑出动画
     */
    const slideAnim = useRef(new Animated.Value(500)).current

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [showEnable, setShowEnable] = useState(false)


    const click = () => {
        getDetailInfo().then((info) => {
            console.log('info ===== ', info)
        })
    }

    /**
     * 淡入
     */
    const fadeIn = () => {
        Animated.timing(fadeAnim, {toValue: 1, duration: 300, useNativeDriver: false}).start(() => {
            fadeAnim.setValue(1)
        })
    }

    /**
     * 淡出
     */
    const fadeOut = () => {
        Animated.timing(fadeAnim, {toValue: 0, duration: 300, useNativeDriver: false}).start(() => {
            fadeAnim.setValue(0)
        })
    }

    const slideIn = () => {
        Animated.timing(slideAnim, {toValue: 200, duration: 300, useNativeDriver: true}).start()
    }

    const slideOut = () => {
        Animated.timing(slideAnim, {toValue: 500, duration: 300, useNativeDriver: true}).start()
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header/>
                <Animated.View style={{transform: [{translateY: slideAnim}]}}>
                    <View style={styles.fadeBg}>
                        <Text style={styles.fadeText}>Fade View</Text>
                    </View>
                </Animated.View>
                <View style={styles.versionBg}>
                    <Text>Animated</Text>
                    <Button title={'Animate In'} onPress={slideIn}></Button>
                </View>

                <View style={styles.versionBg}>
                    <Text>Animated</Text>
                    <Button title={'Animate Out'} onPress={slideOut}></Button>
                </View>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <Section title="Step One">
                        Edit <Text style={styles.highlight}>App.tsx</Text> to change this
                        screen and then come back to see your edits.
                    </Section>
                    <Section title="See Your Changes">
                        <ReloadInstructions/>
                    </Section>
                    <Section title="Debug">
                        <DebugInstructions/>
                    </Section>
                    <Section title="Learn More">
                        Read the docs to discover what to do next:
                    </Section>
                    <LearnMoreLinks/>
                    <View style={styles.versionBg}>
                        <Text>{`版本说明:${VERSION}，版权所有违法必究`}</Text>
                        <Button title={'点击查看'} onPress={click}></Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    versionBg: {
        margin: 24,
        paddingBottom: 12,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    fadeBg: {
        backgroundColor: '#23fdf3',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12,
    },
    fadeText: {
        fontSize: 30,
        margin: 30,
    },
});

export default App;
