// resources/js/src/pages/CheckoutConfirmationPage.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react'; // Pastikan lucide-react sudah terinstal

const CheckoutConfirmationPage = () => {
  const location = useLocation();
  const orderId = location.state?.orderId || 'Tidak Diketahui';

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <CheckCircle className="h-20 w-20 text-green-500 mb-6" />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Terima Kasih!</h1>
      <p className="text-lg text-gray-600 mb-4">Pesanan Anda dengan ID <span className="font-semibold text-primary">#{orderId}</span> telah berhasil diproses.</p>
      <p className="text-md text-gray-700 mb-8 max-w-lg">
        Detail invoice telah dikirimkan ke email Anda. Silakan periksa kotak masuk (termasuk folder spam).
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="bg-primary text-white py-3 px-6 rounded-lg shadow hover:bg-primary-dark transition duration-300 ease-in-out font-semibold"
        >
          Kembali ke Beranda
        </Link>
        {/* Opsional: Tombol untuk melihat riwayat pesanan jika ada fitur tersebut */}
        {/* <Link
          to="/my-orders"
          className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg shadow hover:bg-gray-300 transition duration-300 ease-in-out font-semibold"
        >
          Lihat Pesanan Saya
        </Link> */}
      </div>
    </div>
  );
};

export default CheckoutConfirmationPage;