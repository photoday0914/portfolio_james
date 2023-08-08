import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './hooks/themeHook/themeContext';

import * as serviceWorker from "./serviceWorker";

const Root = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();