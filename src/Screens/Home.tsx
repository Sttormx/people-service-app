import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Home = () =>
{
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    useEffect(() => 
    {
        setTimeout(() =>
        {
            navigation.navigate("Login");
        }, 3000)
    }, [])

    /* 
        TO-DO
        VERIFICAR LOGADO
            SE SIM MANDAR PARA DASHBOARD
        SENAO
            MANDAR PARA LOGIN
    */

    return (
        <Image source={require('../../assets/img/splash.png')} style={{ resizeMode: 'stretch', width: '100%', height: '100%' }} />
    );
}

export default Home;