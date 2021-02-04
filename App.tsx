import React from 'react';
import { Application } from "./src/application";
import { Provider as PaperProvider } from 'react-native-paper';

const App =() => {
  return (
    <PaperProvider>
      <Application />
   </PaperProvider>
  );
};

export default App;
