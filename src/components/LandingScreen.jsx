import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  Users,
  Twitter,
  Github,
  Linkedin,
  Facebook,
  Heart,
  Share2,
  MessageSquare,
  Award,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Features from "./Features";

const userImage = [
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413b4972c2e56c78ea71_Group%20243-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413d6522b3d2498c1dd1_Group%20248.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413c0d764027125a80dd_Group%20249-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/672d52834be46579ee98899a_NewAvatarRed.png",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413d0cc978005c5a5e14_Group%20245-p-500.avif",
  "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db413b13a1439543c3f9f2_Group%20247-p-500.avif",
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [statCount, setStatCount] = useState({
    users: 0,
    posts: 0,
    communities: 0,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Animate stats
    const interval = setInterval(() => {
      setStatCount((prev) => ({
        users: Math.min(prev.users + 50000, 1000000),
        posts: Math.min(prev.posts + 100000, 5000000),
        communities: Math.min(prev.communities + 1000, 50000),
      }));
    }, 50);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white  w-full">
      {/* Header */}
      <header
        className={`fixed z-50 transition-all duration-300  w-full ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                SocialHub
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-500 transition-all hover:scale-105"
              >
                Home
              </a>
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-500 transition-all hover:scale-105"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-500 transition-all hover:scale-105"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-500 transition-all hover:scale-105"
              >
                Contact
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                to="signin"
                className="px-4 py-2 text-blue-500 hover:text-blue-600 transition-all hover:scale-105"
              >
                Log In
              </Link>
              <Link
                to="signup"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 animate-gradient"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-semibold mb-6 animate-bounce">
                🚀 Join over 20+ active users
              </div>
              <h1 className="text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Where Conversations Come Alive
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the next evolution of social networking. Connect,
                share, and grow with a community that celebrates authentic
                conversations and meaningful relationships.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="signin"
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Started - It's Free
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-4">
                  {userImage.map((image, index) => (
                    <img
                      key={image}
                      alt={`userImage${index}`}
                      src={image}
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <p className="text-gray-600">
                  Joined by{" "}
                  <span className="font-semibold text-blue-600">20+</span>{" "}
                  people
                </p>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <img
                src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?auto=format&fit=crop&w=800&q=80"
                alt="Social Connections"
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-semibold">
                    {statCount.posts.toLocaleString()} Posts
                  </span>
                </div>
              </div>
              <div className="absolute -left-8 bottom-1/4 bg-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-semibold">
                    {statCount.communities.toLocaleString()} Communities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-blue-100">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">300+</div>
              <p className="text-blue-100">Posts Shared</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Communities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <p className="text-blue-100">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="pt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Why Choose SocialHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience a social platform that puts you first. Connect, share,
              and grow with features designed for modern social networking.
            </p>
          </div>
        </div>
      </section>

      <Features />

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Join Our Thriving Community
            </h2>
            <p className="text-xl text-gray-600">
              Over 1M+ users worldwide trust SocialHub
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start mb-6">
                  <img
                    src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=100&h=100&q=80`}
                    alt="User"
                    className="w-14 h-14 rounded-full mr-4 border-4 border-blue-100"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">Sarah Johnson</h4>
                    <p className="text-gray-500">@sarahj</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-500">
                        Top Contributor
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "SocialHub has transformed how I connect with others. The
                  community here is incredibly supportive and engaging!"
                </p>
                <div className="flex items-center justify-between text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5" />
                    <span>2.4k</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>148</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Share2 className="w-5 h-5" />
                    <span>286</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Join Our Community
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join millions of people who are already connecting, sharing, and
              growing together on SocialHub.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link to="signup">Create Your Account</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <MessageCircle className="w-8 h-8 text-blue-400" />
                  <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  SocialHub
                </span>
              </div>
              <p className="text-gray-400 mb-6">Connect, Share, Grow</p>
              <div className="flex space-x-4">
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    API Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} SocialHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
