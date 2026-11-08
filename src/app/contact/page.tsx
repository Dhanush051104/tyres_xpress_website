'use client';

import React, { useState } from 'react';
import { BUSINESS_INFO, SHOWROOMS } from '@/data/business';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
  MessageSquare,
  HelpCircle,
  Calendar,
} from 'lucide-react';

const FAQS = [
  {
    question: 'Do I need a prior appointment to visit a showroom?',
    answer:
      'Appointments are not strictly required — you are always welcome to drive straight into any of our 3 showrooms in Siddapura, Horamavu, or Balagere between 9:00 AM and 8:00 PM. However, submitting an enquiry or calling ahead helps us pre-allocate an alignment bay for faster turnaround.',
  },
  {
    question: 'How do manufacturer warranties work when purchasing tyres?',
    answer:
      'Every tyre sold at TyresXpress is 100% genuine and sourced directly from official manufacturer distributors. Our technicians provide an authentic GST tax invoice and assist you with instant digital warranty registration on the respective brand app (e.g. Yokohama Care, Bridgestone Guarantee, Michelin One).',
  },
  {
    question: 'How long does a 3D Wheel Alignment and Dynamic Balancing take?',
    answer:
      'A standard 4-wheel computerized dynamic balancing and laser 3D optical alignment service typically takes between 35 to 45 minutes. You can relax in our air-conditioned customer lounges while our technicians service your vehicle.',
  },
  {
    question: 'Can bent or dented alloy wheels be repaired safely?',
    answer:
      'Yes. Our specialized hydraulic rim repair lathe accurately detects radial and lateral runout using calibrated dial gauges, gently heating and pressing the deformed alloy back into true circularity without fracturing the aluminum metal.',
  },
  {
    question: 'Which showroom has the foam car wash service?',
    answer:
      'Our dedicated high-pressure foam wash bay is situated exclusively at Showroom 2 (Horamavu / Kalkere). It offers deep snow foam exterior washing, underbody chassis jet cleaning, and interior vacuum detailing.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    showroom: 'siddapura',
    service: 'tyres',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Contact Banner */}
      <section className="py-14 sm:py-18 bg-neutral-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/20 text-red-400 dark:text-[#F28C28] border border-red-500/30">
              Get In Touch • All 7 Days Open
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-4">
              We&apos;re Here to Keep You Moving.
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed">
              Reach our Bengaluru showrooms directly via telephone, email our central support desk, or request a callback through our quick enquiry form.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Direct Showrooms & Helpdesk Directory */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#F28C28]">
                  Direct Directory
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mt-1">
                  Connect With a Showroom
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                  Call the showroom nearest to your location for direct stock checks and immediate service bay availability:
                </p>
              </div>

              {/* Showrooms Direct Cards */}
              <div className="space-y-4">
                {SHOWROOMS.map((s, idx) => (
                  <div
                    key={s.id}
                    className="p-5 rounded-2xl border border-neutral-200 dark:border-[#303036] bg-neutral-50 dark:bg-[#151519] space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                        Showroom #{idx + 1}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                        {s.openDays}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                        {s.name}
                      </h3>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                        {s.address}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-neutral-200 dark:border-[#202024]">
                      <a
                        href={`tel:${s.phone}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold bg-red-600 hover:bg-red-700 dark:bg-[#F28C28] dark:hover:bg-[#FF9F43] text-white dark:text-neutral-950 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call: {s.phone}</span>
                      </a>

                      <a
                        href={s.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 py-2 px-3 rounded-lg text-xs font-semibold border border-neutral-300 dark:border-[#303036] text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-[#202024] transition-colors"
                      >
                        <Navigation className="w-3.5 h-3.5 text-red-600 dark:text-[#F28C28]" />
                        <span>Maps</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Central Email & Operating Hours */}
              <div className="p-5 rounded-2xl border border-neutral-200 dark:border-[#303036] bg-neutral-900 text-white space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 dark:text-[#F28C28] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                      Official Business Email
                    </p>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm font-bold text-white hover:underline"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-800 text-xs text-neutral-400 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                  <span>{BUSINESS_INFO.hoursCommon}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Enquiry / Booking Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-10 rounded-3xl border border-neutral-200 dark:border-[#303036] bg-neutral-50 dark:bg-[#151519] shadow-sm">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#F28C28]">
                    Online Service Request
                  </span>
                  <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white mt-1">
                    Book an Inspection or Request a Quote
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                    Fill out this form and our showroom service manager will contact you within 30 minutes during business hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
                      Enquiry Received Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
                      Thank you, <strong className="font-semibold">{formData.name}</strong>. Our service manager for the selected showroom will call you shortly at <strong className="font-semibold">{formData.phone}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          vehicle: '',
                          showroom: 'siddapura',
                          service: 'tyres',
                          message: '',
                        });
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-950 hover:opacity-90 transition-opacity"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                          Your Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-[#303036] bg-white dark:bg-[#202024] text-neutral-900 dark:text-white placeholder:text-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-[#F28C28]"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                          Mobile Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="e.g. 98450 12345"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-[#303036] bg-white dark:bg-[#202024] text-neutral-900 dark:text-white placeholder:text-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-[#F28C28]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Vehicle Model */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                          Vehicle Make &amp; Model
                        </label>
                        <input
                          type="text"
                          value={formData.vehicle}
                          onChange={(e) =>
                            setFormData({ ...formData, vehicle: e.target.value })
                          }
                          placeholder="e.g. Hyundai Creta / RE Hunter"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-[#303036] bg-white dark:bg-[#202024] text-neutral-900 dark:text-white placeholder:text-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-[#F28C28]"
                        />
                      </div>

                      {/* Preferred Showroom */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                          Preferred Showroom
                        </label>
                        <select
                          value={formData.showroom}
                          onChange={(e) =>
                            setFormData({ ...formData, showroom: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-[#303036] bg-white dark:bg-[#202024] text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-[#F28C28]"
                        >
                          {SHOWROOMS.map((s) => (
                            <option key={s.id} value={s.id}>
                              {s.name} ({s.locality})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Service Needed */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Required Automotive Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-[#303036] bg-white dark:bg-[#202024] text-neutral-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-[#F28C28]"
                      >
                        <option value="tyres">New Car / Bike Tyres (Purchase &amp; Fitment)</option>
                        <option value="alignment-balancing">3D Wheel Alignment &amp; Balancing</option>
                        <option value="alloy-wheels">Alloy Wheels Upgrade</option>
                        <option value="nitrogen">Nitrogen Tyre Inflation</option>
                        <option value="bend-repair">Alloy Wheel Bend &amp; Rim Straightening</option>
                        <option value="car-wash">Foam Car Wash &amp; Detailing (Horamavu)</option>
                        <option value="general-inspection">Free 10-Point Tyre Health Inspection</option>
                      </select>
                    </div>

                    {/* Message / Additional Information */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Specific Questions or Preferred Tyre Brand (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="e.g. Looking for Yokohama Earth-1 in 185/65 R15 or query about alignment charges..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 dark:border-[#303036] bg-white dark:bg-[#202024] text-neutral-900 dark:text-white placeholder:text-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-[#F28C28]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 dark:bg-[#F28C28] dark:hover:bg-[#FF9F43] dark:text-neutral-950 transition-colors shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Request &amp; Get Callback</span>
                    </button>

                    <p className="text-[11px] text-center text-neutral-500 dark:text-neutral-400">
                      Your contact number will only be used to answer your tyre service query.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-20 bg-neutral-50 dark:bg-[#151519]/50 border-t border-neutral-200 dark:border-[#202024]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-[#F28C28]">
              Help &amp; Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              Common questions answered by our TyresXpress automotive service team.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#202024] border border-neutral-200 dark:border-[#303036] space-y-2"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-red-600 dark:text-[#F28C28] flex-shrink-0 mt-0.5" />
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 pl-8 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
