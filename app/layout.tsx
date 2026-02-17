import "./globals.css";

export const metadata = {
  title: "Nitin Jayavarapu — AI/ML Engineer",
  description: "AI/ML Engineer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
