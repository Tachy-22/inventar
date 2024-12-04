import Link from "next/link";

export default function page() {
  //pro
  return (
    <main className="w-full mx-auto">
      <section className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-4">
        <h1 className="text-6xl font-bold mb-6">
          inven<span className="text-gray-600">Tar</span>
        </h1>
        <p className="text-xl mb-4 text-gray-600 max-w-2xl text-center">
          Transform Your Inventory Into a Profit-Driving Machine
        </p>
        <p className="text-lg mb-8 text-gray-500 max-w-xl text-center">
          Join 10,000+ businesses that have eliminated stockouts, reduced waste,
          and boosted profits by up to 30% with our AI-powered inventory
          solution
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
          Start Your Free Trial
        </button>
        <p className="mt-4 text-sm text-gray-500">
          No credit card required • 14-day free trial
        </p>
      </section>

      <section className="py-24 bg-gray-50 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Your Complete Inventory Command Center
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center p-8 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition-all  bg-white">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Track</h3>
            <p className="text-gray-600">
              Never miss a stock movement with real-time tracking and smart
              alerts. Prevent stockouts before they happen.
            </p>
          </div>
          <div className="text-center p-8 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition-all  bg-white">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Analyze</h3>
            <p className="text-gray-600">
              Turn data into decisions with powerful analytics. Spot trends,
              optimize stock levels, and maximize profitability.
            </p>
          </div>
          <div className="text-center p-8 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition-all  bg-white">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Optimize</h3>
            <p className="text-gray-600">
              Let AI do the heavy lifting. Get smart restocking suggestions and
              demand forecasts that actually work.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Trusted by Industry Leaders
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-4xl font-bold mb-2">99%</h4>
            <p className="text-gray-600">Accuracy Rate</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold mb-2">50k+</h4>
            <p className="text-gray-600">Items Tracked</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold mb-2">30%</h4>
            <p className="text-gray-600">Cost Reduction</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold mb-2">24/7</h4>
            <p className="text-gray-600">Support</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Simple, Transparent Pricing
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Basic Plan */}
          <div className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-all self-start">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <p className="text-gray-600 mb-6">Perfect for small businesses</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Up to 1,000 items
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Basic analytics
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Email support
              </li>
            </ul>
            <button className="w-full py-2 border border-black text-black hover:bg-black hover:text-white transition-colors rounded">
              Start Free Trial
            </button>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-black rounded-lg p-10 relative z-10 bg-white transform lg:scale-110 shadow-xl">
            <div className="absolute top-0 right-0 bg-black text-white text-sm py-1 px-3 rounded-bl-lg rounded-tr-lg">
              Popular
            </div>
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <p className="text-gray-600 mb-6">For growing companies</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$79</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Up to 10,000 items
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Advanced analytics
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Priority support
              </li>
            </ul>
            <button className="w-full py-2 bg-black text-white hover:bg-gray-800 transition-colors rounded">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-all self-start">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <p className="text-gray-600 mb-6">For large organizations</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Unlimited items
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Custom analytics
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                24/7 dedicated support
              </li>
            </ul>
            <button className="w-full py-2 border border-black text-black hover:bg-black hover:text-white transition-colors rounded">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-white px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <span className="bg-white text-black text-sm font-semibold px-4 py-1 rounded-full">
            Limited Time Offer
          </span>

          <h2 className="text-4xl font-bold leading-tight">
            Is Your Inventory Silently Killing Your Profits?
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            93% of businesses discover they&apos;re losing at least $10,000
            annually due to poor inventory practices. Take our 2-minute
            assessment to uncover your hidden losses.
          </p>

          <div className="bg-white/10 border border-white/20 rounded-lg p-6 max-w-xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              🎯 Free Inventory Efficiency Score Card Includes:
            </h3>
            <ul className="text-left space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Personalized cost-leakage analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Benchmark comparison with industry leaders</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Actionable optimization roadmap</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-500/10 text-yellow-300 p-4 rounded-lg inline-block">
            <p className="font-semibold">
              🔥 Only 3 consultation spots remaining this week!
            </p>
          </div>

          <div className=" space-y-12">
            <Link
              href="/scorecard"
              className="bg-white hover:bg-white/89 text-black border-blue-500 border px-8 py-4 rounded-lg text-lg font-semibold transition-colors w-auto"
            >
              Get Your Free Score Card
            </Link>
            <p className="text-sm text-gray-400">
              Takes only 2 minutes • Includes free expert consultation call
            </p>
          </div>

          <div className="flex items-center justify-center space-x-8 pt-8">
            <div className="flex -space-x-4">
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://i.pravatar.cc/100?img=1"
                alt="User"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://i.pravatar.cc/100?img=2"
                alt="User"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="https://i.pravatar.cc/100?img=3"
                alt="User"
              />
            </div>
            <p className="text-sm text-gray-400">
              Joined by 43 business owners this week
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-white text-gray-900 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-black">invenTar</h2>
            <p className="text-sm">
              Making inventory management smarter for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-black">
                Twitter
              </a>
              <a href="#" className="hover:text-black">
                LinkedIn
              </a>
              <a href="#" className="hover:text-black">
                Facebook
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
          <p>© 2024 invenTar. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
