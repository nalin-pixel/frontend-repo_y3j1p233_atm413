import { ArrowRight, Rocket, Plug, ShoppingCart } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-white">
      {/* Top banner for Shopify integration */}
      <div className="w-full bg-emerald-50 text-emerald-800 text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2">
          <ShoppingCart className="h-4 w-4" />
          <span className="font-medium">Shopify Integration Coming Soon</span>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-emerald-600 flex items-center justify-center shadow-md shadow-emerald-600/20">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-gray-900">RankCraft</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900">Features</a>
            <a href="#how" className="text-sm text-gray-600 hover:text-gray-900">How It Works</a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg border border-gray-200 shadow-sm bg-white">
              Login
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white rounded-lg bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/30">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),rgba(255,255,255,0))]" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-emerald-100 shadow-sm">
                <Plug className="h-3.5 w-3.5" /> Connect to WordPress in minutes
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Turn Your Products into SEO-Boosting Blog Posts — Automatically.
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Fetch your catalog from WordPress, generate optimized articles with AI, and publish on autopilot to grow organic traffic.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-medium shadow-lg shadow-emerald-600/30 hover:bg-emerald-700">
                  Connect Your Store
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="px-5 py-3 rounded-xl bg-white text-gray-900 font-medium border border-gray-200 shadow-sm hover:shadow-md">
                  Try It for Free
                </button>
              </div>
              <div className="mt-6 text-sm text-gray-500">
                No coding required • Cancel anytime
              </div>
            </div>
            <div>
              <div className="relative rounded-2xl border border-gray-100 bg-white p-4 shadow-xl shadow-emerald-100/50">
                <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-emerald-100 blur-2xl opacity-60" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-gray-50 p-4">
                    <div className="text-sm font-semibold text-gray-900">WordPress Products</div>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                      <li className="flex items-center justify-between">
                        <span>Eco Bottle</span>
                        <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">synced</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Yoga Mat Pro</span>
                        <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">synced</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Herbal Tea</span>
                        <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">synced</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-xl bg-gray-50 p-4">
                    <div className="text-sm font-semibold text-gray-900">AI Articles</div>
                    <div className="mt-3 space-y-2 text-sm text-gray-600">
                      <div className="p-2 rounded-lg bg-white border border-gray-100 shadow-sm">
                        5 Benefits of Stainless Steel Bottles
                      </div>
                      <div className="p-2 rounded-lg bg-white border border-gray-100 shadow-sm">
                        How to Choose a Supportive Yoga Mat
                      </div>
                      <div className="p-2 rounded-lg bg-white border border-gray-100 shadow-sm">
                        Herbal Tea Rituals for Better Sleep
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-xl bg-emerald-600 text-white p-4 flex items-center justify-between">
                  <div className="text-sm">
                    Auto-publishing enabled — new articles go live weekly
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
