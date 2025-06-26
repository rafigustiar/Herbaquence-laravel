import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Putri",
      role: "Ibu Rumah Tangga",
      location: "Jakarta",
      content:
        "Herbaquence benar-benar mengubah hidup saya! Rasanya segar banget dan bikin tubuh terasa lebih berenergi. Anak-anak juga suka karena rasanya yang natural dan tidak terlalu manis.",
      rating: 5,
      initials: "SP",
    },
    {
      name: "Rizky Pratama",
      role: "Personal Trainer",
      location: "Bandung",
      content:
        "Sebagai trainer, saya selalu merekomendasikan Herbaquence ke klien-klien saya. Minuman ini perfect untuk recovery setelah workout dan membantu detoks tubuh secara alami.",
      rating: 5,
      initials: "RP",
    },
    {
      name: "Diana Sari",
      role: "Marketing Manager",
      location: "Surabaya",
      content:
        "Kerja kantoran bikin saya sering lupa minum air putih. Herbaquence jadi solusi perfect! Rasanya enak, sehat, dan praktis dibawa kemana-mana. Highly recommended!",
      rating: 5,
      initials: "DS",
    },
    {
      name: "Ahmad Fauzi",
      role: "Mahasiswa",
      location: "Yogyakarta",
      content:
        "Awalnya skeptis sama infused water, tapi setelah coba Herbaquence langsung jatuh cinta. Harganya reasonable dan kualitasnya premium banget. Beneran bikin tubuh terasa lebih fresh!",
      rating: 5,
      initials: "AF",
    },
    {
      name: "Melissa Chan",
      role: "Content Creator",
      location: "Bali",
      content:
        "As someone yang concern banget sama kesehatan, Herbaquence adalah game changer! Zero preservatives, low sugar, tapi rasanya tetap amazing. Perfect untuk lifestyle saya!",
      rating: 5,
      initials: "MC",
    },
    {
      name: "Budi Santoso",
      role: "Executive Chef",
      location: "Jakarta",
      content:
        "Sebagai chef, saya sangat appreciate kualitas ingredient yang digunakan Herbaquence. Kombinasi flavor-nya balanced dan tidak artificial. Ini adalah premium infused water terbaik!",
      rating: 5,
      initials: "BS",
    },
    {
      name: "Lestari Wulandari",
      role: "Yoga Instructor",
      location: "Ubud",
      content:
        "Herbaquence sudah jadi bagian dari daily routine saya. Minumnya setelah yoga session bikin badan terasa lebih rileks dan terhidrasi dengan sempurna. Love it!",
      rating: 5,
      initials: "LW",
    },
    {
      name: "Kevin Wijaya",
      role: "Entrepreneur",
      location: "Medan",
      content:
        "Sebagai busy entrepreneur, Herbaquence membantu saya tetap fokus dan energized sepanjang hari. Packaging-nya juga premium dan cocok untuk meeting dengan clients.",
      rating: 5,
      initials: "KW",
    },
    {
      name: "Indah Permata",
      role: "Nutritionist",
      location: "Semarang",
      content:
        "Dari segi nutrisi, Herbaquence memang excellent choice. Kandungan antioksidannya tinggi dan membantu metabolism. Saya sering rekomendasikan ke pasien untuk detox program.",
      rating: 5,
      initials: "IP",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Pelanggan Puas" },
    { number: "4.9/5", label: "Rating Rata-rata" },
    { number: "98%", label: "Akan Membeli Lagi" },
    { number: "15", label: "Kota di Indonesia" },
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
          <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200 text-lg px-4 py-2">
            ⭐ Customer Testimonials
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Apa Kata Mereka Tentang Herbaquence?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengarkan cerita nyata dari ribuan pelanggan yang telah merasakan
            manfaat luar biasa Herbaquence
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 rounded-lg p-6">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="h-8 w-8 text-gray-300 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic leading-relaxed pl-6">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-primary text-white">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-gray-500">
                      📍 {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gray-50 rounded-xl p-12 mb-16">
          <div className="text-center">
            <Quote className="h-16 w-16 text-primary mx-auto mb-6" />
            <p className="text-2xl text-gray-700 italic leading-relaxed mb-8 max-w-4xl mx-auto">
              "Herbaquence bukan cuma minuman biasa. Ini adalah lifestyle choice
              yang mengubah cara saya menjaga kesehatan. Dari rasa, kualitas,
              sampai packaging semuanya premium. Honestly, ini adalah infused
              water terbaik yang pernah saya coba!"
            </p>
            <div className="flex items-center justify-center">
              <Avatar className="h-16 w-16 mr-4">
                <AvatarFallback className="bg-primary text-white text-xl">
                  DR
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-lg">
                  Dr. Ratna Sari
                </div>
                <div className="text-gray-600">Dokter Spesialis Gizi</div>
                <div className="text-gray-500">📍 Jakarta</div>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Bergabunglah dengan Ribuan Pelanggan Puas!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rasakan sendiri mengapa Herbaquence menjadi pilihan utama untuk
            hidup sehat dan segar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Coba Sekarang
            </Link>
            <Link
              to="/benefits"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Lihat Manfaat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
