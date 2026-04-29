import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

export default function Contact() {
  return (
    <div className="flex-1 bg-gray-50 flex flex-col">
      {/* Header */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-100 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-900">Get in Touch</h1>
          <p className="text-lg text-gray-600">
            Have a question, feedback, or need help with a delivery? Our Nairobi-based support team is here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 flex-1">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone Support</h4>
                  <p className="text-gray-600 text-sm mt-1 mb-2">Available 24/7 for urgent delivery issues.</p>
                  <p className="font-semibold text-primary-600">+254 700 000 000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Support</h4>
                  <p className="text-gray-600 text-sm mt-1 mb-2">For business inquiries and general questions.</p>
                  <p className="font-semibold text-primary-600">hello@deliveroo.co.ke</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Our Office</h4>
                  <p className="text-gray-600 text-sm mt-1">Westlands Business Park<br/>Waiyaki Way, Nairobi<br/>Kenya</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Full Name</label>
                        <Input placeholder="John Doe" className="bg-gray-50 border-gray-200" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                         <Input placeholder="07xx xxx xxx" className="bg-gray-50 border-gray-200" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Email Address</label>
                      <Input type="email" placeholder="john@example.com" className="bg-gray-50 border-gray-200" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Subject</label>
                      <select className="flex h-11 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500">
                        <option>General Inquiry</option>
                        <option>Delivery Issue</option>
                        <option>Business Account Setup</option>
                        <option>Rider Application Issue</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">Message</label>
                      <textarea 
                        className="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500" 
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <Button size="lg" className="w-full text-base gap-2">
                      Send Message <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
