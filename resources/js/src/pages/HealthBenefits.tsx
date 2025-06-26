import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HealthBenefits = () => {
  const benefits = [
    {
      emoji: "🌀",
      title: "Detoxification",
      description:
        "Minuman Herbaquench membantu membersihkan racun dari tubuh dengan kandungan alami seperti lemon, mint, dan buah segar yang dikenal memiliki efek detoksifikasi.",
    },
    {
      emoji: "💧",
      title: "Hydration Boost",
      description:
        "Setiap tegukan Herbaquench memberikan hidrasi maksimal, menjaga tubuh tetap segar dan optimal, terutama setelah beraktivitas atau saat cuaca panas.",
    },
    {
      emoji: "🌿",
      title: "Natural Antioxidants",
      description:
        "Kaya akan antioksidan dari bahan alami seperti jeruk, stroberi, dan herbal mint – membantu melawan radikal bebas dan menjaga daya tahan tubuh.",
    },
    {
      emoji: "🔥",
      title: "Metabolism Support",
      description:
        "Kombinasi herbal dan buah dalam Herbaquench dapat membantu meningkatkan metabolisme tubuh, mendukung proses pembakaran kalori secara alami.",
    },
    {
      emoji: "😌",
      title: "Reduces Bloating",
      description:
        "Dengan bahan seperti lemon dan mint, Herbaquench dapat membantu pencernaan dan mengurangi rasa kembung setelah makan.",
    },
    {
      emoji: "🌱",
      title: "Zero Preservatives & Low Sugar",
      description:
        "Diformulasikan tanpa pengawet buatan dan dengan kadar gula rendah — pilihan sehat dan alami untuk gaya hidup modern.",
    },
  ];

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
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-lg px-4 py-2">
            💚 Health Benefits of Herbaquence
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover the Power of Natural Hydration
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Setiap tetes Herbaquence dirancang khusus untuk memberikan manfaat
            kesehatan optimal bagi tubuh Anda
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{benefit.emoji}</div>
                <CardTitle className="text-xl text-gray-900">
                  {index + 1}. {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-center">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-green-50 rounded-xl p-12 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Mengapa Memilih Herbaquence?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  100% Natural
                </h3>
                <p className="text-sm text-gray-600">
                  Tanpa bahan kimia berbahaya
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Teruji Klinis
                </h3>
                <p className="text-sm text-gray-600">
                  Kualitas terjamin laboratorium
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">♻️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Ramah Lingkungan
                </h3>
                <p className="text-sm text-gray-600">
                  Kemasan yang dapat didaur ulang
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Kualitas Premium
                </h3>
                <p className="text-sm text-gray-600">Standar internasional</p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Cara Kerja Herbaquence dalam Tubuh
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Absorpsi Cepat
              </h3>
              <p className="text-gray-600">
                Kandungan alami diserap tubuh dengan mudah untuk hidrasi optimal
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Detoksifikasi
              </h3>
              <p className="text-gray-600">
                Membantu membersihkan racun dan meningkatkan fungsi organ
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Energi Alami
              </h3>
              <p className="text-gray-600">
                Memberikan energi berkelanjutan tanpa efek samping
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Mulai Hidup Sehat Hari Ini
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rasakan sendiri manfaat luar biasa dari Herbaquence untuk kesehatan
            Anda
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Coba Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthBenefits;
