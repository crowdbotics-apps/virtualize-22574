import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile172302Navigator from '../features/UserProfile172302/navigator';
import Tutorial172301Navigator from '../features/Tutorial172301/navigator';
import NotificationList172273Navigator from '../features/NotificationList172273/navigator';
import Settings172272Navigator from '../features/Settings172272/navigator';
import Settings172264Navigator from '../features/Settings172264/navigator';
import UserProfile172262Navigator from '../features/UserProfile172262/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile172302: { screen: UserProfile172302Navigator },
Tutorial172301: { screen: Tutorial172301Navigator },
NotificationList172273: { screen: NotificationList172273Navigator },
Settings172272: { screen: Settings172272Navigator },
Settings172264: { screen: Settings172264Navigator },
UserProfile172262: { screen: UserProfile172262Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
