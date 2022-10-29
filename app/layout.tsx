import "./global.css";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Wildan</title>
      </head>
      <body>
        <div>
          <NavBar />
        </div>
        <div className="flex h-screen justify-center items-center">{children}</div>
      </body>
    </html>
  );
}
