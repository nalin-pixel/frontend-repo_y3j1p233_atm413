import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CTAWaitlist() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend in this task; emulate success
    alert(`Thanks! We'll notify you at ${email}`);
    setEmail("");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 md:p-12 shadow-xl shadow-emerald-100/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Ready to grow your organic traffic?</h3>
              <p className="mt-2 text-gray-600">Join the waitlist to get early access and a free onboarding session.</p>
              <div className="mt-4 flex gap-4">
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-medium shadow-md shadow-emerald-600/30 hover:bg-emerald-700">
                  Connect Your Store <ArrowRight className="h-4 w-4" />
                </button>
                <button className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-900 hover:shadow-md">Try It for Free</button>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 p-4 md:p-6 shadow-sm">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Join Waitlist</label>
              <div className="mt-2 flex gap-2">
                <div className="relative flex-1">
                  <Mail className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@store.com"
                    className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400"
                  />
                </div>
                <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium shadow-md shadow-emerald-600/30 hover:bg-emerald-700">
                  Notify me <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500">No spam. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
