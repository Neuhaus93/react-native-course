import {
  NavigationActions,
  NavigationScreenProp,
  NavigationParams,
} from 'react-navigation';

let navigator: NavigationScreenProp<any>;

const setNavigator = (nav: NavigationScreenProp<any>) => {
  navigator = nav;
};

const navigate = (routeName: string, params?: NavigationParams) => {
  navigator.dispatch(NavigationActions.navigate({ routeName, params }));
};

export { setNavigator, navigate };
