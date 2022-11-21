import type { MetaFunction } from '@remix-run/node';
import {
   Links,
   LiveReload,
   Meta,
   Outlet,
   Scripts,
   ScrollRestoration,
} from '@remix-run/react';
import styles from './styles/app.css';

export const meta: MetaFunction = () => ({
   charset: 'utf-8',
   title: 'New Remix App',
   viewport: 'width=device-width,initial-scale=1',
});

export function links() {
   return [{ rel: 'stylesheet', href: styles }];
}

export default function App() {
   return (
      <html lang='en'>
         <head>
            <Meta />
            <Links />
         </head>
         <body>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            {process.env.NODE_ENV === 'development' && <LiveReload />}
         </body>
      </html>
   );
}

export function ErrorBoundary({ error }: any) {
   console.log(error);
   return (
      <html>
         <head>
            <title>Oh no!</title>
            <Meta />
            <Links />
         </head>
         <body>
            {/* add the UI you want your users to see */}
            {error.message}
            <Scripts />
         </body>
      </html>
   );
}
