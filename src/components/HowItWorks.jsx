import { Plug, Database, FileText, Send } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Plug className="h-5 w-5 text-emerald-600" />,
      title: "Connect",
      desc: "Link your WordPress site securely with a click.",
    },
    {
      icon: <Database className="h-5 w-5 text-emerald-600" />,
      title: "Fetch",
      desc: "We automatically import your selected products.",
    },
    {
      icon: <FileText className="h-5 w-5 text-emerald-600" />,
      title: "Generate",
      desc: "AI creates SEO-focused articles tailored to your products.",
    },
    {
      icon: <Send className="h-5 w-5 text-emerald-600" />,
      title: "Publish",
      desc: "Auto-publish on a schedule or with one click.",
    },
  ];

  return (
    <section id="how" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
          <p className="mt-3 text-gray-600">From connection to publication in minutes—no plugins or code required.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <div className="absolute -top-3 -right-3 h-12 w-12 rounded-full bg-emerald-100 blur-2xl opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
