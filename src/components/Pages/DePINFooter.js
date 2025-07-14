import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Twitter,
  Github,
  Linkedin,
  Mail,
  Globe,
  Shield,
  FileText,
  ExternalLink,
  ChevronUp,
  Zap,
  Network,
  Users,
} from "lucide-react";

const DePINFooter = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const socialLinks = [
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-300" },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    { icon: Mail, href: "#", label: "Email", color: "hover:text-green-400" },
    {
      icon: Globe,
      href: "#",
      label: "Website",
      color: "hover:text-purple-400",
    },
  ];

  const footerLinks = {
    Platform: [
      { name: "Dashboard", href: "#" },
      { name: "Node Management", href: "#" },
      { name: "Network Stats", href: "#" },
      { name: "Rewards", href: "#" },
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Community", href: "#" },
    ],
    Support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Bug Reports", href: "#" },
      { name: "Feature Requests", href: "#" },
    ],
  };

  const TermsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <FileText className="h-6 w-6" />
            Terms & Conditions
          </h2>
          <button
            onClick={() => setShowTerms(false)}
            className="text-gray-400 hover:text-white"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6 text-gray-300 space-y-6">
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">
              1. Acceptance of Terms
            </h3>
            <p>
              By accessing and using the DePIN Control Center platform, you
              agree to be bound by these Terms and Conditions and all applicable
              laws and regulations.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">
              2. Platform Description
            </h3>
            <p>
              DePIN Control Center is a decentralized physical infrastructure
              network management platform that enables users to:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Deploy and manage network nodes</li>
              <li>Monitor network performance and rewards</li>
              <li>Participate in decentralized governance</li>
              <li>Access real-time analytics and reporting</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">
              3. User Responsibilities
            </h3>
            <p>Users are responsible for:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Maintaining the security of their account credentials</li>
              <li>Ensuring compliance with local regulations</li>
              <li>
                Proper operation and maintenance of physical infrastructure
              </li>
              <li>Accurate reporting of network activities</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">
              4. Node Operation
            </h3>
            <p>
              Node operators must adhere to network protocols and maintain
              minimum uptime requirements. Failure to comply may result in
              reduced rewards or network removal.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">
              5. Rewards and Payments
            </h3>
            <p>
              Rewards are distributed based on network contribution and
              performance metrics. Payment processing may take up to 7 business
              days.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">
              6. Privacy and Data
            </h3>
            <p>
              We collect and process data in accordance with our Privacy Policy.
              Network performance data may be shared anonymously for research
              purposes.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">
              7. Limitation of Liability
            </h3>
            <p>
              DePIN Control Center is provided "as is" without warranties. We
              are not liable for network downtime, hardware failures, or
              financial losses.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">
              8. Termination
            </h3>
            <p>
              We reserve the right to terminate accounts for violations of these
              terms or suspicious activities.
            </p>
          </section>

          <div className="text-sm text-gray-400 mt-8">
            Last updated: July 2, 2025
          </div>
        </div>
      </div>
    </div>
  );

  // Privacy Modal Component
  const PrivacyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Shield className="h-6 w-6" />
            Privacy Policy
          </h2>
          <button
            onClick={() => setShowPrivacy(false)}
            className="text-gray-400 hover:text-white"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6 text-gray-300 space-y-6">
          <section>
            <h3 className="text-xl font-semibold text-white mb-3">
              Information We Collect
            </h3>
            <p>We collect the following types of information:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>
                <strong>Account Information:</strong> Email, username, wallet
                addresses
              </li>
              <li>
                <strong>Node Data:</strong> Performance metrics, uptime,
                location data
              </li>
              <li>
                <strong>Usage Analytics:</strong> Platform interactions, feature
                usage
              </li>
              <li>
                <strong>Network Data:</strong> Transaction history, reward
                distributions
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">
              How We Use Your Information
            </h3>
            <p>Your information is used to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Provide and maintain platform services</li>
              <li>Calculate and distribute network rewards</li>
              <li>Monitor network health and performance</li>
              <li>Communicate important updates and notifications</li>
              <li>Improve platform functionality and user experience</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">
              Data Sharing
            </h3>
            <p>We may share anonymized, aggregated data with:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Research institutions for network analysis</li>
              <li>Third-party analytics providers</li>
              <li>Regulatory bodies when required by law</li>
            </ul>
            <p className="mt-2">
              We never sell personal data to third parties.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">
              Data Security
            </h3>
            <p>We implement industry-standard security measures including:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>End-to-end encryption for sensitive data</li>
              <li>Regular security audits and penetration testing</li>
              <li>Multi-factor authentication options</li>
              <li>Secure data centers with 24/7 monitoring</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">
              Your Rights
            </h3>
            <p>You have the right to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Access your personal data</li>
              <li>Request data correction or deletion</li>
              <li>Opt-out of non-essential communications</li>
              <li>Export your data in portable formats</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">
              Cookies and Tracking
            </h3>
            <p>
              We use cookies for essential platform functionality and analytics.
              You can manage cookie preferences in your browser settings.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">
              Contact Us
            </h3>
            <p>
              For privacy-related questions, contact us at:
              privacy@depincontrol.com
            </p>
          </section>

          <div className="text-sm text-gray-400 mt-8">
            Last updated: July 2, 2025
          </div>
        </div>
      </div>
    </div>
  );

  // Render the footer component
  // This component includes the main footer content, links, social media icons, and modals

  return (
    <>
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <Network className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">DePIN Control</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering decentralized physical infrastructure networks with
                advanced monitoring, management, and reward distribution
                systems.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-2 bg-gray-800 rounded-lg transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold mb-4 text-white">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                      >
                        {link.name}
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Zap className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">10,000+</div>
                  <div className="text-sm text-gray-400">Active Nodes</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Network className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-gray-400">Network Uptime</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Users className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">50,000+</div>
                  <div className="text-sm text-gray-400">Community Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 DePIN Control Center. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <button
                  onClick={() => setShowTerms(true)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1"
                >
                  <FileText className="h-4 w-4" />
                  Terms & Conditions
                </button>
                <button
                  onClick={() => setShowPrivacy(true)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1"
                >
                  <Shield className="h-4 w-4" />
                  Privacy Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showTerms && <TermsModal />}
      {showPrivacy && <PrivacyModal />}
    </>
  );
};

export default DePINFooter;
