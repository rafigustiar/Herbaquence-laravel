<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice Pembelian Anda - Herbaquence</title>
    
    {{-- Gaya CSS inline untuk kompatibilitas email client --}}
    <style type="text/css">
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            width: 100% !important;
        }
        table {
            border-collapse: collapse;
            width: 100%;
        }
        td, th {
            padding: 10px;
            text-align: left;
            vertical-align: top;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 30px;
            border-radius: 8px; /* Mungkin tidak didukung semua klien */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Mungkin tidak didukung semua klien */
        }
        .header-section {
            background-color: #4CAF50; /* Warna hijau Herbaquence */
            color: #ffffff;
            padding: 25px 30px;
            text-align: center;
            border-radius: 8px 8px 0 0; /* Mungkin tidak didukung semua klien */
        }
        .header-section h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
        }
        .header-section p {
            margin: 5px 0 0;
            font-size: 14px;
            opacity: 0.9;
        }
        .content-section {
            padding: 25px 30px;
        }
        .info-grid {
            width: 100%;
            margin-bottom: 25px;
        }
        .info-grid td {
            vertical-align: top;
            padding-bottom: 15px; /* Spasi antar baris di dalam grid */
        }
        .info-grid h3 {
            font-size: 16px;
            color: #333333;
            margin: 0 0 10px;
            font-weight: bold;
        }
        .info-grid p {
            margin: 3px 0;
            font-size: 14px;
            color: #666666;
        }
        .item-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 25px;
        }
        .item-table th, .item-table td {
            border: 1px solid #eeeeee;
            padding: 12px;
            font-size: 14px;
            text-align: left;
        }
        .item-table th {
            background-color: #f8f8f8;
            color: #555555;
            font-weight: bold;
        }
        .item-table .text-center { text-align: center; }
        .item-table .text-right { text-align: right; }

        .total-section {
            width: 100%;
            font-size: 14px;
            margin-bottom: 25px;
        }
        .total-section td {
            padding: 8px 12px;
            text-align: right;
        }
        .total-section .label {
            text-align: left;
            width: 70%;
        }
        .total-section .grand-total {
            background-color: #eafaea; /* Hijau muda */
            font-weight: bold;
            font-size: 16px;
            color: #4CAF50;
        }
        .footer-section {
            background-color: #f8f8f8;
            padding: 25px 30px;
            text-align: center;
            font-size: 12px;
            color: #888888;
            border-radius: 0 0 8px 8px; /* Mungkin tidak didukung semua klien */
        }
        .footer-section h3 {
            font-size: 16px;
            color: #333333;
            margin: 0 0 10px;
            font-weight: bold;
        }
        .footer-section p {
            margin: 5px 0;
        }
        .footer-section a {
            color: #4CAF50;
            text-decoration: none;
        }
    </style>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #f4f4f4; margin: 0; padding: 20px 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; width: 100% !important;">
    
    {{-- PERSIAPAN VARIABEL UNTUK PERHITUNGAN --}}
    @php
        $subtotal = 0;
        $shippingCost = 15000;
    @endphp

    <div class="container" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        {{-- Header Invoice --}}
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="header-section" style="background-color: #4CAF50; color: #ffffff; padding: 25px 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <tr>
                <td style="text-align: left; vertical-align: middle; width: 50%;">
                    <h1 style="margin: 0; font-size: 28px; font-weight: bold; display: inline-block; vertical-align: middle;">Herbaquence</h1>
                    <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">Natural Infused Water</p>
                </td>
                <td style="text-align: right; vertical-align: middle; width: 50%;">
                    <h2 style="margin: 0 0 5px; font-size: 24px; font-weight: bold;">INVOICE</h2>
                    {{-- Ganti invoice_id dengan id order biasa jika tidak ada --}}
                    <p style="margin: 0; font-size: 18px;">#{{ $order->id }}</p>
                </td>
            </tr>
        </table>

        {{-- Invoice Details & Customer Info --}}
        <div class="content-section" style="padding: 25px 30px;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="info-grid" style="width: 100%; margin-bottom: 25px;">
                <tr>
                    <td width="50%" style="vertical-align: top; padding-bottom: 15px;">
                        <h3 style="font-size: 16px; color: #333333; margin: 0 0 10px; font-weight: bold;">Dari:</h3>
                        <div style="font-size: 14px; color: #666666;">
                            <p style="margin: 3px 0; font-weight: bold;">PT. Herbaquence Indonesia</p>
                            <p style="margin: 3px 0;">Jl. Notojoyo No. 324A</p>
                            <p style="margin: 3px 0;">Malang, 65152</p>
                            <p style="margin: 3px 0;">Indonesia</p>
                            <p style="margin: 3px 0;"><a href="mailto:hello@herbaquence.com" style="color: #4CAF50; text-decoration: none;">herbaquence@gmail.com</a></p>
                            <p style="margin: 3px 0;">+62 895-3660-49712</p>
                        </div>
                    </td>
                    <td width="50%" style="vertical-align: top; padding-bottom: 15px;">
                        <h3 style="font-size: 16px; color: #333333; margin: 0 0 10px; font-weight: bold;">Untuk:</h3>
                        <div style="font-size: 14px; color: #666666;">
                            <p style="margin: 3px 0; font-weight: bold;">{{ $order->full_name }}</p>
                            <p style="margin: 3px 0;">{{ $order->email }}</p>
                            <p style="margin: 3px 0;">{{ $order->phone }}</p>
                            <p style="margin: 3px 0;">{{ $order->address }}</p>
                        </div>
                    </td>
                </tr>
            </table>

            {{-- Order Details - Date & Payment Method --}}
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="info-grid" style="width: 100%; margin-bottom: 25px;">
                <tr>
                    <td width="50%" style="vertical-align: top; padding-bottom: 15px;">
                        <h4 style="font-size: 14px; color: #333333; margin: 0 0 8px; font-weight: bold;">Tanggal Pesanan</h4>
                        <p style="margin: 0; font-size: 14px; color: #666666;">{{ $order->created_at ? $order->created_at->format('d F Y H:i') : 'N/A' }}</p>
                    </td>
                    <td width="50%" style="vertical-align: top; padding-bottom: 15px;">
                        <h4 style="font-size: 14px; color: #333333; margin: 0 0 8px; font-weight: bold;">Metode Pembayaran</h4>
                        {{-- UBAH: Menjadi COD --}}
                        <p style="margin: 0; font-size: 14px; color: #666666;">COD (Bayar di Tempat)</p> 
                    </td>
                    {{-- HAPUS: Bagian Status Pembayaran --}}
                </tr>
            </table>

            {{-- Separator --}}
            <div style="height: 1px; background-color: #eeeeee; margin: 25px 0;"></div>

            {{-- Items Table --}}
            <h3 style="font-size: 18px; color: #333333; margin: 0 0 15px; font-weight: bold;">Detail Pesanan</h3>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="item-table" style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                <thead>
                    <tr>
                        <th style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px; background-color: #f8f8f8; color: #555555; text-align: left;">Produk</th>
                        <th style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px; background-color: #f8f8f8; color: #555555; text-align: center;">Ukuran</th>
                        <th style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px; background-color: #f8f8f8; color: #555555; text-align: center;">Qty</th>
                        <th style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px; background-color: #f8f8f8; color: #555555; text-align: right;">Harga</th>
                        <th style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px; background-color: #f8f8f8; color: #555555; text-align: right;">Total</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($order->orderDetails as $detail)
                        <tr>
                            <td style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px;">{{ $detail->product_name }}</td>
                            <td style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px; text-align: center;">{{ $detail->size }}</td>
                            <td style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px; text-align: center;">{{ $detail->quantity }}</td>
                            <td style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px; text-align: right;">Rp {{ number_format($detail->price, 0, ',', '.') }}</td>
                            <td style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px; text-align: right; font-weight: bold;">Rp {{ number_format($detail->price * $detail->quantity, 0, ',', '.') }}</td>
                        </tr>
                        {{-- UBAH: Menambahkan kalkulasi subtotal di dalam loop --}}
                        @php
                            $subtotal += $detail->price * $detail->quantity;
                        @endphp
                    @endforeach
                </tbody>
            </table>

            {{-- Totals --}}
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="total-section" style="width: 100%; font-size: 14px; margin-bottom: 25px;">
                <tr>
                    {{-- UBAH: Menampilkan variabel subtotal yang sudah dihitung --}}
                    <td class="label" style="padding: 8px 12px; text-align: left; width: 70%;">Subtotal:</td>
                    <td style="padding: 8px 12px; text-align: right;">Rp {{ number_format($subtotal, 0, ',', '.') }}</td>
                </tr>
                <tr>
                    {{-- UBAH: Menjadi Rp 15.000 --}}
                    <td class="label" style="padding: 8px 12px; text-align: left; width: 70%;">Ongkos Kirim:</td>
                    <td style="padding: 8px 12px; text-align: right;">Rp {{ number_format($shippingCost, 0, ',', '.') }}</td>
                </tr>
                <tr>
                    <td colspan="2" style="height: 1px; background-color: #eeeeee; padding: 0;"></td>
                </tr>
                <tr>
                    {{-- UBAH: Menampilkan total akhir yang sudah dihitung --}}
                    <td class="label grand-total" style="padding: 12px; text-align: left; width: 70%; background-color: #eafaea; font-weight: bold; font-size: 16px; color: #4CAF50;">TOTAL AKHIR:</td>
                    <td class="grand-total" style="padding: 12px; text-align: right; background-color: #eafaea; font-weight: bold; font-size: 16px; color: #4CAF50;">Rp {{ number_format($subtotal + $shippingCost, 0, ',', '.') }}</td>
                </tr>
            </table>

            {{-- HAPUS: Tombol Lihat Invoice Online --}}

        </div>

        {{-- Footer --}}
        <div class="footer-section" style="background-color: #f8f8f8; padding: 25px 30px; text-align: center; font-size: 12px; color: #888888; border-radius: 0 0 8px 8px;">
            <h3 style="font-size: 16px; color: #333333; margin: 0 0 10px; font-weight: bold;">Terima kasih atas pesanan Anda! 🌿</h3>
            <p style="margin: 5px 0;">Pesanan Anda akan diproses dalam 1-2 hari kerja. Anda akan menerima email konfirmasi pengiriman beserta nomor resi.</p>
            <p style="margin: 5px 0;">📧 <a href="mailto:hello@herbaquence.com" style="color: #4CAF50; text-decoration: none;">herbaquence@gmail.com</a> &nbsp; 📱 +62 895-3660-49712 &nbsp; 🌐 <a href="http://www.herbaquence.site" style="color: #4CAF50; text-decoration: none;">www.herbaquence.site</a></p>
            <p style="margin: 15px 0 0; font-size: 10px; color: #aaaaaa;">Invoice ini dibuat secara otomatis oleh sistem Herbaquence</p>
            <p style="margin: 5px 0;">&copy; {{ date('Y') }} Herbaquence Drinks. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
