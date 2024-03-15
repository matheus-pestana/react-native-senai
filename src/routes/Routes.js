import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Home from '../pages/Home';
import Titulos from '../pages/Feed';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Info1 from '../pages/Info1';
import Info2 from '../pages/Info2';
import Info3 from '../pages/Info3';
import Info4 from '../pages/Info4';
import Info5 from '../pages/Info5';

const TabBottom = createBottomTabNavigator();

function TabBottomRoutes() {
    return (
        <TabBottom.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarStyle: { backgroundColor: 'black', borderTopColor: 'lime' },
                tabBarActiveTintColor: "lime",
                tabBarInactiveTintColor: "white",
            }}>
            <TabBottom.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (<Ionicons
                                size={size}
                                color={color}
                                name='home-sharp'
                            />);
                        } return (<Ionicons
                            size={size}
                            color={color}
                            name='home-outline'
                        />)
                    }
                }} />
            <TabBottom.Screen name="Títulos" component={Titulos}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (<Ionicons
                                size={size}
                                color={color}
                                name='trophy'
                            />);
                        } return (<Ionicons
                            size={size}
                            color={color}
                            name='trophy-outline'
                        />)
                    }
                }} />
            <TabBottom.Screen name="About" component={About}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (<Ionicons
                                size={size}
                                color={color}
                                name='information-circle'
                            />);
                        } return (<Ionicons
                            size={size}
                            color={color}
                            name='information-circle-outline'
                        />)
                    }
                }} />
        </TabBottom.Navigator>
    );
}

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: 'lime',
                drawerInactiveTintColor: 'white',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: 'black',
                    borderBottomColor: 'lime',
                    color: 'white',
                },
                drawerStyle: {
                    backgroundColor: 'black',
                    width: 180,
                }
            }}>
            <Drawer.Screen
                name='Inicio'
                component={TabBottomRoutes}
                options={{
                    drawerLabel: 'Início',
                    drawerIcon: ({ size, color }) => (
                        <Ionicons size={size} color={color}
                            name='home' />
                    )
                }}
            />
            <Drawer.Screen
                name='Players'
                component={StackRoutes}
                options={{
                    drawerLabel: 'Players',
                    drawerIcon: ({ size, color }) => (
                        <Ionicons size={size} color={color}
                            name='person-circle' />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}

const Stack = createNativeStackNavigator();

function StackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='Blog'
                component={Blog}
            />
            <Stack.Screen
                name='Info1'
                component={Info1}
            />
            <Stack.Screen
                name='Info2'
                component={Info2}
            />
            <Stack.Screen
                name='Info3'
                component={Info3}
            />
            <Stack.Screen
                name='Info4'
                component={Info4}
            />
            <Stack.Screen
                name='Info5'
                component={Info5}
            />
        </Stack.Navigator>
    );
}