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
        .button {
            display: inline-block;
            background-color: #4CAF50;
            color: #ffffff !important; /* Penting untuk override default link color */
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-size: 14px;
            margin-top: 15px;
        }
    </style>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #f4f4f4; margin: 0; padding: 20px 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; width: 100% !important;">
    <div class="container" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        {{-- Header Invoice --}}
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="header-section" style="background-color: #4CAF50; color: #ffffff; padding: 25px 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <tr>
                <td style="text-align: left; vertical-align: middle; width: 50%;">
                    {{-- Ganti dengan logo Leaf jika ingin --}}
                    {{-- <img src="URL_LOGO_ANDA" alt="Herbaquence Logo" width="40" height="40" style="vertical-align: middle; margin-right: 10px;"> --}}
                    <h1 style="margin: 0; font-size: 28px; font-weight: bold; display: inline-block; vertical-align: middle;">Herbaquence</h1>
                    <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">Natural Infused Water</p>
                </td>
                <td style="text-align: right; vertical-align: middle; width: 50%;">
                    <h2 style="margin: 0 0 5px; font-size: 24px; font-weight: bold;">INVOICE</h2>
                    <p style="margin: 0; font-size: 18px;">#{{ $order->invoice_id ?? 'N/A' }}</p>
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
                            <p style="margin: 3px 0;">Jl. Sehat Berkah No. 123</p>
                            <p style="margin: 3px 0;">Jakarta Selatan, 12345</p>
                            <p style="margin: 3px 0;">Indonesia</p>
                            <p style="margin: 3px 0;"><a href="mailto:hello@herbaquence.com" style="color: #4CAF50; text-decoration: none;">hello@herbaquence.com</a></p>
                            <p style="margin: 3px 0;">+62 812-3456-7890</p>
                        </div>
                    </td>
                    <td width="50%" style="vertical-align: top; padding-bottom: 15px;">
                        <h3 style="font-size: 16px; color: #333333; margin: 0 0 10px; font-weight: bold;">Untuk:</h3>
                        <div style="font-size: 14px; color: #666666;">
                            {{-- Menggunakan variabel dari temanmu --}}
                            <p style="margin: 3px 0; font-weight: bold;">{{ $order->full_name }}</p>
                            <p style="margin: 3px 0;">{{ $order->email }}</p>
                            <p style="margin: 3px 0;">{{ $order->phone }}</p>
                            <p style="margin: 3px 0;">{{ $order->address }}</p>
                        </div>
                    </td>
                </tr>
            </table>

            {{-- Order Details - Date, Payment Method, Status --}}
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="info-grid" style="width: 100%; margin-bottom: 25px;">
                <tr>
                    <td width="33.33%" style="vertical-align: top; padding-bottom: 15px;">
                        <h4 style="font-size: 14px; color: #333333; margin: 0 0 8px; font-weight: bold;">Tanggal Pesanan</h4>
                        <p style="margin: 0; font-size: 14px; color: #666666;">{{ $order->created_at ? $order->created_at->format('d F Y H:i') : 'N/A' }}</p>
                    </td>
                    <td width="33.33%" style="vertical-align: top; padding-bottom: 15px;">
                        <h4 style="font-size: 14px; color: #333333; margin: 0 0 8px; font-weight: bold;">Metode Pembayaran</h4>
                        <p style="margin: 0; font-size: 14px; color: #666666;">{{ $order->payment_method ?? 'Transfer Bank BCA' }}</p> {{-- Asumsi ada payment_method atau default --}}
                    </td>
                    <td width="33.33%" style="vertical-align: top; padding-bottom: 15px;">
                        <h4 style="font-size: 14px; color: #333333; margin: 0 0 8px; font-weight: bold;">Status Pembayaran</h4>
                        <span style="font-size: 13px; font-weight: bold; padding: 4px 8px; border-radius: 4px; background-color: {{ ($order->payment_status ?? '') === 'Paid' ? '#e6ffe6' : '#fffbe6' }}; color: {{ ($order->payment_status ?? '') === 'Paid' ? '#228B22' : '#FFD700' }}; border: 1px solid {{ ($order->payment_status ?? '') === 'Paid' ? '#a3e6a3' : '#ffe6a3' }};">
                            {{ ($order->payment_status ?? '') === 'Paid' ? 'Lunas' : 'Pending' }}
                        </span>
                    </td>
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
                        <th style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px; background-color: #f8f8f8; color: #555555; text-align: left;">Ukuran</th>
                        <th style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px; background-color: #f8f8f8; color: #555555; text-align: center;">Qty</th>
                        <th style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px; background-color: #f8f8f8; color: #555555; text-align: right;">Harga</th>
                        <th style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px; background-color: #f8f8f8; color: #555555; text-align: right;">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {{-- Menggunakan $order->orderDetails sesuai kode temanmu --}}
                    @foreach ($order->orderDetails as $detail)
                        <tr>
                            <td style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px;">{{ $detail->product_name }}</td>
                            <td style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px; text-align: center;">{{ $detail->size }}</td>
                            <td style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px; text-align: center;">{{ $detail->quantity }}</td>
                            <td style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px; text-align: right;">Rp {{ number_format($detail->price, 0, ',', '.') }}</td>
                            <td style="border: 1px solid #eeeeee; padding: 12px; font-size: 14px; text-align: right; font-weight: bold;">Rp {{ number_format($detail->price * $detail->quantity, 0, ',', '.') }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>

            {{-- Totals --}}
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="total-section" style="width: 100%; font-size: 14px; margin-bottom: 25px;">
                <tr>
                    <td class="label" style="padding: 8px 12px; text-align: left; width: 70%;">Subtotal:</td>
                    <td style="padding: 8px 12px; text-align: right;">Rp {{ number_format($order->subtotal ?? 0, 0, ',', '.') }}</td>
                </tr>
                <tr>
                    <td class="label" style="padding: 8px 12px; text-align: left; width: 70%;">Ongkos Kirim:</td>
                    <td style="padding: 8px 12px; text-align: right;">
                        @if (($order->shipping_cost ?? 0) === 0)
                            GRATIS
                        @else
                            Rp {{ number_format($order->shipping_cost, 0, ',', '.') }}
                        @endif
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="height: 1px; background-color: #eeeeee; padding: 0;"></td>
                </tr>
                <tr>
                    <td class="label grand-total" style="padding: 12px; text-align: left; width: 70%; background-color: #eafaea; font-weight: bold; font-size: 16px; color: #4CAF50;">TOTAL AKHIR:</td>
                    <td class="grand-total" style="padding: 12px; text-align: right; background-color: #eafaea; font-weight: bold; font-size: 16px; color: #4CAF50;">Rp {{ number_format($order->total_amount ?? 0, 0, ',', '.') }}</td>
                </tr>
            </table>

            {{-- Link untuk melihat invoice online (opsional) --}}
            <p style="text-align: center; margin-top: 20px;">
                <a href="{{ url('/invoice/' . ($order->invoice_id ?? '')) }}" class="button" style="display: inline-block; background-color: #4CAF50; color: #ffffff !important; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 14px; margin-top: 15px;">Lihat Invoice Online</a>
            </p>
        </div>

        {{-- Footer --}}
        <div class="footer-section" style="background-color: #f8f8f8; padding: 25px 30px; text-align: center; font-size: 12px; color: #888888; border-radius: 0 0 8px 8px;">
            <h3 style="font-size: 16px; color: #333333; margin: 0 0 10px; font-weight: bold;">Terima kasih atas pesanan Anda! 🌿</h3>
            <p style="margin: 5px 0;">Pesanan Anda akan diproses dalam 1-2 hari kerja. Anda akan menerima email konfirmasi pengiriman beserta nomor resi.</p>
            <p style="margin: 5px 0;">📧 <a href="mailto:hello@herbaquence.com" style="color: #4CAF50; text-decoration: none;">hello@herbaquence.com</a> &nbsp; 📱 +62 812-3456-7890 &nbsp; 🌐 <a href="http://www.herbaquence.com" style="color: #4CAF50; text-decoration: none;">www.herbaquence.com</a></p>
            <p style="margin: 15px 0 0; font-size: 10px; color: #aaaaaa;">Invoice ini dibuat secara otomatis oleh sistem Herbaquence</p>
            <p style="margin: 5px 0;">&copy; {{ date('Y') }} Herbaquence Drinks. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
