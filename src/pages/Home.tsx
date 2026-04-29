import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  MapPin, Navigation, ArrowRight, ShieldCheck, 
  Clock, CreditCard, ChevronRight, Star, Smartphone,
  Package, Truck, Briefcase, Zap, CheckCircle2
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pricePreview, setPricePreview] = useState<number | null>(null);

  // Mock price calculation
  const handleCalculatePrice = () => {
    if (pickup && dropoff) {
      setPricePreview(Math.floor(Math.random() * 500) + 200); // 200 - 700 KES
    }
  };

  return (
    <>
      <HeroSection 
        pickup={pickup} 
        setPickup={setPickup}
        dropoff={dropoff} 
        setDropoff={setDropoff}
        pricePreview={pricePreview}
        handleCalculatePrice={handleCalculatePrice}
      />
      
      <TrustIndicators />
      <HowItWorks />
      <ServicesSection />
      <AppPromotion />
      <Testimonials />
      <FinalCTA />
      
      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
         <Link to="/book" className="block">
          <Button size="lg" className="w-full shadow-xl shadow-primary-600/20 font-bold">
            Book Delivery Now
          </Button>
         </Link>
      </div>
    </>
  );
}

function HeroSection({ pickup, setPickup, dropoff, setDropoff, pricePreview, handleCalculatePrice }: any) {
  return (
    <section className="relative overflow-hidden bg-white pt-16 md:pt-24 pb-16">
      {/* Background Decor */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-200 to-primary-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-600 ring-1 ring-inset ring-primary-600/20 mb-6">
                <Zap className="h-4 w-4" /> Available 24/7 in Nairobi
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                Fast & Reliable <br/>
                <span className="text-primary-600">Delivery Across Nairobi</span>
              </h1>
              <p className="mt-6 text-lg tracking-tight text-gray-600">
                Send packages, food, and goods in minutes. Professional bodas and vans ready to pick up your order right now.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                 <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                   <ShieldCheck className="h-5 w-5 text-primary-600" /> Fully Insured
                 </div>
                 <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                   <Clock className="h-5 w-5 text-primary-600" /> Instant Pickup
                 </div>
                 <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                   <CreditCard className="h-5 w-5 text-primary-600" /> M-Pesa Ready
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Booking Card */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="relative"
          >
            <Card className="shadow-2xl shadow-gray-200/50 border-0 bg-white/90 backdrop-blur-xl">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Package className="h-6 w-6 text-primary-600" /> Let's get moving
                </h3>
                
                <div className="space-y-4 relative">
                   {/* Connecting Line */}
                   <div className="absolute left-[1.15rem] top-8 bottom-8 w-0.5 bg-gray-100 z-0"></div>
                   
                   <div className="relative z-10 flex gap-4">
                     <div className="mt-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100">
                        <MapPin className="h-4 w-4 text-primary-600" />
                     </div>
                     <div className="flex-1">
                       <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Pickup From</label>
                       <Input 
                         placeholder="Where are we picking up?" 
                         value={pickup}
                         onChange={(e) => setPickup(e.target.value)}
                         className="bg-white border-gray-200 h-12"
                       />
                     </div>
                   </div>

                   <div className="relative z-10 flex gap-4">
                     <div className="mt-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100">
                        <Navigation className="h-4 w-4 text-gray-600" />
                     </div>
                     <div className="flex-1">
                       <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1 block">Drop-Off To</label>
                       <Input 
                         placeholder="Where is it going?" 
                         value={dropoff}
                         onChange={(e) => setDropoff(e.target.value)}
                         className="bg-white border-gray-200 h-12"
                       />
                     </div>
                   </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  {pricePreview ? (
                    <div className="flex justify-between items-end mb-6">
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Estimated Price</p>
                        <p className="text-3xl font-bold text-gray-900">KES {pricePreview}</p>
                      </div>
                      <Link to={`/book?pickup=${pickup}&dropoff=${dropoff}`}>
                        <Button size="lg" className="gap-2 group shadow-xl shadow-primary-600/20">
                           Book Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <Button 
                      size="lg" 
                      className="w-full text-base font-semibold h-14" 
                      onClick={handleCalculatePrice}
                      disabled={!pickup || !dropoff}
                    >
                      See Prices
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function TrustIndicators() {
  const stats = [
    { label: "Deliveries Completed", value: "10,000+" },
    { label: "Active Riders", value: "500+" },
    { label: "Average Delivery Time", value: "25 min" },
    { label: "Service Rating", value: "4.9/5" },
  ];

  return (
    <section className="border-y border-gray-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Trusted by Nairobi's Best Businesses</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x divide-gray-100">
           {stats.map((stat, idx) => (
             <div key={idx} className="flex flex-col items-center justify-center px-4">
               <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
               <span className="text-sm font-medium text-gray-500 mt-1">{stat.label}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: "Enter Details", desc: "Where from, where to, what are you sending.", icon: <MapPin className="h-6 w-6" /> },
    { title: "Get Prices", desc: "Instant upfront pricing with no hidden fees.", icon: <CreditCard className="h-6 w-6" /> },
    { title: "Rider Matches", desc: "A professional rider picks it up in minutes.", icon: <Truck className="h-6 w-6" /> },
    { title: "Real-time Track", desc: "Watch your delivery live on the map.", icon: <Navigation className="h-6 w-6" /> },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Simple Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">How it works</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
               <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-primary-600 mb-6 relative z-10">
                 {step.icon}
                 <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold border-4 border-gray-50">
                   {idx + 1}
                 </div>
               </div>
               <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
               <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
               
               {/* Connector Line hidden on mobile */}
               {idx !== steps.length - 1 && (
                 <div className="hidden md:block absolute top-8 left-[60%] right-[-40%] h-0.5 border-t-2 border-dashed border-gray-200 z-0"></div>
               )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    { title: "Parcel Delivery", desc: "Documents, gifts, clothes. Picked up and delivered same day.", icon: <Package className="h-6 w-6"/> },
    { title: "Food & Grocery", desc: "Fast boda riders equipped with insulated bags.", icon: <Clock className="h-6 w-6"/> },
    { title: "Business Logistics", desc: "Bulk deliveries, route optimization, and dedicated riders.", icon: <Briefcase className="h-6 w-6"/> },
  ]
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">We deliver whatever you need.</h3>
          </div>
          <Button variant="outline" className="hidden sm:flex gap-2 rounded-full">
            View All Services <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {services.map((svc, idx) => (
             <Card key={idx} className="bg-gray-50 border-0 hover:bg-primary-50 transition-colors group cursor-pointer">
               <CardContent className="p-8">
                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                   {svc.icon}
                 </div>
                 <h4 className="text-xl font-bold text-gray-900 mb-3">{svc.title}</h4>
                 <p className="text-gray-500 text-sm mb-6">{svc.desc}</p>
                 <span className="text-primary-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                   Learn more <ArrowRight className="h-4 w-4" />
                 </span>
               </CardContent>
             </Card>
           ))}
        </div>
      </div>
    </section>
  );
}

function AppPromotion() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-600 rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-primary-600/30">
           {/* Abstract Circle */}
           <div className="absolute -right-32 -top-32 w-[30rem] h-[30rem] rounded-full bg-primary-500 opacity-50 blur-3xl"></div>
           
           <div className="max-w-xl relative z-10 mb-10 md:mb-0 text-center md:text-left">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
               Get the Deliveroo App
             </h2>
             <p className="text-primary-100 text-lg mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
               Track your deliveries live, get instant notifications, and re-order with one tap. Our Android app is built for speed and saves data.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               <Button size="lg" className="bg-gray-900 text-white hover:bg-black rounded-full h-14 px-8 shadow-xl">
                 <Smartphone className="mr-2 h-5 w-5" /> Download for Android
               </Button>
               <Button size="lg" variant="outline" className="bg-transparent border-primary-400 text-white hover:bg-primary-500 rounded-full h-14">
                 Learn More
               </Button>
             </div>
           </div>
           
           <div className="relative z-10 transform md:translate-y-12">
             <div className="w-64 h-[28rem] bg-gray-900 rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl relative overflow-hidden flex flex-col pt-8 px-4">
                {/* Mock App Screen */}
                <div className="bg-white rounded-t-2xl flex-1 w-full p-4 flex flex-col gap-4 relative">
                  <div className="h-10 bg-gray-100 rounded-lg w-full"></div>
                  <div className="h-32 bg-gray-100 rounded-xl w-full"></div>
                  <div className="flex gap-2">
                    <div className="h-20 bg-gray-100 rounded-xl flex-1"></div>
                    <div className="h-20 bg-gray-100 rounded-xl flex-[2]"></div>
                  </div>
                  {/* Floating Notification */}
                  <div className="absolute bottom-4 left-4 right-4 bg-gray-900 rounded-lg p-3 shadow-lg flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white"><CheckCircle2 className="h-4 w-4"/></div>
                    <div>
                      <p className="text-[10px] text-gray-300">Update</p>
                      <p className="text-xs text-white font-bold">Rider arriving in 2 min</p>
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { text: "Best boda delivery in Nairobi. They actually show up when they say they will, and the pricing doesn't change randomly.", author: "Njeri K.", role: "Instagram Vendor" },
    { text: "I run a small restaurant in Kilimani. Deliveroo handles all our lunch rush deliveries. Lifesavers! Mpesa integration makes it seamless.", author: "Mwangi D.", role: "Restaurant Owner" },
    { text: "Sent a contract across town in under 30 minutes. Extremely professional riders. Highly recommended for urgent parcels.", author: "Sarah W.", role: "Lawyer" },
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Kenyans are saying</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <Card key={i} className="bg-white border-gray-100 p-8 shadow-sm rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6 text-amber-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-gray-600 text-base leading-relaxed mb-8">"{r.text}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-lg">
                  {r.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{r.author}</p>
                  <p className="text-xs text-gray-500">{r.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="bg-white py-24 pb-32 md:pb-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Ready to move something?</h2>
        <p className="text-lg text-gray-600 mb-10">Join thousands of Nairobi businesses and individuals using Deliveroo to send items fast.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/book">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full shadow-lg shadow-primary-600/30">
              Send a Package Now
            </Button>
          </Link>
          <Link to="/rider">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full">
              Start Delivering Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
