import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Info, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";

export default function Pricing() {
  const [distance, setDistance] = useState("5");

  // Base KES 200 + 30 KES per km
  const estimatedPrice = 200 + (parseInt(distance) || 0) * 30;

  return (
    <div className="flex-1 bg-gray-50 flex flex-col">
      {/* Header */}
      <section className="bg-primary-900 py-16 md:py-24 text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Fair, Transparent Pricing</h1>
          <p className="text-lg text-primary-100 mb-8">
            No hidden fees. No unexpected surges. Pay for exactly what you need delivered.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 -mt-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Calculator */}
            <Card className="shadow-xl">
              <CardHeader className="bg-white border-b border-gray-100 rounded-t-xl">
                <CardTitle className="text-2xl font-bold">Price Estimator</CardTitle>
                <p className="text-gray-500 text-sm">See how much your delivery will cost in Nairobi.</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div>
                    <label className="flex justify-between text-sm font-semibold text-gray-700 mb-4">
                      <span>Estimated Distance (km)</span>
                      <span className="text-primary-600 px-2 py-1 bg-primary-50 rounded-md">{distance} km</span>
                    </label>
                    <input 
                      type="range" 
                      min="1" 
                      max="30" 
                      value={distance} 
                      onChange={(e) => setDistance(e.target.value)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                      <span>1 km</span>
                      <span>30 km (Nairobi wide)</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl space-y-4 border border-gray-100">
                    <div className="flex justify-between text-gray-600">
                      <span>Base Fare</span>
                      <span>KES 200</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Distance Fare ({distance}km × KES 30)</span>
                      <span>KES {(parseInt(distance) || 0) * 30}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                      <span className="font-bold text-gray-900">Estimated Total</span>
                      <span className="text-2xl font-bold text-primary-600">KES {estimatedPrice}</span>
                    </div>
                  </div>

                  <Link className="block" to="/book">
                    <Button size="lg" className="w-full">
                      Book at this price
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Types */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vehicles</h3>
              
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-6 hover:border-primary-300 transition-colors">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-3xl shrink-0">🏍️</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Boda Boda (Motorbike)</h4>
                  <p className="text-gray-500 text-sm mb-4">Perfect for documents, small parcels, and food. Navigates traffic fast.</p>
                  <ul className="text-sm space-y-2 text-gray-600">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary-500"/> Max capacity: 15kg</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary-500"/> Fits in an insulated delivery bag</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary-500"/> KES 200 base + 30/km</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-6 hover:border-primary-300 transition-colors">
                <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center text-3xl shrink-0">🚐</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Delivery Van</h4>
                  <p className="text-gray-500 text-sm mb-4">For bulk goods, furniture, and large corporate deliveries.</p>
                  <ul className="text-sm space-y-2 text-gray-600">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary-500"/> Max capacity: 500kg</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary-500"/> Weatherproof transport</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary-500"/> KES 800 base + 50/km</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="grid gap-6 md:grid-cols-2 text-left">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">Are there waiting fees?</h4>
              <p className="text-sm text-gray-600">The first 10 minutes are free. After that, we charge KES 5 per minute of waiting time to compensate the rider.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">Do prices change when it rains?</h4>
              <p className="text-sm text-gray-600">During extreme weather, a surge multiplier (up to 1.5x) may apply to ensure riders are available and compensated fairly.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">How do I pay?</h4>
              <p className="text-sm text-gray-600">We support automatic M-Pesa STK push, Credit/Debit cards, and Cash on Delivery.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">Are my items insured?</h4>
              <p className="text-sm text-gray-600">Yes, every standard booking includes up to KES 50,000 Goods-in-Transit insurance at no extra cost.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
