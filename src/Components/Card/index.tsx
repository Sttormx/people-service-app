import React from 'react';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

import { Text, View } from 'react-native';
import { Colors } from 'react-native-paper';

const Card = (props: any) =>
{
    const myIcon = <Icon name={props.icon || 'rocket'} size={30} color={Colors.grey400} />;
    const activeStyle = props.active ? {card: styles.cardActive, count: styles.countActive, title: styles.titleActive} : null;
    
    return (
        <View style={[styles.card, activeStyle?.card]}>
            <Text>{myIcon}</Text>
            <Text style={[styles.count, activeStyle?.count]}>{props.count}</Text>
            <Text style={[styles.title, activeStyle?.title]}>{props.title}</Text>
        </View>
    );
}

export default Card;