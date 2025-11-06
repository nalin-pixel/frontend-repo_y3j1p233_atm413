export default function TestimonialsFAQ() {
  const testimonials = [
    {
      quote:
        "Within two weeks our blog traffic doubled and we didn’t write a single post by hand.",
      author: "Ava B.",
      role: "Founder, GreenSip Co.",
    },
    {
      quote:
        "The auto-publish workflow is magic. Our WordPress stays fresh without lifting a finger.",
      author: "Marcus T.",
      role: "Ecommerce Lead, FlowYoga",
    },
  ];

  const faqs = [
    {
      q: "Do I need a plugin to connect WordPress?",
      a: "No plugin required. Authenticate securely via API and connect in minutes.",
    },
    {
      q: "Can I review articles before they go live?",
      a: "Yes. You can approve drafts, set schedules, or enable full autopilot.",
    },
    {
      q: "Is Shopify supported?",
      a: "Shopify integration is in the works and launching soon.",
    },
    {
      q: "What about SEO quality?",
      a: "Articles follow best practices: structure, keywords, internal links, and readability.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Loved by modern commerce teams</h3>
            <div className="mt-6 grid gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="text-gray-800">“{t.quote}”</p>
                  <div className="mt-4 text-sm font-medium text-gray-900">{t.author}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
          <div id="faq">
            <h3 className="text-2xl font-bold text-gray-900">Frequently asked questions</h3>
            <dl className="mt-6 space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <dt className="font-medium text-gray-900">{f.q}</dt>
                  <dd className="mt-2 text-sm text-gray-600">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
