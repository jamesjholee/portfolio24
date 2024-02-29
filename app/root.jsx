import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import NavBar from './components/NavBar'

import styles from "./tailwind.css";

export const meta = () => ({
  charset: "utf-8",
  title: "Corgi's Playground",
  description: "Meet Corgi, the smart cuddly creature that everyone loves!",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => [
  {rel: "stylesheet", href: styles}
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NavBar />
        <main className="container mx-auto pt-8 sm:pt-16">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
