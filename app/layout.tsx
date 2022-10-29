import "./global.css";
import NavBar from "../components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Simple NavBar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div>
          <NavBar />
        </div>
        <div className="flex h-screen justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
