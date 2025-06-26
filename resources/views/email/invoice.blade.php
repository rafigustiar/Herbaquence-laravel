{{-- filepath: resources/views/emails/invoice.blade.php --}}
<h2>Thank you for your order, {{ $order->full_name }}!</h2>
<p>Here is your invoice:</p>
<ul>
    <li>Email: {{ $order->email }}</li>
    <li>Phone: {{ $order->phone }}</li>
    <li>Address: {{ $order->address }}</li>
</ul>
<table border="1" cellpadding="5" cellspacing="0">
    <thead>
        <tr>
            <th>Product</th>
            <th>Size</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($order->orderDetails as $detail)
            <tr>
                <td>{{ $detail->product_name }}</td>
                <td>{{ $detail->size }}</td>
                <td>{{ number_format($detail->price, 0, ',', '.') }}</td>
                <td>{{ $detail->quantity }}</td>
                <td>{{ number_format($detail->price * $detail->quantity, 0, ',', '.') }}</td>
            </tr>
        @endforeach
    </tbody>
</table>