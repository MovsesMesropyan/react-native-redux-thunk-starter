import React from 'react';
import {connect} from 'react-redux';
import {Platform, Dimensions, View, Text} from 'react-native';
import {createDrawerNavigator, createStackNavigator, createAppContainer} from "react-navigation";

import HeaderLeft from '../components/drawer/HeaderLeft';
import LoginScreen from '../screens/LoginScreen';
import PostsScreen from '../screens/PostsScreen';
import PostScreen from '../screens/PostScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactsScreen from '../screens/ContactsScreen';
import {
    ABOUT_ROUTE,
    CONTACTS_ROUTE,
    POSTS_ROUTE,
    POST_ROUTE,
    LOGGED_IN_ROUTES,
    LOGIN_ROUTE
} from './RouteName';

import MenuDrawer from '../components/drawer/MenuDrawer';

const {width} = Dimensions.get('window');

const defaultNavigationOptions = (initialRouteName) => ({
    defaultNavigationOptions: ({navigation}) => ({
        headerTitleStyle: {
            textAlign: 'center',
            flex: 1,
        },
        headerLeft: (
            <HeaderLeft navigation={navigation}
                        backButtonVisible={navigation.state.routeName !== initialRouteName} />
        ),
        headerRight: (
            <View />
        ),
    }),
});

const PostsNavigator = createStackNavigator({
    [POSTS_ROUTE]: {
        screen: PostsScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Posts',
            headerTitle: 'Posts',
        }),
    },
    [POST_ROUTE]: {
        screen: PostScreen,
        navigationOptions: ({navigation}) => ({
            title: navigation.state.params.title || 'Post',
            headerTitle: navigation.state.params.title || 'Post',
        })
    },
}, defaultNavigationOptions(POSTS_ROUTE));

const AboutNavigator = createStackNavigator({
    [ABOUT_ROUTE]: {
        screen: AboutScreen,
        navigationOptions: ({navigation}) => ({
            title: 'About',
            headerTitle: 'About',
        }),
    }
}, defaultNavigationOptions(ABOUT_ROUTE));

const ContactsNavigator = createStackNavigator({
    [CONTACTS_ROUTE]: {
        screen: ContactsScreen,
        navigationOptions: ({navigation}) => ({
            title: 'Contacts',
            headerTitle: 'Contacts',
        }),
    }
}, defaultNavigationOptions(CONTACTS_ROUTE));

const DrawerNavigator = createDrawerNavigator(
    {
        [POSTS_ROUTE]: { screen: PostsNavigator, params: {drawerLabel: 'Posts'} },
        [ABOUT_ROUTE]: { screen: AboutNavigator, params: {drawerLabel: 'About'} },
        [CONTACTS_ROUTE]: { screen: ContactsNavigator, params: {drawerLabel: 'Contacts'} }
    },
    {
        drawerWidth: 0.7 * width,
        contentComponent: props => {
            return <MenuDrawer navigation={props.navigation} items={props.items} getLabel={props.getLabel} />
        },
        initialRouteName: POSTS_ROUTE,
        navigationOptions: () => ({
            header: null,
        })
    }
);

const AuthNavigator = createStackNavigator({
    [LOGIN_ROUTE]: {
        screen: LoginScreen,
        navigationOptions: () => ({
            header: null,
        })}
}, {
    initialRouteName: LOGIN_ROUTE
});

const LoggedInNavigator = createStackNavigator({
    [LOGGED_IN_ROUTES]: { screen: DrawerNavigator }
}, {
    initialRouteName: LOGGED_IN_ROUTES,
    navigationOptions: () => ({
        header: null,
    })
});

const EntryPoint = props => {
    const { user } = props;
    const EntryComponent = createAppContainer(user.email ? LoggedInNavigator : AuthNavigator);

    return <EntryComponent />;
};


const mapStateToProps = state => {
    const { user } = state.auth;

    return {
        user
    };
};

export default connect(mapStateToProps)(EntryPoint);
