import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import {GradiantProvider} from './src/context/GradientContext';
// import {FadeScreen} from './src/screens/FadeScreen';

const AppState = ({children}: any) => {
  return <GradiantProvider>{children}</GradiantProvider>;
};

const App = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);

  LogBox.ignoreLogs(['Reanimated']);

  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};

export default App;
