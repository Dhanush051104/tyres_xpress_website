'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_INFO, SHOWROOMS } from '@/data/business';
import { supabase } from '@/lib/supabase/client';
import { trackGenerateLead, trackPhoneClick, trackGetDirections } from '@/lib/analytics';
import {
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
  HelpCircle,
  ChevronDown,
  Loader2,
  AlertCircle,
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

function isHoverPointerDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

function FaqCard({
  faq,
  isOpen,
  onHoverEnter,
  onHoverLeave,
  onToggleTouchOrKey,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onHoverEnter: () => void;
  onHoverLeave: () => void;
  onToggleTouchOrKey: () => void;
}) {
  const handleMouseEnter = () => {
    if (isHoverPointerDevice()) {
      onHoverEnter();
    }
  };

  const handleMouseLeave = () => {
    if (isHoverPointerDevice()) {
      onHoverLeave();
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHoverPointerDevice() || e.detail === 0) {
      onToggleTouchOrKey();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggleTouchOrKey();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isOpen}
      className={`group relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-[var(--tx-card)] border transition-[border-color,box-shadow] duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] tx-card ${
        isOpen
          ? 'border-[#FF6B00]/60 shadow-[0_10px_26px_-6px_rgba(255,107,0,0.16)] dark:shadow-[0_10px_30px_-6px_rgba(255,107,0,0.22)]'
          : 'border-[var(--tx-border)] hover:border-[#FF6B00]/50 shadow-xs'
      }`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-red-600 to-[#FF6B00] origin-top transition-transform duration-200 ease-out ${
          isOpen ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
        }`}
      />

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <HelpCircle
            className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-150 ${
              isOpen ? 'text-[#FF6B00]' : 'text-red-600 group-hover:text-[#FF6B00]'
            }`}
          />
          <h3
            className={`text-sm sm:text-base font-bold transition-colors duration-150 ${
              isOpen
                ? 'text-red-600 dark:text-[#FF6B00]'
                : 'text-[var(--tx-text-primary)] group-hover:text-red-600'
            }`}
          >
            {faq.question}
          </h3>
        </div>
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 mt-1 transition-transform duration-200 ease-out ${
            isOpen ? 'rotate-180 text-[#FF6B00]' : 'text-[var(--tx-text-muted)]'
          }`}
        />
      </div>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pt-2.5 text-xs sm:text-sm text-[var(--tx-text-secondary)] pl-8 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const cardHover = shouldReduceMotion
    ? undefined
    : { y: -3, transition: { type: 'spring' as const, stiffness: 360, damping: 26 } };

  const innerHover = shouldReduceMotion
    ? undefined
    : { y: -2.5, transition: { type: 'spring' as const, stiffness: 420, damping: 28 } };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();

    if (!trimmedName || !trimmedPhone) {
      setSubmitError('Please provide both your full name and mobile phone number.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const vehicleText = formData.vehicle.trim();
      const customerMessageText = formData.message.trim();

      const messageParts: string[] = [];
      if (vehicleText) {
        messageParts.push(`Vehicle: ${vehicleText}`);
      }
      if (customerMessageText) {
        messageParts.push(`Customer message: ${customerMessageText}`);
      }
      const combinedMessage = messageParts.length > 0 ? messageParts.join('\n\n') : null;

      const { error } = await supabase.from('enquiries').insert([
        {
          customer_name: trimmedName,
          phone: trimmedPhone,
          email: null,
          showroom: formData.showroom,
          service: formData.service,
          message: combinedMessage,
        },
      ]);

      if (error) {
        throw error;
      }

      // Track lead only upon confirmed Supabase success (non-PII parameters only)
      trackGenerateLead({
        service: formData.service,
        showroom: formData.showroom,
      });

      setSubmitted(true);
    } catch (err: unknown) {
      const pgErr = err as {
        message?: string;
        code?: string;
        details?: string;
        hint?: string;
        status?: number;
      };
      console.error('[TyresXpress Supabase] Enquiry submission error diagnostics:', {
        message: pgErr?.message || (err instanceof Error ? err.message : String(err)),
        code: pgErr?.code ?? 'UNKNOWN',
        details: pgErr?.details ?? null,
        hint: pgErr?.hint ?? null,
        status: pgErr?.status ?? null,
      });
      setSubmitError(
        'We were unable to submit your enquiry due to a network connection issue. Please check your connection and try again, or call our showroom directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Contact Banner */}
      <section className="py-14 sm:py-18 bg-[#111111] text-white relative overflow-hidden border-b border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              whileHover={innerHover}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/20 text-red-400 border border-red-500/30 hover:border-[#FF6B00]/60 hover:text-[#FF6B00] transition-colors cursor-default"
            >
              Get In Touch • All 7 Days Open
            </motion.span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-4">
              We&apos;re Here to Keep You Moving.
            </h1>
            <p className="text-sm sm:text-base text-[var(--platinum-2)] mt-4 leading-relaxed">
              Reach our Bengaluru showrooms directly via telephone, email our central support desk, or request a callback through our quick enquiry form.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-16 sm:py-20 bg-[var(--tx-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Direct Showrooms & Helpdesk Directory */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Direct Directory
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--tx-text-primary)] mt-1">
                  Connect With a Showroom
                </h2>
                <p className="text-xs sm:text-sm text-[var(--tx-text-secondary)] mt-2">
                  Call the showroom nearest to your location for direct stock checks and immediate service bay availability:
                </p>
              </div>

              {/* Showrooms Direct Cards */}
              <div className="space-y-4">
                {SHOWROOMS.map((s, idx) => (
                  <motion.div
                    key={s.id}
                    whileHover={cardHover}
                    className="group relative overflow-hidden p-5 rounded-2xl border border-[var(--tx-border)] hover:border-[#FF6B00]/60 bg-[var(--tx-card)] space-y-3 shadow-sm hover:shadow-[0_12px_28px_-6px_rgba(255,107,0,0.18)] transition-[border-color,box-shadow] duration-300 tx-card"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#FF6B00]/[0.05] via-transparent to-transparent dark:from-[#FF6B00]/[0.09] dark:via-transparent dark:to-transparent"
                    />

                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--tx-text-muted)] group-hover:text-red-600 transition-colors">
                        Showroom #{idx + 1}
                      </span>
                      <span className="text-[11px] font-semibold text-[#FF6B00]">
                        {s.openDays}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-base font-bold text-[var(--tx-text-primary)]">
                        {s.name}
                      </h3>
                      <p className="text-xs text-[var(--tx-text-secondary)] mt-1 leading-relaxed">
                        {s.address}
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center gap-2 pt-2 border-t border-[var(--tx-border)]">
                      <motion.a
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        href={`tel:${s.phone}`}
                        onClick={() => trackPhoneClick({ showroom: s.id, location: 'contact_page_showroom' })}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold bg-red-600 hover:bg-red-700 text-white transition-colors shadow-xs"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call: {s.phone}</span>
                      </motion.a>

                      <motion.a
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                        href={s.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackGetDirections({ showroom: s.id, location: 'contact_page_showroom' })}
                        className="inline-flex items-center justify-center gap-1 py-2 px-3 rounded-lg text-xs font-semibold border border-[var(--tx-border)] hover:border-[#FF6B00]/60 text-[var(--tx-text-primary)] bg-[var(--tx-surface-secondary)] hover:bg-[var(--tx-surface)] transition-colors tx-surface-secondary"
                      >
                        <Navigation className="w-3.5 h-3.5 text-red-600" />
                        <span>Maps</span>
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Central Email & Operating Hours */}
              <motion.div
                whileHover={innerHover}
                className="group relative overflow-hidden p-5 rounded-2xl border border-[rgba(255,255,255,0.1)] hover:border-[#FF6B00]/60 bg-[#111111] text-white space-y-3 shadow-sm hover:shadow-[0_12px_28px_-6px_rgba(255,107,0,0.22)] transition-[border-color,box-shadow] duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 group-hover:bg-[#FF6B00]/25 text-red-400 group-hover:text-[#FF6B00] transition-colors flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--platinum-2)] font-semibold uppercase tracking-wider">
                      Official Business Email
                    </p>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm font-bold text-white hover:text-[#FF6B00] transition-colors hover:underline"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-[rgba(255,255,255,0.08)] text-xs text-[var(--platinum-2)] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                  <span>{BUSINESS_INFO.hoursCommon}</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Interactive Enquiry / Booking Form */}
            <div className="lg:col-span-7">
              <div className="group/form relative overflow-hidden p-6 sm:p-10 rounded-3xl border border-[var(--tx-border)] hover:border-[#FF6B00]/45 focus-within:border-[#FF6B00]/60 bg-[var(--tx-card)] shadow-sm transition-colors duration-300 tx-card">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-[#FF6B00] to-red-600"
                />

                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    Online Service Request
                  </span>
                  <h2 className="text-2xl font-extrabold text-[var(--tx-text-primary)] mt-1">
                    Book an Inspection or Request a Quote
                  </h2>
                  <p className="text-xs sm:text-sm text-[var(--tx-text-secondary)] mt-1">
                    Fill out this form and our showroom service manager will contact you within 30 minutes during business hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-[#FF6B00]/[0.07] dark:bg-[#FF6B00]/[0.12] border border-[#FF6B00]/30 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#FF6B00]/15 text-[#FF6B00] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--tx-text-primary)]">
                      Enquiry Received Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--tx-text-secondary)] max-w-md mx-auto">
                      Thank you, <strong className="font-semibold text-[var(--tx-text-primary)]">{formData.name}</strong>. Our service manager for the selected showroom will call you shortly at <strong className="font-semibold text-[var(--tx-text-primary)]">{formData.phone}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setSubmitError(null);
                        setFormData({
                          name: '',
                          phone: '',
                          vehicle: '',
                          showroom: 'siddapura',
                          service: 'tyres',
                          message: '',
                        });
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-700 text-white transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[var(--tx-text-secondary)] mb-1.5">
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
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--tx-border)] hover:border-[#FF6B00]/50 bg-[var(--tx-surface-secondary)] text-[var(--tx-text-primary)] placeholder:text-[var(--tx-text-muted)] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-colors tx-surface-secondary"
                        />
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[var(--tx-text-secondary)] mb-1.5">
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
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--tx-border)] hover:border-[#FF6B00]/50 bg-[var(--tx-surface-secondary)] text-[var(--tx-text-primary)] placeholder:text-[var(--tx-text-muted)] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-colors tx-surface-secondary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Vehicle Model */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[var(--tx-text-secondary)] mb-1.5">
                          Vehicle Make &amp; Model
                        </label>
                        <input
                          type="text"
                          value={formData.vehicle}
                          onChange={(e) =>
                            setFormData({ ...formData, vehicle: e.target.value })
                          }
                          placeholder="e.g. Hyundai Creta / RE Hunter"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--tx-border)] hover:border-[#FF6B00]/50 bg-[var(--tx-surface-secondary)] text-[var(--tx-text-primary)] placeholder:text-[var(--tx-text-muted)] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-colors tx-surface-secondary"
                        />
                      </div>

                      {/* Preferred Showroom */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[var(--tx-text-secondary)] mb-1.5">
                          Preferred Showroom
                        </label>
                        <select
                          value={formData.showroom}
                          onChange={(e) =>
                            setFormData({ ...formData, showroom: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--tx-border)] hover:border-[#FF6B00]/50 bg-[var(--tx-surface-secondary)] text-[var(--tx-text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-colors tx-surface-secondary"
                        >
                          {SHOWROOMS.map((s) => (
                            <option key={s.id} value={s.id} className="bg-[var(--tx-card)] text-[var(--tx-text-primary)]">
                              {s.name} ({s.locality})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Service Needed */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--tx-text-secondary)] mb-1.5">
                        Required Automotive Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--tx-border)] hover:border-[#FF6B00]/50 bg-[var(--tx-surface-secondary)] text-[var(--tx-text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-colors tx-surface-secondary"
                      >
                        <option value="tyres" className="bg-[var(--tx-card)] text-[var(--tx-text-primary)]">New Car / Bike Tyres (Purchase &amp; Fitment)</option>
                        <option value="alignment-balancing" className="bg-[var(--tx-card)] text-[var(--tx-text-primary)]">3D Wheel Alignment &amp; Balancing</option>
                        <option value="alloy-wheels" className="bg-[var(--tx-card)] text-[var(--tx-text-primary)]">Alloy Wheels Upgrade</option>
                        <option value="nitrogen" className="bg-[var(--tx-card)] text-[var(--tx-text-primary)]">Nitrogen Tyre Inflation</option>
                        <option value="bend-repair" className="bg-[var(--tx-card)] text-[var(--tx-text-primary)]">Alloy Wheel Bend &amp; Rim Straightening</option>
                        <option value="car-wash" className="bg-[var(--tx-card)] text-[var(--tx-text-primary)]">Foam Car Wash &amp; Detailing (Horamavu)</option>
                        <option value="general-inspection" className="bg-[var(--tx-card)] text-[var(--tx-text-primary)]">Free 10-Point Tyre Health Inspection</option>
                      </select>
                    </div>

                    {/* Message / Additional Information */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[var(--tx-text-secondary)] mb-1.5">
                        Specific Questions or Preferred Tyre Brand (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="e.g. Looking for Yokohama Earth-1 in 185/65 R15 or query about alignment charges..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--tx-border)] hover:border-[#FF6B00]/50 bg-[var(--tx-surface-secondary)] text-[var(--tx-text-primary)] placeholder:text-[var(--tx-text-muted)] text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B00] transition-colors tx-surface-secondary"
                      />
                    </div>

                    {submitError && (
                      <div
                        role="alert"
                        className="p-3.5 rounded-xl bg-red-600/10 dark:bg-red-500/15 border border-red-500/30 text-red-600 dark:text-red-400 text-xs flex items-start gap-2.5"
                      >
                        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-600 dark:text-red-400" />
                        <div className="flex-1 leading-relaxed">
                          {submitError}
                        </div>
                      </div>
                    )}

                    <motion.button
                      whileHover={shouldReduceMotion || isSubmitting ? undefined : { scale: 1.01 }}
                      whileTap={shouldReduceMotion || isSubmitting ? undefined : { scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Request &amp; Get Callback</span>
                        </>
                      )}
                    </motion.button>

                    <p className="text-[11px] text-center text-[var(--tx-text-muted)]">
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
      <section className="py-16 sm:py-20 bg-[var(--tx-surface-secondary)] border-t border-[var(--tx-border)] tx-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              Help &amp; Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--tx-text-primary)] mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[var(--tx-text-secondary)] mt-2">
              Common questions answered by our TyresXpress automotive service team.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <FaqCard
                key={i}
                faq={faq}
                isOpen={openFaqIndex === i}
                onHoverEnter={() => setOpenFaqIndex(i)}
                onHoverLeave={() => setOpenFaqIndex((prev) => (prev === i ? null : prev))}
                onToggleTouchOrKey={() => setOpenFaqIndex((prev) => (prev === i ? null : i))}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
