/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Button,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import InsertView from './InsertView';
import UserView from './UserView';

const App = () => {
  let [show, setShow] = React.useState(false);

  function toggle() {
    setShow(!show);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <InsertView />
        <Button title="Toggle" onPress={toggle} />
        {show && <UserView />}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;