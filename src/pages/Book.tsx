import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Navigation, Package, DollarSign, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function BookDelivery() {
  const [searchParams] = useSearchParams();
  const initPickup = searchParams.get("pickup") || "";
  const initDropoff = searchParams.get("dropoff") || "";

  const [pickup, setPickup] = useState(initPickup);
  const [dropoff, setDropoff] = useState(initDropoff);
  const [packageType, setPackageType] = useState("document");
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [price, setPrice] = useState(0);
  const [isBooking, setIsBooking] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  useEffect(() => {
    // Mock calculate price based on inputs
    if (pickup.length > 3 && dropoff.length > 3) {
      let base = 200;
      if (packageType === "large") base += 500;
      if (packageType === "food") base += 100;
      setPrice(base + Math.floor(Math.random() * 300));
    } else {
      setPrice(0);
    }
  }, [pickup, dropoff, packageType]);

  const handleBook = () => {
    setIsBooking(true);
    // Mock API call
    setTimeout(() => {
      setIsBooking(false);
      setBookingComplete(true);
    }, 2000);
  };

  if (bookingComplete) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50 p-4">
        <Card className="max-w-md w-full text-center py-12">
          <CardContent>
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-500 mb-8">
              Finding nearest rider... Tracking link has been sent via SMS.
            </p>
            <Button className="w-full" onClick={() => window.location.href = '/track'}>
              Track Order Live
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gray-50 py-8 md:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Book a Delivery</h1>
          <p className="text-gray-500 mt-2">Fill in the details to get an instant rider matching.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Route Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative flex gap-4">
                  <div className="mt-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100">
                     <MapPin className="h-4 w-4 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Pickup Address</label>
                    <Input 
                      placeholder="Street, building, or landmark" 
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                    />
                  </div>
                </div>
                <div className="relative flex gap-4">
                  <div className="mt-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100">
                     <Navigation className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Drop-off Address</label>
                    <Input 
                      placeholder="Street, building, or landmark" 
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Package Type</CardTitle>
              </CardHeader>
              <CardContent>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { id: "document", label: "Document", icon: "📄" },
                      { id: "food", label: "Food/Grocery", icon: "🍱" },
                      { id: "medium", label: "Medium Box", icon: "📦" },
                      { id: "large", label: "Large Box", icon: "🛋️" },
                    ].map(type => (
                      <div 
                        key={type.id}
                        onClick={() => setPackageType(type.id)}
                        className={`cursor-pointer rounded-xl border p-4 text-center transition-all ${
                          packageType === type.id 
                            ? "border-primary-600 bg-primary-50 ring-1 ring-primary-600 shadow-sm" 
                            : "border-gray-200 bg-white hover:border-primary-300"
                        }`}
                      >
                        <div className="text-2xl mb-2">{type.icon}</div>
                        <div className={`text-sm font-semibold ${packageType === type.id ? "text-primary-700" : "text-gray-700"}`}>
                          {type.label}
                        </div>
                      </div>
                    ))}
                 </div>
              </CardContent>
            </Card>

            <Card>
               <CardHeader>
                  <CardTitle className="text-lg">Payment Method</CardTitle>
               </CardHeader>
               <CardContent>
                 <div className="space-y-3">
                   <PaymentOption 
                      id="mpesa" 
                      label="M-Pesa (Prompt)" 
                      desc="Pushes directly to your phone" 
                      selected={paymentMethod === "mpesa"}
                      onSelect={() => setPaymentMethod("mpesa")}
                    />
                    {paymentMethod === "mpesa" && (
                      <div className="pl-12 pr-4 pb-2">
                        <Input placeholder="M-Pesa Phone Number (e.g., 0712...)" className="max-w-xs h-9 text-sm" />
                      </div>
                    )}
                   <PaymentOption 
                      id="card" 
                      label="Debit/Credit Card" 
                      desc="VISA, Mastercard" 
                      selected={paymentMethod === "card"}
                      onSelect={() => setPaymentMethod("card")}
                    />
                   <PaymentOption 
                      id="cash" 
                      label="Cash on Delivery" 
                      desc="Pay the rider directly" 
                      selected={paymentMethod === "cash"}
                      onSelect={() => setPaymentMethod("cash")}
                    />
                 </div>
               </CardContent>
            </Card>
          </div>

          {/* Pricing Summary Sticky */}
          <div className="lg:col-span-1">
             <div className="sticky top-24">
               <Card className="shadow-lg shadow-gray-200/50">
                 <CardHeader className="bg-gray-50 border-b border-gray-100 rounded-t-xl">
                   <CardTitle className="text-lg">Booking Summary</CardTitle>
                 </CardHeader>
                 <CardContent className="p-6">
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Distance fee</span>
                        <span className="font-medium text-gray-900">{price > 0 ? `KES ${price - 50}` : '--'}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Service fee</span>
                        <span className="font-medium text-gray-900">{price > 0 ? 'KES 50' : '--'}</span>
                      </div>
                      <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                        <span className="font-bold text-gray-900">Total Price</span>
                        <span className="text-2xl font-bold text-primary-600">
                          {price > 0 ? `KES ${price}` : '---'}
                        </span>
                      </div>
                    </div>
                    
                    {!price ? (
                      <div className="bg-amber-50 text-amber-800 p-3 rounded-md text-sm flex gap-2 items-start mb-6 border border-amber-200">
                        <AlertCircle className="h-5 w-5 shrink-0" />
                        <p>Enter valid pickup and drop-off locations to calculate price.</p>
                      </div>
                    ) : null}

                    <Button 
                      className="w-full h-12 text-base font-semibold shadow-xl shadow-primary-600/20" 
                      disabled={!price || isBooking}
                      onClick={handleBook}
                    >
                      {isBooking ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                          Processing...
                        </div>
                      ) : (
                        `Confirm Booking`
                      )}
                    </Button>
                    <p className="text-xs text-center text-gray-500 mt-4 leading-relaxed">
                      By confirming this booking, you agree to our Terms of Service and Privacy Policy.
                    </p>
                 </CardContent>
               </Card>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PaymentOption({ id, label, desc, selected, onSelect }: any) {
  return (
    <div 
      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
        selected ? "border-primary-600 bg-primary-50 ring-1 ring-primary-600" : "border-gray-200 hover:bg-gray-50"
      }`}
      onClick={onSelect}
    >
      <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-4 shrink-0 ${
        selected ? "border-primary-600" : "border-gray-300"
      }`}>
        {selected && <div className="w-2.5 h-2.5 rounded-full bg-primary-600" />}
      </div>
      <div>
        <div className="font-semibold text-gray-900">{label}</div>
        <div className="text-sm text-gray-500">{desc}</div>
      </div>
    </div>
  )
}
