import {
    createAppContainer,
    createStackNavigator,
} from 'react-navigation';

import LoginApp from './../container/loginContainer';
import Registro from './Registro';
import MenuDrawer from './menuDrawer';

const MenuAuthStackNavigator = createStackNavigator({
    Login: {
        screen: LoginApp,
    },
    Registro: {
        screen: Registro,
    },
    MenuDrawer: {
        screen: MenuDrawer,
    },
}, {
    headerMode: "none",
});

export default (MenuAuthStackNavigator);