import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-primary mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the journey behind Herbaquence and our passion for creating
            the finest infused water experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Story Section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Awal Perjalanan Herbaquence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Herbaquence lahir dari kepedulian terhadap gaya hidup sehat di
                era modern. Berawal dari kegelisahan melihat masyarakat yang
                semakin sulit menemukan minuman sehat yang praktis dan lezat,
                kami tergerak untuk menciptakan solusi inovatif.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Dengan riset mendalam tentang manfaat infused water dan
                bahan-bahan alami, kami mengembangkan formula khusus yang
                memadukan cita rasa segar dengan nutrisi optimal. Setiap tetes
                Herbaquence dirancang untuk memberikan pengalaman hidrasi yang
                tak terlupakan.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🌱</div>
                <p className="text-gray-700 text-lg font-medium">
                  Perjalanan Dimulai
                </p>
                <p className="text-gray-600">
                  Dari ide sederhana menjadi inovasi
                </p>
              </div>
            </div>
          </div>

          {/* Story Section 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🎯</div>
                <p className="text-gray-700 text-lg font-medium">Misi Kami</p>
                <p className="text-gray-600">
                  Menghadirkan hidrasi berkualitas
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Misi & Visi Herbaquence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                <strong className="text-primary">Misi kami</strong> adalah
                menghadirkan minuman infused water berkualitas premium yang
                terjangkau untuk semua kalangan. Kami berkomitmen menggunakan
                bahan-bahan alami terbaik tanpa pengawet buatan dan gula
                berlebih.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                <strong className="text-primary">Visi kami</strong> adalah
                menjadi brand minuman sehat terdepan di Indonesia yang dikenal
                karena inovasi, kualitas, dan kepedulian terhadap kesehatan
                masyarakat. Kami ingin setiap orang dapat menikmati hidrasi yang
                menyehatkan dalam kehidupan sehari-hari.
              </p>
            </div>
          </div>

          {/* Story Section 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Komitmen Kualitas & Inovasi
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Setiap produk Herbaquence melalui proses penelitian dan
                pengembangan yang ketat. Kami bekerja sama dengan ahli gizi dan
                teknolog pangan untuk memastikan setiap formula memberikan
                manfaat optimal bagi kesehatan.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Fasilitas produksi kami menggunakan teknologi modern dengan
                standar keamanan pangan internasional. Mulai dari pemilihan
                bahan baku hingga proses packaging, semua dilakukan dengan
                kontrol kualitas yang ketat untuk menjamin produk terbaik sampai
                ke tangan konsumen.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-green-100 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🔬</div>
                <p className="text-gray-700 text-lg font-medium">
                  Inovasi Berkelanjutan
                </p>
                <p className="text-gray-600">Penelitian & pengembangan</p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gray-50 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Nilai-Nilai Herbaquence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  100% Natural
                </h3>
                <p className="text-gray-600">
                  Kami berkomitmen menggunakan bahan-bahan alami tanpa pengawet
                  buatan, pewarna sintetis, atau bahan kimia berbahaya. Setiap
                  ingredient dipilih secara selektif untuk kualitas dan keamanan
                  optimal.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">♻️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Sustainable
                </h3>
                <p className="text-gray-600">
                  Keberlanjutan lingkungan adalah prioritas kami. Dari kemasan
                  yang dapat didaur ulang hingga proses produksi yang ramah
                  lingkungan, kami peduli pada planet untuk generasi mendatang.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Health First
                </h3>
                <p className="text-gray-600">
                  Kesehatan konsumen adalah yang utama. Setiap produk
                  diformulasikan untuk memberikan manfaat nutrisi maksimal
                  dengan rasa yang nikmat, mendukung gaya hidup sehat Anda.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Bergabunglah dengan Herbaquence
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Rasakan perbedaan minuman infused water alami dan jadilah bagian
              dari komunitas yang peduli kesehatan. Mari bersama menciptakan
              gaya hidup yang lebih sehat dan segar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Belanja Sekarang
                </Button>
              </Link>
              <Link to="/benefits">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Pelajari Manfaat
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
