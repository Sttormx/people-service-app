import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
{
    card: 
    {
        backgroundColor: '#fff',
        boxSizing: 'border-box',
        minHeight: '42%',
        padding: '4%',
        maxWidth: '95%',
        marginBottom: '7%',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 30
    },
    title: 
    {
        color: '#1c181f',
        fontWeight: '400',
        fontSize: 24
    },
    description: 
    {
        color: '#49454f',
        letterSpacing: 0.4,
        fontSize: 12
    },
    buttonContainer: 
    {
        alignItems: 'flex-end',
        minWidth: '100%',
    },
    button: 
    {
        backgroundColor: '#242632',
        padding: '4%',
        paddingHorizontal: '8%',
        borderRadius: 20,
        
    },
    buttonText: 
    {
        color: '#fff'
    },
    cardActive: 
    {
        backgroundColor: 'black'
    },
    countActive: 
    {
        color: '#fff'
    },
    titleActive: 
    {
        color: 'rgba(255, 255, 255, 0.70)'
    }
});

export default styles;
