import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
{
    card: 
    {
        backgroundColor: '#fff',
        boxSizing: 'border-box',
        height: '45%',
        padding: '1%',
        width: '88%',
        marginBottom: '7%',
        alignContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 15,
        overflow: 'hidden' 
    },
    header: 
    {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: '3%',
        paddingHorizontal: '0%',
    },
    headerContent: {},
    avatar: 
    {
        backgroundColor: '#6750a4',
        paddingHorizontal: '7%',
        paddingVertical: '5%',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 100,
        display: "flex",
        marginHorizontal: '5%',
        color: '#fff'
    },
    body: 
    {
        backgroundColor: 'gray',
        width: '102.7%',
        height: '55%',
        margin: '0%'
    },
    footer: 
    {
        alignItems: 'flex-start',
        justifyContent: 'center',
        textAlign: 'left',
        width: '100%',
        paddingHorizontal: '4%',
        flex: 1,
        overflow: 'hidden'
    },
    title: 
    {
        color: '#1c1b1f',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 0.1
    },
    subtitle: 
    {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '400',
        letterSpacing: 0.25,
        color: '#1c1b1f',
    },
    description:
    {
        color: '#49454f',
        letterSpacing: 0.25,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20
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