/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import ProgressBar from 'react-native-progress-bar-horizontal';

const LoadingScreen = () => {

    return (
        <View>
            <ImageBackground
                source={require('./satalite.jpeg')}
                style={styles.background}>
                <Image
                    source={require('./ViaSatLogo.png')}
                    style={styles.logo}
                />
                <View style={styles.loadingBar}>
                    <ProgressBar
                        animated={true}
                        borderWidth={0}
                        fillColor="white"
                        unfilledColor="#808080"
                        height={8}
                        borderColor="white"
                        duration={5000}
                        width={400}
                        progress={1}
                    />
                    <Text style={styles.baseText}>
                        Medição de tráfego de rede
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({

    background: { width: '100%', height: '100%' },
    logo: { width: 600, height: 400, marginLeft: 30 },
    loadingBar: { marginLeft: 70, marginTop: -70 },
    baseText: {
        marginLeft: 35,
        marginTop: 10,
        fontFamily: 'Open Sans Hebrew',
        fontSize: 25,
        fontWeight: 'bold',
    },

});

export default LoadingScreen;
