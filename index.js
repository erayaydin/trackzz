import {AppRegistry, Text} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(
    appName,
    () => () => <Text>Hello React!</Text>,
);
