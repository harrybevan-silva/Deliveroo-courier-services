import { Car, Smartphone, DollarSign, Clock, MapPin, Search, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

export default function Rider() {
  return (
    <div className="flex-1 bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-20 pb-0">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left pt-10 pb-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
              Turn your ride <br/>into an <span className="text-primary-600">income.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Deliver food, parcels, and goods in Nairobi. Keep 100% of your tips and earn competitive rates per km. Be your own boss.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary-600/30">
                Sign Up as Rider
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-500 font-medium">Boda bodas, vans, and tuk-tuks welcome.</p>
          </div>
          
          <div className="flex-1 w-full h-[30rem] bg-gray-100 rounded-t-3xl relative overflow-hidden border-t-8 border-x-8 border-white shadow-2xl">
              <div className="absolute inset-0 bg-primary-100/50 flex flex-col items-center justify-center p-8 gap-4">
                 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-sm">
                   <DollarSign className="h-8 w-8 text-green-600"/>
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-xs text-center border border-gray-100 transform -rotate-3">
                   <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">TODAY'S EARNINGS</p>
                   <p className="text-3xl font-bold text-gray-900 mt-1">KES 3,250</p>
                 </div>
              </div>
          </div>
        </div>
      </section>

      {/* Why Ride with Us */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Why ride with Deliveroo?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Great Earnings</h3>
              <p className="text-gray-600">Competitive pay per drop, distance bonuses, and surge pricing during peak hours. Get paid daily via M-Pesa.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Hours</h3>
              <p className="text-gray-600">Work when you want, where you want. Turn the app on when you are ready, turn it off when you're done.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart App</h3>
              <p className="text-gray-600">Our rider app guides you turn-by-turn and suggests hot-spots for maximum earnings in Nairobi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What you need to start</h2>
          
          <div className="bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden p-8 md:p-12">
            <div className="grid sm:grid-cols-2 gap-8 gap-y-10">
               <div>
                  <div className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-500"/> Valid ID
                  </div>
                  <p className="text-gray-600 text-sm ml-8">Kenyan National ID or Passport</p>
               </div>
               <div>
                  <div className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-500"/> Driving License
                  </div>
                  <p className="text-gray-600 text-sm ml-8">Valid driving license with relevant stamp for your vehicle</p>
               </div>
               <div>
                  <div className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-500"/> Vehicle Insurance
                  </div>
                  <p className="text-gray-600 text-sm ml-8">Valid comprehensive or third-party insurance</p>
               </div>
               <div>
                  <div className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-500"/> Smartphone
                  </div>
                  <p className="text-gray-600 text-sm ml-8">Android device (v8.0 or newer) with a data plan</p>
               </div>
            </div>

            <div className="mt-12 text-center pt-8 border-t border-gray-100">
               <Button size="lg" className="w-full sm:w-auto h-14 px-12 rounded-full shadow-lg shadow-primary-600/30">
                 Apply Now
               </Button>
               <p className="text-gray-500 text-sm mt-4">Takes less than 5 minutes</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
