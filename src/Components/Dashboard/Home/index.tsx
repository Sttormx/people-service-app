import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import Card from '../../Card';

export const Home = () =>
{
    return (
        <View style={styles.bgScreen}>
            <View style={styles.cardContainer}>
                <Card title={'Jobs'} count={'28'} icon={'users'} />
                <Card title={'Completed Tasks'} count={'30'} icon={'tasks'} active={true}/>
                <Card title={'Notifications'} count={'20'} icon={'bell'} />
                <Card title={'Reports'} count={'5'} icon={'times-rectangle'}/>
            </View>
        </View>
    );
}

export default Home;