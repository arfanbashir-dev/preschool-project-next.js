import '../style/globals.css';
import Navbar from '@/Components/Navbar';
import FooterFunc from '../Components/Footer';
import SessionWrapper from '@/Components/SessionWrapper';

export const metadata = {
  title: 'Little Genius TechSchool',
  description: 'Next.js + MongoDB ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <SessionWrapper>
          {/* Navbar always on top */}
          <Navbar />

          {/* Main content should grow & shrink with screen */}
          <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>

          {/* Footer always at bottom */}
          <FooterFunc />
        </SessionWrapper>
      </body>
    </html>
  );
}




// // import '@/style/page.module.css';
// import '../style/globals.css';
// import Navbar from '@/Components/Navbar';
// import FooterFunc from '../Components/Footer';
// import SessionWrapper from '@/Components/SessionWrapper'; // ✅ import wrapper


// export const metadata = {
//   title: 'Little Genius TechSchool',
//   description: 'Next.js + MongoDB ',
// };

// export default function RootLayout ({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="">
//         <SessionWrapper> {/* ✅ Wrap client-only code */}
//         <Navbar />
//         <main className="w-full h-full">
//             {children}
//           </main>
//         <FooterFunc />
//         </SessionWrapper>
//       </body>
//     </html>
//   );
// }
