import { Check } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$19/mo",
      desc: "Perfect for small stores getting started with SEO",
      features: [
        "Connect 1 WordPress site",
        "Up to 20 AI articles / month",
        "Auto-publish scheduling",
        "Email support",
      ],
      cta: "Try It for Free",
      highlighted: false,
    },
    {
      name: "Growth",
      price: "$49/mo",
      desc: "For growing brands scaling organic traffic",
      features: [
        "Connect 3 WordPress sites",
        "Up to 100 AI articles / month",
        "Advanced SEO templates",
        "Priority support",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Scale",
      price: "$99/mo",
      desc: "Agencies and high-volume stores",
      features: [
        "Unlimited sites",
        "Unlimited AI articles",
        "Custom workflows",
        "Dedicated success manager",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">Start free, upgrade when you’re ready. Cancel anytime.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.highlighted ? 'border-emerald-200 shadow-xl shadow-emerald-100' : 'border-gray-100 shadow-sm'} bg-white p-6`}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                {t.highlighted && <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">Popular</span>}
              </div>
              <div className="mt-2 text-3xl font-bold text-gray-900">{t.price}</div>
              <p className="mt-1 text-sm text-gray-600">{t.desc}</p>
              <ul className="mt-4 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-emerald-600 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full px-4 py-2.5 rounded-xl font-medium ${t.highlighted ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700' : 'bg-white text-gray-900 border border-gray-200 hover:shadow-md'}`}>{t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
