import '../src/index.css';
import Providers from './providers';

export const metadata = {
  title: 'Sustainable Footprint Management',
  description: 'Track and manage your organization\'s environmental impact',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
