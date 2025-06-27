<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Mail\InvoiceMail;

class TransactionController extends Controller
{
    public function transaction(Request $request)
    {
        $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'address' => 'required|string|max:255',
            'order_details' => 'required|array',
            'order_details.*.product_name' => 'required|string|max:255',
            'order_details.*.size' => 'required|string|max:50',
            'order_details.*.price' => 'required|numeric',
            'order_details.*.quantity' => 'required|integer|min:1',
        ]);

        $total = 0;

        $order = Order::create([
            'full_name' => $request->full_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'address' => $request->address,
        ]);

        foreach ($request->order_details as $detail) {
            $order->orderDetails()->create([
                'product_name' => $detail['product_name'],
                'size' => $detail['size'],
                'price' => $detail['price'],
                'quantity' => $detail['quantity'],
            ]);

            $total += $detail['price'] * $detail['quantity'];
        }

        // Send invoice email
        Mail::to($order->email)->send(new InvoiceMail($order));

        return response()->json(['message' => 'Order placed and invoice sent.']);
    }
}
