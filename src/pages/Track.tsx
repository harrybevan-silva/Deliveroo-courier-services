import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Truck, CheckCircle2, Navigation, Package } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";

export default function TrackOrder() {
  const [trackingId, setTrackingId] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [trackingData, setTrackingData] = useState<any>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;
    
    setIsTracking(true);
    
    // Mock API call to fetch tracking data
    setTimeout(() => {
      setIsTracking(false);
      
      // Simulate found package
      setTrackingData({
        id: trackingId,
        status: "on_the_way", // pending, picked_up, on_the_way, delivered
        estimatedTime: "14 mins",
        rider: {
          name: "Kevin M.",
          rating: 4.8,
          plate: "KMD 123G",
          phone: "+254 712 *** ***"
        },
        pickup: "Westlands, Nairobi",
        dropoff: "Kilimani, Nairobi",
        steps: [
          { status: "booked", time: "10:00 AM", label: "Booking Confirmed", complete: true },
          { status: "picked_up", time: "10:15 AM", label: "Package Picked Up", complete: true },
          { status: "on_the_way", time: "Now", label: "Rider on the way", complete: true },
          { status: "delivered", time: "--:--", label: "Package Delivered", complete: false },
        ]
      })
    }, 1500)
  }

  return (
    <div className="flex-1 bg-gray-50 flex flex-col items-center">
      
      {/* Search Header */}
      <div className="w-full bg-white border-b border-gray-100 py-12">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6">
            <Navigation className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Track your delivery</h1>
          <p className="text-gray-500 mb-8">Enter your tracking ID or phone number to see where your package is right now.</p>
          
          <form onSubmit={handleTrack} className="flex gap-2 max-w-lg mx-auto">
             <Input 
               placeholder="Tracking ID (e.g., DEL-123456)" 
               className="h-14 text-lg bg-gray-50"
               value={trackingId}
               onChange={(e) => setTrackingId(e.target.value)}
             />
             <Button type="submit" size="lg" className="h-14 px-8 text-base shadow-lg shadow-primary-600/20" disabled={isTracking || !trackingId}>
               {isTracking ? "Searching..." : "Track"}
             </Button>
          </form>
        </div>
      </div>

      {/* Tracking Results */}
      {trackingData && (
        <div className="w-full max-w-4xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-5 gap-8">
            
            {/* Status Timeline */}
            <div className="lg:col-span-2">
               <h3 className="text-xl font-bold text-gray-900 mb-6">Delivery Status</h3>
               <Card>
                 <CardContent className="p-6">
                   <div className="relative border-l-2 border-gray-100 ml-3 space-y-8 pb-4">
                     {trackingData.steps.map((step: any, idx: number) => (
                        <div key={idx} className="relative pl-6">
                          <div className={`absolute -left-[9px] w-4 h-4 rounded-full border-2 ${
                             step.complete 
                               ? "bg-primary-600 border-primary-600" 
                               : "bg-white border-gray-300"
                          }`}>
                            {step.complete && <div className="absolute inset-0 rounded-full animate-ping bg-primary-400 opacity-20"></div>}
                          </div>
                          <div>
                            <p className={`font-semibold text-sm ${step.complete ? "text-gray-900" : "text-gray-500"}`}>{step.label}</p>
                            <p className="text-xs text-gray-400 mt-1">{step.time}</p>
                          </div>
                        </div>
                     ))}
                   </div>
                 </CardContent>
               </Card>
            </div>

            {/* Map Placeholder & Details */}
            <div className="lg:col-span-3 space-y-6">
               <Card className="overflow-hidden">
                 {/* Mock Map Area */}
                 <div className="h-64 bg-gray-200 w-full relative flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                      alt="Map background" 
                      className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
                    />
                    <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply"></div>
                    
                    {/* Mock Map UI Elements */}
                    <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white z-10"><Package className="h-4 w-4" /></div>
                    <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white z-10"><MapPin className="h-4 w-4" /></div>
                    
                    {/* Pulsing Rider */}
                    <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-white text-primary-600 rounded-full flex items-center justify-center shadow-xl z-20 transform -translate-x-1/2 -translate-y-1/2">
                       <Truck className="h-5 w-5" />
                       <span className="absolute flex h-full w-full">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                        </span>
                    </div>

                    {/* Path SVG Mock */}
                    <svg className="absolute w-full h-full z-0 pointer-events-none" preserveAspectRatio="none">
                      <path d="M 25% 25% Q 50% 20% 50% 50% T 75% 66%" stroke="black" strokeWidth="3" strokeDasharray="6 6" fill="transparent" className="opacity-40" />
                    </svg>
                 </div>
                 
                 <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">ETA</p>
                        <p className="text-3xl font-bold text-gray-900">{trackingData.estimatedTime}</p>
                      </div>
                      <div className="text-right">
                         <p className="text-sm font-semibold text-gray-900">Tracking #{trackingData.id}</p>
                         <p className="text-sm text-primary-600 font-medium">Driver assigned</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                       <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                           <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Rider" className="w-full h-full object-cover" />
                         </div>
                         <div>
                           <p className="font-bold text-gray-900">{trackingData.rider.name}</p>
                           <p className="text-sm text-gray-500 flex items-center gap-1">
                              ⭐ {trackingData.rider.rating} • {trackingData.rider.plate}
                           </p>
                         </div>
                       </div>
                       <Button variant="outline" size="sm" className="rounded-full">Call Rider</Button>
                    </div>
                 </CardContent>
               </Card>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
