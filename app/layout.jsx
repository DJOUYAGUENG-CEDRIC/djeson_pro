import './globals.css';

export const metadata = {
  title: 'Djeson Pro Assistant',
  description: 'Assistant expert en pronostics sportifs',
  icons: {
    icon: '/dembele.jpeg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
