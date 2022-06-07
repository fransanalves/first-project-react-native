import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const COLOR_BG_PRIMARY = '#BA8EFD';
const COLOR_TEXT_PRIMARY = '#F2F2EB';
const IMAGE_PROFILE_GITHUB = 'https://avatars.githubusercontent.com/u/55409529?v=4';
const URL_GITHUB = 'https://github.com/fransanalves';

const App = () => {
    const handlePressToGithub = async () => {
        console.log('Verificando o link.')
        const response = await Linking.canOpenURL(URL_GITHUB);
        if(response) {
            console.log('Link aprovado')
            console.log('Abrindo o link...')
            await Linking.openURL(URL_GITHUB);
        }
    };

    return (
        <SafeAreaView style={ styles.container }>
            <StatusBar backgroundColor={ COLOR_BG_PRIMARY } barStyle="light-content" />
            <View style={ styles.content }>
                <Image 
                accessibilityLabel='Imagem de uma menina sentada com seu notebook, com três livros e uma xicara de café' 
                style={ styles.avatar } source={{ uri: IMAGE_PROFILE_GITHUB }} />
                <Text accessibilityLabel='Nome: Francisca Alves' style={ styles.profileName }>Francisca Alves</Text>
                <Text accessibilityLabel='Username: fransanalves' style={ styles.profileUsername }>fransanalves</Text>
                <Text accessibilityLabel='Descrição: Estudante de programação, tecnologias preferidas:
                JavaScript, TypeScript, Angular, React Native' style={ styles.profileDescription }>Estudante de programação, tecnologias preferidas:
                JavaScript, TypeScript, Angular, React Native.
                </Text>
                <Pressable onPress={ handlePressToGithub }>
                    <View style={ styles.button }>
                        <Text style={ styles.buttonText }>Open Github</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR_BG_PRIMARY,
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    content: {
        alignItems: 'center',
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: 'yellow',
        borderWidth: 2,
    },
    profileName: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: COLOR_TEXT_PRIMARY,
    },
    profileUsername: {
        fontSize: 20,
        color: '#F2ECE4',
    },
    profileDescription: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLOR_TEXT_PRIMARY,
    },
    button: {
        marginTop: 20,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#EACD5B'
    },
    buttonText: {
        color: '#F2ECE4',
        fontSize: 18,
        fontWeight: 'bold'
    }
});