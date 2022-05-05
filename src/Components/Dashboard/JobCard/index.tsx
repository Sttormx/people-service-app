import React from 'react';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from 'react-native-paper';
import { Text, View } from 'react-native';

const JobCard = (props: any) => 
{
    const myIcon = <Icon name={props.icon || 'rocket'} size={30} color={Colors.grey100} />;

    return (
        <View style={[styles.card]}>
            <View style={styles.header}>
                <Text style={styles.avatar}>S</Text>
                <View style={styles.headerContent}>
                    <Text style={styles.title}>Softo</Text>
                    <Text style={styles.subtitle}>Softwarehouse</Text>
                </View>
            </View>
            <View style={styles.body}>

            </View>
            <View style={styles.footer}>
                <Text style={styles.description}>A softo é uma softwarehouse</Text>
            </View>
        </View>
    );
}

export default JobCard;