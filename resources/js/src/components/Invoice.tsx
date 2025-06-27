import React from "react";
import { Leaf, Download, Printer, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface InvoiceItem {
  name: string;
  size: string;
  quantity: number;
  price: number;
  total: number;
}

interface InvoiceData {
  invoiceNumber: string;
  orderDate: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  items: InvoiceItem[];
  subtotal: number;
  shipping: number;
  total: number;
  paymentMethod: string;
  paymentStatus: string;
}

interface InvoiceProps {
  data: InvoiceData;
  onDownload?: () => void;
  onPrint?: () => void;
}

const Invoice: React.FC<InvoiceProps> = ({ data, onDownload, onPrint }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header Actions */}
      <div className="flex justify-between items-center mb-8 print:hidden">
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-6 w-6 text-green-500" />
          <span className="text-lg font-semibold text-green-600">
            Pesanan Berhasil!
          </span>
        </div>
        <div className="flex space-x-3">
          <Button
            variant="outline"
            onClick={onPrint}
            className="flex items-center space-x-2"
          >
            <Printer className="h-4 w-4" />
            <span>Print</span>
          </Button>
          <Button
            onClick={onDownload}
            className="flex items-center space-x-2 bg-primary hover:bg-primary/90"
          >
            <Download className="h-4 w-4" />
            <span>Download PDF</span>
          </Button>
        </div>
      </div>

      {/* Invoice Card */}
      <Card className="shadow-lg">
        <CardContent className="p-0">
          {/* Invoice Header */}
          <div className="bg-primary text-white p-8">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-3">
                <Leaf className="h-10 w-10" />
                <div>
                  <h1 className="text-3xl font-bold">Herbaquence</h1>
                  <p className="opacity-90">Natural Infused Water</p>
                </div>
              </div>
              <div className="text-right">
                <h2 className="text-2xl font-bold mb-2">INVOICE</h2>
                <p className="text-lg">{data.invoiceNumber}</p>
              </div>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Company Info */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Dari:</h3>
                <div className="text-gray-600 space-y-1">
                  <p className="font-medium">PT. Herbaquence Indonesia</p>
                  <p>Jl. Sehat Berkah No. 123</p>
                  <p>Jakarta Selatan, 12345</p>
                  <p>Indonesia</p>
                  <p>hello@herbaquence.com</p>
                  <p>+62 812-3456-7890</p>
                </div>
              </div>

              {/* Customer Info */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Untuk:</h3>
                <div className="text-gray-600 space-y-1">
                  <p className="font-medium">{data.customerInfo.name}</p>
                  <p>{data.customerInfo.email}</p>
                  <p>{data.customerInfo.phone}</p>
                  <p>{data.customerInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Tanggal Pesanan
                </h4>
                <p className="text-gray-600">{formatDate(data.orderDate)}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Metode Pembayaran
                </h4>
                <p className="text-gray-600">{data.paymentMethod}</p>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Items Table */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                Detail Pesanan
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">
                        Produk
                      </th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900">
                        Ukuran
                      </th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-900">
                        Qty
                      </th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-900">
                        Harga
                      </th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-900">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.items.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 px-2">
                          <div className="font-medium text-gray-900">
                            {item.name}
                          </div>
                        </td>
                        <td className="py-4 px-2 text-center text-gray-600">
                          {item.size}
                        </td>
                        <td className="py-4 px-2 text-center text-gray-600">
                          {item.quantity}
                        </td>
                        <td className="py-4 px-2 text-right text-gray-600">
                          {formatPrice(item.price)}
                        </td>
                        <td className="py-4 px-2 text-right font-medium text-gray-900">
                          {formatPrice(item.total)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Totals */}
            <div className="flex justify-end">
              <div className="w-full md:w-1/2 space-y-3">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">
                    {formatPrice(data.subtotal)}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Ongkos Kirim:</span>
                  <span className="font-medium">
                    {data.shipping === 0
                      ? "15.000"
                      : formatPrice(data.shipping)}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between py-3">
                  <span className="text-lg font-semibold text-gray-900">
                    Total:
                  </span>
                  <span className="text-lg font-bold text-primary">
                    {formatPrice(data.total)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-8 text-center">
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">
              Terima kasih atas pesanan Anda! 🌿
            </h3>
            <p className="text-gray-600 mb-4">
              Pesanan Anda akan diproses dalam 1-2 hari kerja. Anda akan
              menerima email konfirmasi pengiriman beserta nomor resi.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
              <p>📧 hello@herbaquence.com</p>
              <p>📱 +62 812-3456-7890</p>
              <p>🌐 www.herbaquence.com</p>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Invoice ini dibuat secara otomatis oleh sistem Herbaquence
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Invoice;
