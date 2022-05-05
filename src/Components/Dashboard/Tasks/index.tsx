import React from 'react';
import styles from './styles'
import TaskCard from '../TaskCard';

import { View } from 'react-native';

const Tasks = () =>
{
    return (
        <View style={styles.bgScreen}>
            <TaskCard />
            <TaskCard />
        </View>
    );
}

export default Tasks