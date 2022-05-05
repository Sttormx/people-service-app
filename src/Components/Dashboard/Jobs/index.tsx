import React from 'react';
import styles from './styles'
import JobCard from '../JobCard';
 
import { View } from 'react-native';

const Jobs = () =>
{
    return (
        <View style={styles.bgScreen}>
            <JobCard />
            <JobCard />
        </View>
    );
}
    
export default Jobs;