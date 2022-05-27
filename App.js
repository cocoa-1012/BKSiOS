import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';
import MainTabs from './screens/components/tapButtons/mainTabs';

import {MainPage} from './screens/pages/mainPage';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer);

const App = () => {
  const [isStarted, setIsStarted] = useState(false);
  useEffect(() => {}, [isStarted]);
  if (!isStarted) return <MainPage submit={setIsStarted} />;
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MainTabs />
      </SafeAreaView>
      <Toast />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
