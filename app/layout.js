import Nav from '@components/nav';
import Provider from '@components/provider';

import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "A platform for creating and sharing prompts.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body>
        <Provider>
          <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav/>
          {children}
        </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

