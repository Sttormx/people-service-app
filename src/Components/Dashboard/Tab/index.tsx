import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { IconButton, Colors } from 'react-native-paper';
import Home from '../Home';
import Jobs from '../Jobs';
import Tasks from '../Tasks';

const HomeRoute = () => (
    <Home />
);

const JobsRoute = () => (
    <Jobs />
);

const TaskRoute = () => (
    <Tasks />
);

const renderScene = SceneMap(
{
    Home: HomeRoute,
    Tasks: TaskRoute,
    Jobs: JobsRoute,
    Config: HomeRoute
});
  
const renderTabBar = (props: any) => (
    <TabBar
        {... props}
        indicatorStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: 'black' }}
        renderIcon={({ route, focused, color }) => (
            <IconButton icon={route.icon || ''} color={Colors.white} size={20}/>
        )}
    />
);

const Tab = () =>
{
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'Home', title: 'Home', icon: 'view-dashboard' },
        { key: 'Tasks', title: 'Tasks', icon: 'calendar-check' },
        { key: 'Jobs', title: 'Jobs', icon: 'account-hard-hat' },
        { key: 'Config', title: 'Config', icon: 'account-cog' },
    ]);
  
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={ renderScene }
            onIndexChange={ setIndex }
            initialLayout={{ width: layout.width }}
            tabBarPosition='bottom'
            renderTabBar={ renderTabBar }
        />
    );
}

export default Tab;