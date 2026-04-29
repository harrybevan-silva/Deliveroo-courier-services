import { motion } from "framer-motion";
import { MapPin, CreditCard, Truck, Navigation, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  const steps = [
    {
      title: "Set your locations",
      desc: "Tell us where the package is being picked up from and where it's going. You can use landmarks or specific building names in Nairobi.",
      icon: <MapPin className="h-8 w-8" />,
    },
    {
      title: "Choose package & Get Price",
      desc: "Select what you're sending (food, document, or boxes). We'll give you an instant, fixed price. No hidden 'traffic' fees later.",
      icon: <CreditCard className="h-8 w-8" />,
    },
    {
      title: "Rider Pickup",
      desc: "Our nearest professional rider accepts the request and arrives at your doorstep in minutes. All riders are vetted and trained.",
      icon: <Truck className="h-8 w-8" />,
    },
    {
      title: "Track & Confirm",
      desc: "Watch your delivery move across the map in real-time. Share the tracking link with the receiver. Confirm delivery once it arrives.",
      icon: <Navigation className="h-8 w-8" />,
    },
  ];

  return (
    <div className="flex-1 bg-white">
      {/* Hero */}
      <section className="bg-primary-600 py-16 md:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Delivery as it should be</h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            We've simplified logistics in Kenya. No more calling multiple riders or haggling over prices.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-24">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{idx + 1}. {step.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
                <div className="flex-1 w-full bg-gray-50 rounded-3xl aspect-video flex items-center justify-center border border-gray-100 shadow-inner">
                   <div className="text-gray-400 font-medium italic">Visual representation of {step.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Nairobi trusts Deliveroo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Goods-in-Transit Insurance"
              desc="Your packages are covered up to KES 50,000 automatically. High-value insurance available on request."
            />
             <FeatureCard 
              icon={<Clock className="h-6 w-6" />}
              title="The 45-Minute Promise"
              desc="90% of our cross-town deliveries are completed in under 45 minutes from pickup."
            />
             <FeatureCard 
              icon={<CheckCircle2 className="h-6 w-6" />}
              title="Verified Professionals"
              desc="Every rider undergoes a background check and professional hospitality training."
            />
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to send your first package?</h2>
        <Link to="/book">
          <Button size="lg" className="rounded-full px-8">Book a Delivery Now</Button>
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
      <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
