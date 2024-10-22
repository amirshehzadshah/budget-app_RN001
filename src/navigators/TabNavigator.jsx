import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import BudgetScreen from '../screens/BudgetScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StatsScreen from '../screens/StatsScreen';
import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarActiveTintColor: 'blue',   // Active tab color
                tabBarInactiveTintColor: 'gray', // Inactive tab color
                tabBarBackground: () => (
                    <BlurView
                        overlayColor=""
                        blurAmount={30}
                        intensity={90}
                        style={styles.BlurViewStyles}
                    />
                ),
            }}
        >
            <Tab.Screen
                name='Budget'
                component={BudgetScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? "home" : "home-outline"} color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name='History'
                component={HistoryScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? "document-text" : "document-text-outline"} color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name='Stats'
                component={StatsScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? "bar-chart" : "bar-chart-outline"} color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? "settings" : "settings-outline"} color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor: 'white',
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    BlurViewStyles: {
        position: 'absolute',
        borderRadius: 20, // Same curve as tabBar
    },
});
