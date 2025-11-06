import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import TestimonialsFAQ from "./components/TestimonialsFAQ";
import CTAWaitlist from "./components/CTAWaitlist";

function MiniBlog() {
  const posts = [
    {
      title: "Product-led SEO: Turn Catalogs into Content",
      excerpt:
        "How ecommerce teams can transform product data into scalable blog content.",
    },
    {
      title: "On-Page SEO Checklist for New Posts",
      excerpt: "A concise list to ensure every article is optimized before publishing.",
    },
    {
      title: "Why Consistent Publishing Wins",
      excerpt: "The compounding effect of weekly updates to your WordPress blog.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-gray-900">From the blog</h2>
          <a href="#" className="text-sm text-emerald-700 hover:underline">Visit blog</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-block text-sm font-medium text-emerald-700">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <TestimonialsFAQ />
      <MiniBlog />
      <CTAWaitlist />
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} RankCraft. All rights reserved.</div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
