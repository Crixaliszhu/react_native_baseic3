/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
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
import {showVersion, VERSION} from "./src/pages/module";
import {thisVar, ToolType, ToolVersion} from "./start/common/utils.ts";
import {getDetailInfo} from "./src/pages/PromiseModule/utils.ts";

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

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const sug = {
        id: '12'
    } as SuggestEntity
    const entity = {
        subUuId: '13241412',
        // name: '张三',
        type: '找活卡片',
    } as DetailEntity
    const version = VERSION
    const type = {
        title: '标题',
        content: '内容',
        avatar: '头像',
    } as ToolType

    const toolVe = ToolVersion
    const thisV = thisVar

    console.log('version: ', version)
    console.log('thisVar: ', thisV)
    console.log('toolVersion: ', toolVe)
    console.log('type: ', type)
    console.log('entity: ', entity)

    const click = () => {
        getDetailInfo().then((info) => {
            console.log('info ===== ', info)
        })
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
                        <Text>{`版本说明:${version}，版权所有违法必究`}</Text>
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
});

export default App;
