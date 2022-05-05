import React from 'react';
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from 'react-native-paper';
import { Text, View, TouchableOpacity } from 'react-native';

const TaskCard = (props: any) =>
{
    const myIcon = <Icon name={props.icon || 'rocket'} size={30} color={Colors.grey400} />;

    return (
        <View style={[styles.card]}>
            <Text>{myIcon}</Text>
            <Text style={[styles.title]}>Criar endpoint para user</Text>
            <Text style={[styles.description]}>A dialog is a type of modal window that apperars in front of app content to provide critial information, or prompt for a decision to be made</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TaskCard