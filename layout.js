export const metadata = {
  title: "ISERSS - TC PM",
  description: "Institut Supérieur d’Études et de Recherche en Sciences Sociales"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
