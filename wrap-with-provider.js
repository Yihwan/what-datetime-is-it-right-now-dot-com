import React from 'react';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'mineral-ui/themes';

import TimestampStore from "./src/stores/timestampStore";

const stores = {
  timestampStore: new TimestampStore(),
}

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => (
  <Provider {...stores}>
    <ThemeProvider>
      {element}
    </ThemeProvider>
  </Provider>
);