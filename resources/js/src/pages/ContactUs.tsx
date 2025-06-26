import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Instagram,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: <Instagram className="h-8 w-8" />,
      title: "Instagram",
      value: "@herbaquence.id",
      link: "https://instagram.com/herbaquence.id",
      linkText: "Follow Us",
      description: "Ikuti update terbaru produk dan tips kesehatan",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website",
      value: "www.herbaquence.com",
      link: "https://www.herbaquence.com",
      linkText: "Visit Website",
      description: "Jelajahi koleksi lengkap produk kami",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Nomor HP",
      value: "+62 812-3456-7890",
      link: "tel:+6281234567890",
      linkText: "Call Now",
      description: "Hubungi kami untuk konsultasi produk",
      color: "from-green-500 to-emerald-600",
    },
  ];

  const additionalInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "hello@herbaquence.com",
      link: "mailto:hello@herbaquence.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Alamat",
      value: "Jl. Sehat Berkah No. 123, Jakarta Selatan",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Jam Operasional",
      value: "Senin - Jumat: 09:00 - 18:00",
      link: null,
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hubungi Kami
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ada pertanyaan tentang produk Herbaquence? Tim kami siap membantu
            Anda dengan informasi yang Anda butuhkan
          </p>
        </div>

        {/* Main Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {contact.icon}
                </div>
                <CardTitle className="text-2xl text-gray-900">
                  {contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <p className="text-xl font-semibold text-gray-800 mb-2">
                    {contact.value}
                  </p>
                  <p className="text-gray-600 text-sm">{contact.description}</p>
                </div>
                <Button
                  asChild
                  className={`w-full bg-gradient-to-r ${contact.color} hover:opacity-90 text-white border-0`}
                >
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.linkText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Contact Information */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Informasi Kontak Lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 p-3 rounded-lg">
                  <div className="text-primary">{info.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-primary transition-colors"
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-gray-100">
              <CardHeader>
                <CardTitle className="text-lg">
                  Bagaimana cara memesan produk Herbaquence?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Anda dapat memesan langsung melalui website kami atau
                  menghubungi customer service untuk bantuan pemesanan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-100">
              <CardHeader>
                <CardTitle className="text-lg">
                  Apakah tersedia pengiriman ke seluruh Indonesia?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ya, kami melayani pengiriman ke seluruh Indonesia dengan
                  berbagai pilihan ekspedisi terpercaya.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-100">
              <CardHeader>
                <CardTitle className="text-lg">
                  Berapa lama masa simpan produk Herbaquence?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Produk kami memiliki masa simpan 12 bulan dari tanggal
                  produksi. Pastikan menyimpan di tempat sejuk dan kering.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-100">
              <CardHeader>
                <CardTitle className="text-lg">
                  Apakah ada program reseller atau distributor?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ya, kami memiliki program kemitraan. Hubungi tim kami untuk
                  informasi lebih lanjut tentang menjadi reseller atau
                  distributor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Response Time */}
        <div className="bg-primary text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Waktu Respon Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">&lt; 1 Jam</div>
              <p className="opacity-90">Instagram & WhatsApp</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">&lt; 24 Jam</div>
              <p className="opacity-90">Email & Website</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Real-time</div>
              <p className="opacity-90">Panggilan Telepon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
