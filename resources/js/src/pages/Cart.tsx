import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/components/CartProvider";
import { useToast } from "@/components/ui/use-toast"; // Optional: for better notifications

const Cart = () => {
    const { state, updateQuantity, removeItem, clearCart } = useCart();
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [isProcessingOrder, setIsProcessingOrder] = useState(false); // State for loading during submission
    const [checkoutData, setCheckoutData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const navigate = useNavigate(); // Initialize useNavigate for navigation
    const { toast } = useToast(); // Initialize useToast (if using Shadcn Toast)

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    const shippingCost = state.total >= 50000 ? 0 : 15000;
    const totalWithShipping = state.total + shippingCost;

    const handleCheckout = async () => {
        if (state.items.length === 0) {
            toast({
                title: "Cart Empty",
                description: "There are no products in your cart to order.",
                variant: "destructive",
            });
            return;
        }

        if (!isCheckoutValid) {
            toast({
                title: "Incomplete Checkout Data",
                description:
                    "Please fill in all checkout information correctly.",
                variant: "destructive",
            });
            return;
        }

        setIsProcessingOrder(true);

        // Prepare payload to match Laravel backend
        const orderPayload = {
            full_name: checkoutData.name,
            email: checkoutData.email,
            phone: checkoutData.phone,
            address: checkoutData.address,
            order_details: state.items.map((item) => ({
                product_name: item.product.name,
                size: item.size,
                price: item.price,
                quantity: item.quantity,
            })),
            subtotal: state.total,
            shipping_cost: shippingCost,
            total_amount: totalWithShipping,
        };

        try {
            const csrfToken = (
                document.querySelector(
                    'meta[name="csrf-token"]',
                ) as HTMLMetaElement
            )?.content;

            const response = await fetch("/transaction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-CSRF-TOKEN": csrfToken || "",
                },
                body: JSON.stringify(orderPayload),
            });

            const result = await response.json();

            if (response.ok) {
                clearCart();
                navigate("/checkout/confirmation", {
                    state: { orderId: result.orderId },
                });
                toast({
                    title: "Order Placed Successfully!",
                    description: `Invoice has been sent to your email.`,
                    duration: 5000,
                });
                setIsCheckingOut(false);
                setCheckoutData({
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                });
            } else {
                console.error("Backend error:", result);
                toast({
                    title: "Failed to Place Order",
                    description:
                        result.message ||
                        "An error occurred while processing your order. Please try again.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error("Network or other error:", error);
            toast({
                title: "An Error Occurred",
                description:
                    "Could not connect to the server. Please check your internet connection.",
                variant: "destructive",
            });
        } finally {
            setIsProcessingOrder(false);
        }
    };

    const handleInputChange = (
        field: keyof typeof checkoutData,
        value: string,
    ) => {
        setCheckoutData((prev) => ({ ...prev, [field]: value }));
    };

    const isCheckoutValid =
        checkoutData.name &&
        checkoutData.email &&
        checkoutData.phone &&
        checkoutData.address;

    if (state.items.length === 0) {
        return (
            <div className="min-h-screen bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Link
                        to="/"
                        className="inline-flex items-center text-gray-600 hover:text-primary mb-8"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Continue Shopping
                    </Link>

                    <div className="text-center py-16">
                        <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            Your cart is empty
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Looks like you haven't added any products to your
                            cart yet.
                        </p>
                        <Link to="/">
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90"
                            >
                                Start Shopping
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Link
                    to="/"
                    className="inline-flex items-center text-gray-600 hover:text-primary mb-8"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Continue Shopping
                </Link>

                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                    Shopping Cart
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {state.items.map((item) => (
                            <Card key={`${item.product.id}-${item.size}`}>
                                <CardContent className="p-6">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={item.product.image}
                                            alt={item.product.name}
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />

                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900">
                                                {item.product.name}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                Size: {item.size}
                                            </p>
                                            <p className="text-lg font-bold text-primary">
                                                {formatPrice(item.price)}
                                            </p>
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.product.id,
                                                        item.size,
                                                        item.quantity - 1,
                                                    )
                                                }
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <span className="w-8 text-center font-semibold">
                                                {item.quantity}
                                            </span>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() =>
                                                    updateQuantity(
                                                        item.product.id,
                                                        item.size,
                                                        item.quantity + 1,
                                                    )
                                                }
                                            >
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>

                                        <div className="text-right">
                                            <p className="font-bold text-gray-900">
                                                {formatPrice(
                                                    item.price * item.quantity,
                                                )}
                                            </p>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() =>
                                                    removeItem(
                                                        item.product.id,
                                                        item.size,
                                                    )
                                                }
                                                className="text-red-500 hover:text-red-700 mt-2"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        <div className="flex justify-between items-center pt-4">
                            <Button variant="outline" onClick={clearCart}>
                                Clear Cart
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => setIsCheckingOut(!isCheckingOut)}
                            >
                                {isCheckingOut
                                    ? "Continue Shopping"
                                    : "Proceed to Checkout"}
                            </Button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between">
                                    <span>
                                        Subtotal (
                                        {state.items.reduce(
                                            (sum, item) => sum + item.quantity,
                                            0,
                                        )}{" "}
                                        items)
                                    </span>
                                    <span className="font-semibold">
                                        {formatPrice(state.total)}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="font-semibold">
                                        {shippingCost === 0
                                            ? "FREE"
                                            : formatPrice(shippingCost)}
                                    </span>
                                </div>

                                {state.total >= 50000 && (
                                    <p className="text-sm text-green-600">
                                        🎉 You qualify for free shipping!
                                    </p>
                                )}

                                <Separator />

                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total</span>
                                    <span className="text-primary">
                                        {formatPrice(totalWithShipping)}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Checkout Form */}
                        {isCheckingOut && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Checkout Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input
                                            id="name"
                                            value={checkoutData.name}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "name",
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={checkoutData.email}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "email",
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="phone">
                                            Phone Number
                                        </Label>
                                        <Input
                                            id="phone"
                                            value={checkoutData.phone}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "phone",
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Enter your phone number"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="address">
                                            Delivery Address
                                        </Label>
                                        <Input
                                            id="address"
                                            value={checkoutData.address}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "address",
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Enter your delivery address"
                                        />
                                    </div>

                                    <Button
                                        onClick={handleCheckout}
                                        disabled={
                                            !isCheckoutValid ||
                                            isProcessingOrder
                                        } // Disable when validating & processing
                                        className="w-full bg-primary hover:bg-primary/90"
                                        size="lg"
                                    >
                                        {isProcessingOrder
                                            ? "Processing..."
                                            : `Place Order - ${formatPrice(totalWithShipping)}`}
                                    </Button>

                                    <p className="text-xs text-gray-600 text-center">
                                        This is a demo checkout. No payment will
                                        be processed.
                                    </p>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
