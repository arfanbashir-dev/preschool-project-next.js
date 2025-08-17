// import '@/style/page.module.css';
import '../style/globals.css';
import Navbar from '@/Components/Navbar';
import Footer from '../Components/Footer';
import SessionWrapper from '@/Components/SessionWrapper'; // ✅ import wrapper


export const metadata = {
  title: 'Little Genius TechSchool',
  description: 'Next.js + MongoDB ',
};

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="">
        <SessionWrapper> {/* ✅ Wrap client-only code */}
        <Navbar />
        <main className="w-full h-full">
            {children}
          </main>
        <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
