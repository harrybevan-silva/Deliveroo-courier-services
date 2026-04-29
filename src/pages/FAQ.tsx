import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "../components/ui/input";

export default function FAQ() {
  const categories = [
    "Booking & Tracking",
    "Payments & Pricing",
    "Riders & Security",
    "Business Accounts",
  ];

  const faqs = [
    {
      q: "How do I track my package?",
      a: "Once your rider is assigned, you'll receive an SMS with a live tracking link. You can also enter your Tracking ID on our 'Track Order' page to see its exact location on the map.",
      cat: "Booking & Tracking"
    },
    {
      q: "What areas do you cover?",
      a: "We currently cover the entire Nairobi Metropolitan Area, including Westlands, Kilimani, CBD, Thika Road, Ngong Road, and surrounding suburbs.",
      cat: "Booking & Tracking"
    },
    {
      q: "Can I cancel a booking?",
      a: "Yes, you can cancel a booking free of charge before a rider is assigned. If a rider is already on the way to pick up the item, a small cancellation fee of KES 50 applies.",
      cat: "Booking & Tracking"
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept M-Pesa (via STK push), Debit/Credit Cards (Visa/Mastercard), and Cash on Delivery. For business accounts, we offer weekly post-paid invoicing.",
      cat: "Payments & Pricing"
    },
    {
      q: "Are the prices fixed?",
      a: "Yes. The price you see when you book is the final price. However, extra charges may apply if the rider is kept waiting at the pickup or drop-off point for more than 10 minutes.",
      cat: "Payments & Pricing"
    },
    {
      q: "Are my packages safe?",
      a: "Absolutely. All our riders go through a rigorous vetting process, including physical address verification and certificate of good conduct checks. Every delivery is insured up to KES 50,000.",
      cat: "Riders & Security"
    },
    {
      q: "How do I apply to become a rider?",
      a: "You can apply via the 'Become a Rider' page on our website. You will need a valid National ID, Driving License, Smartphone, and a well-maintained motorbike or van.",
      cat: "Riders & Security"
    },
    {
      q: "What do business accounts get?",
      a: "Business accounts get access to a centralized dashboard for managing multiple orders, API access for their e-commerce sites, monthly reporting, and a dedicated account manager.",
      cat: "Business Accounts"
    }
  ];

  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter(f => {
    const matchesCat = activeCat === "All" || f.cat === activeCat;
    const matchesSearch = f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex-1 bg-gray-50 flex flex-col items-center">
      
      {/* Header */}
      <div className="w-full bg-primary-900 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h1 className="text-4xl font-bold mb-6">How can we help?</h1>
          <div className="relative max-w-lg mx-auto text-gray-900">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Search for answers..." 
              className="h-14 pl-12 rounded-full border-0 shadow-lg text-base"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h3 className="font-bold text-gray-900 mb-4 px-4 p-2 text-sm uppercase tracking-wider">Categories</h3>
            <div className="flex flex-col space-y-1">
              <button 
                className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCat === "All" ? "bg-primary-50 text-primary-600" : "text-gray-600 hover:bg-gray-50"}`}
                onClick={() => setActiveCat("All")}
              >
                All Questions
              </button>
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCat === cat ? "bg-primary-50 text-primary-600" : "text-gray-600 hover:bg-gray-50"}`}
                  onClick={() => setActiveCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">
          {filteredFaqs.length === 0 ? (
             <div className="text-center py-12 text-gray-500">
               No questions found matching your search.
             </div>
          ) : (
            filteredFaqs.map((faq, idx) => (
              <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))
          )}
        </div>

      </div>
    </div>
  );
}

function FAQItem({ question, answer }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border text-left border-gray-100 rounded-xl shadow-sm overflow-hidden transition-all">
      <button 
        className="w-full flex items-center justify-between p-6 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-gray-900 text-lg">{question}</span>
        <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}
