import "./globals.css";

export const metadata = {
  title: "AIDA Boutique",
  description: "Luxury Fashion Boutique",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
