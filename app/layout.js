import "./globals.css";

export const metadata = {
  title: "Hello World",
  description: "A minimal Next.js app for deployment testing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
