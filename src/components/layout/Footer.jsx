
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { Send } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "🎉 Thank you for subscribing. Stay updated!",
    });
    setEmail("");
  };

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/features", label: "Features" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h5 className="text-lg font-semibold uppercase">Newsletter</h5>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20"
              />
              <Button type="submit" variant="secondary" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h5 className="text-lg font-semibold uppercase">Quick Links</h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-primary-foreground/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="space-y-4">
            <h5 className="text-lg font-semibold uppercase">Follow Us</h5>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/anzol-neupane-276894250/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; 2025 <span className="font-semibold">Finance Tracker</span>. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Made with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/anzol-neupane-276894250/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground/80 transition-colors"
            >
              Angel Neupane
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;