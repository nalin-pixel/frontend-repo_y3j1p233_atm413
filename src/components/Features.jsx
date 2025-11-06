import { Globe, FileText, Send, Store, CheckCircle2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Store className="h-5 w-5 text-emerald-600" />,
      title: "WordPress Integration",
      desc: "Securely connects to your store and fetches your entire product catalog automatically.",
    },
    {
      icon: <FileText className="h-5 w-5 text-emerald-600" />,
      title: "AI Article Generation",
      desc: "Creates SEO-optimized, product-related articles that drive organic discovery.",
    },
    {
      icon: <Send className="h-5 w-5 text-emerald-600" />,
      title: "Automated Publishing",
      desc: "Schedule or auto-publish new posts directly to your WordPress blog.",
    },
    {
      icon: <Globe className="h-5 w-5 text-emerald-600" />,
      title: "Shopify Coming Soon",
      desc: "Stay tuned—connect your Shopify store next and supercharge blog content.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Powerful features to boost SEO</h2>
          <p className="mt-3 text-gray-600">From instant integration to hands-off publishing, everything is designed to grow organic traffic without adding workload.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-emerald-700">
                <CheckCircle2 className="h-4 w-4" /> Included in all plans
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
