import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-20 bg-brand-light min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Privacy Policy</h1>
            <p className="text-gray-500 font-medium mb-12">Effective Date: August 31, 2026</p>

            <div className="prose prose-lg max-w-none text-gray-600 prose-headings:text-brand-navy prose-a:text-brand-primary">
              <p className="lead text-xl text-gray-700 mb-10">
                At PYNEXA Technologies, we respect your privacy and are committed to protecting the personal information you provide to us. This Privacy Policy explains how we collect, use, and protect information when you visit our website, contact us, submit an enquiry, or use our services.
              </p>

              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center text-sm">1</span>
                    Information We Collect
                  </h2>
                  <p className="mb-4">We may collect information that you voluntarily provide to us, including:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Full Name</li>
                    <li>Phone Number</li>
                    <li>Email Address</li>
                    <li>Business/Company Name</li>
                    <li>Business Details</li>
                    <li>Website or Project Requirements</li>
                    <li>Service Requirements</li>
                    <li>Any other information you provide through our enquiry forms or communication channels</li>
                  </ul>
                  <p>We may also automatically collect limited technical information such as your IP address, browser type, device information, pages visited, and general website usage information.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center text-sm">2</span>
                    How We Use Your Information
                  </h2>
                  <p className="mb-4">We may use the information collected to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Respond to your enquiries and requests</li>
                    <li>Provide information about our services</li>
                    <li>Prepare quotations and proposals</li>
                    <li>Understand your website or business requirements</li>
                    <li>Provide customer support</li>
                    <li>Communicate with you regarding your project</li>
                    <li>Improve our website and services</li>
                    <li>Improve our advertising and marketing activities</li>
                    <li>Maintain website security and prevent fraudulent activity</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center text-sm">3</span>
                    Communication
                  </h2>
                  <p className="mb-4">If you submit your contact information through our website, Facebook, Instagram, WhatsApp, or other platforms, we may contact you regarding your enquiry, services, quotations, or project requirements.</p>
                  <p>You may request us to stop promotional communications at any time.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center text-sm">4</span>
                    Cookies
                  </h2>
                  <p className="mb-4">Our website may use cookies and similar technologies to improve user experience, understand website traffic, analyze performance, and improve our marketing activities.</p>
                  <p>You can manage or disable cookies through your browser settings. Disabling cookies may affect certain website features.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center text-sm">5</span>
                    Third-Party Services
                  </h2>
                  <p className="mb-4">We may use trusted third-party services such as website hosting, analytics, advertising, communication, payment, and technology providers.</p>
                  <p className="mb-4">We may also use platforms such as Facebook, Instagram, WhatsApp, and Meta advertising services for communication and marketing purposes.</p>
                  <p>Third-party services may have their own privacy policies, and we recommend reviewing their policies when using their services.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center text-sm">6</span>
                    Sharing of Information
                  </h2>
                  <p className="mb-4">PYNEXA Technologies does not sell or rent your personal information to third parties.</p>
                  <p>We may share information with trusted service providers when necessary to operate our business, provide requested services, communicate with customers, or comply with legal requirements.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center text-sm">7</span>
                    Data Security
                  </h2>
                  <p className="mb-4">We take reasonable technical and organizational measures to protect your personal information from unauthorized access, misuse, loss, alteration, or disclosure.</p>
                  <p>However, no online transmission or electronic storage method can be guaranteed to be completely secure.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center text-sm">8</span>
                    Data Retention
                  </h2>
                  <p>We retain your information only for as long as reasonably necessary to provide services, respond to enquiries, maintain business records, comply with legal obligations, and protect our legitimate business interests.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center text-sm">9</span>
                    Your Rights
                  </h2>
                  <p className="mb-4">Depending on applicable law, you may request to:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Withdraw consent where applicable</li>
                    <li>Opt out of promotional communications</li>
                  </ul>
                  <p>For any such request, please contact us using the details below.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center text-sm">10</span>
                    Children's Privacy
                  </h2>
                  <p>Our website and services are not specifically directed toward children. We do not knowingly collect personal information from children where such collection is prohibited by applicable law.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center text-sm">11</span>
                    Changes to This Privacy Policy
                  </h2>
                  <p className="mb-4">PYNEXA Technologies may update this Privacy Policy from time to time to reflect changes in our services, technology, business practices, or applicable laws.</p>
                  <p>Any changes will be posted on this page with an updated "Last Updated" date.</p>
                </section>

                <section className="bg-brand-light p-8 rounded-2xl border border-gray-100">
                  <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
                  <p className="mb-6">If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:</p>
                  
                  <div className="space-y-4 font-medium text-brand-navy">
                    <p className="flex items-center gap-3">
                      <span className="text-brand-primary text-xl">📧</span> 
                      Email: pynexatechnologies@gmail.com
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-brand-primary text-xl">🌐</span> 
                      Website: <a href="https://www.pynexa.in" className="hover:text-brand-primary transition-colors">www.pynexa.in</a>
                    </p>
                    <p className="flex items-center gap-3">
                      <span className="text-brand-primary text-xl">📍</span> 
                      Location: Noida, Uttar Pradesh, India
                    </p>
                  </div>
                </section>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
              <p className="text-sm text-gray-500 font-medium">Last Updated: August 31, 2026</p>
              <Link to="/" className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-navy transition-colors">
                Back to Home <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
