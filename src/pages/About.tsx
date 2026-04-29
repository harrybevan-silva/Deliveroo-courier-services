import { Shield, FastForward, Users, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="flex-1 bg-white">
      {/* Hero */}
      <section className="bg-primary-50 py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">Moving Nairobi Forward.</h1>
          <p className="text-lg text-gray-600">
            We started Deliveroo Kenya with a simple mission: to make logistics in Nairobi fast, trustworthy, and affordable for everyone.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-lg prose-primary mx-auto text-gray-600">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans">Our Story</h2>
            <p className="mb-6">
              Nairobi is a fast-paced city. Businesses are growing, e-commerce is booming, and people are always on the move. But for a long time, getting a package across town meant unreliable pricing, lost items, and zero tracking.
            </p>
            <p className="mb-6">
              We decided to fix that. Deliveroo Kenya was built to bring structure and transparency to the local boda-boda courier network. We connected professional riders with smart technology to offer instant pricing, real-time map tracking, and guaranteed delivery times.
            </p>
            <p>
              Today, we are proud to power logistics for thousands of small businesses, restaurants, and individuals across Nairobi. 
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-600/20 text-primary-400 flex items-center justify-center mx-auto mb-6">
                <FastForward className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Speed</h3>
              <p className="text-gray-400">Time is money. We optimize routing and dispatching to guarantee the fastest delivery times in the city.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-600/20 text-primary-400 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trust</h3>
              <p className="text-gray-400">Total transparency in pricing and package tracking. Every rider is vetted, trained, and accountable.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-600/20 text-primary-400 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-400">We empower local riders to become independent entrepreneurs by providing them with consistent work and fair pay.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-600/20 text-primary-400 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer First</h3>
              <p className="text-gray-400">Everything we build, from our app to our customer support operations, is designed around making your life easier.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
