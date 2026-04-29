import { Briefcase, BarChart3, Users, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";

export default function Business() {
  return (
    <div className="flex-1 bg-white">
      {/* Hero */}
      <section className="bg-gray-900 py-20 text-white text-center">
        <div className="mx-auto max-w-4xl px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-600/20 text-primary-400 font-semibold mb-6">
            B2B Logistics Solution
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Focus on your business.<br/>We'll handle the deliveries.</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            From Instagram boutiques to enterprise e-commerce, Deliveroo provides scalable logistics with API access and a dedicated dashboard.
          </p>
          <Button size="lg" className="h-14 px-8 text-lg rounded-full">
            Open a Business Account
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Built for scale and speed</h2>
              
              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Centralized Dashboard</h4>
                  <p className="text-gray-600">Track all your active deliveries in one place. Export monthly reports for accounting. Manage bulk orders easily.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">API Integration</h4>
                  <p className="text-gray-600">Connect your Shopify, WooCommerce, or custom app directly to our dispatch system. Automate your logistics pipeline.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Dedicated Account Manager</h4>
                  <p className="text-gray-600">Enterprise volume clients get a dedicated WhatsApp line for immediate issue resolution and custom vehicle requests.</p>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-2xl p-8 bg-white">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Request a Demo</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1">Company Name</label>
                  <Input placeholder="e.g. Trendy Collections KE" className="bg-gray-50 border-gray-200" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-1">First Name</label>
                    <Input placeholder="John" className="bg-gray-50 border-gray-200" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-1">Last Name</label>
                    <Input placeholder="Doe" className="bg-gray-50 border-gray-200" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1">Work Email</label>
                  <Input type="email" placeholder="john@company.co.ke" className="bg-gray-50 border-gray-200" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1">Estimated Monthly Deliveries</label>
                  <select className="w-full h-11 px-3 border border-gray-200 rounded-md bg-gray-50 text-sm">
                    <option>Less than 100</option>
                    <option>100 - 500</option>
                    <option>500 - 1000</option>
                    <option>1000+</option>
                  </select>
                </div>
                <Button className="w-full h-12 text-base font-bold mt-4 shadow-lg shadow-primary-600/20">
                  Submit Request
                </Button>
              </form>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
