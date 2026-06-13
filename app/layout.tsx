export const metadata = {
  title: "DevCard Generator",
  description: "Create your developer ID card",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}