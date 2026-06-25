import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-orange-500" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function FormField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-[#131921]">{label}</label>
      <input
        type={type}
        placeholder={placeholder || label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="h-[52px] w-full rounded-sm border border-gray-200 bg-white px-4 text-sm font-light text-[#131921] placeholder-gray-400 outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
      />
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-bold tracking-tight text-[#131921] border-b border-gray-100 pb-2 mb-4">
      {children}
    </h3>
  );
}

const offerItems = [
  "AI-powered solar optimization dashboard",
  "Real-time energy analytics & reporting",
  "Dedicated onboarding specialist (30 days)",
  "Compatibility check & system integration",
  "Lifetime access to software updates",
];

export default function Order() {
  const [, navigate] = useLocation();
  const { toast } = useToast();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    cardNumber: "",
    cvc: "",
    month: "",
    year: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const set = (field: keyof typeof form) => (val: string) =>
    setForm((f) => ({ ...f, [field]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    toast({
      title: "Order submitted!",
      description: "Welcome to Renex. Check your email for next steps.",
    });
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <main className="min-h-screen w-full bg-[#f8f9fa] font-['Manrope',Helvetica]">
      {/* TOP BAR */}
      <div className="w-full bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)] py-2 text-center">
        <p className="text-xs font-semibold text-white">
          ⚡ Limited time offer. Prices increasing soon. Secure your spot now!
        </p>
      </div>

      {/* HEADER */}
      <div className="bg-white border-b border-gray-100 px-6 py-5 text-center">
        <div
          className="flex items-center justify-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="h-7 w-7 rounded-full bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)]" />
          <span className="text-xl font-bold tracking-tight text-[#131921]">
            Solair <span className="text-orange-500">Renex</span>
          </span>
        </div>
        <h1 className="mt-3 text-2xl font-bold tracking-tight text-[#131921] sm:text-3xl">
          Get Instant Access to Renex
        </h1>
        <div className="mt-2 flex items-center justify-center gap-2">
          <StarRating count={5} />
          <span className="text-sm font-semibold text-[#131921]">4.9 / 5</span>
          <span className="text-sm text-gray-400">from 2,400+ customers</span>
        </div>
      </div>

      {/* BODY */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <form
          onSubmit={handleSubmit}
          className="grid gap-8 lg:grid-cols-[1fr_400px]"
        >
          {/* LEFT: FORM */}
          <div className="flex flex-col gap-6">
            {/* Contact */}
            <div className="rounded-sm bg-white p-6 shadow-[0px_4px_24px_#0000000a]">
              <SectionTitle>Contact Information</SectionTitle>
              <div className="grid gap-4">
                <FormField label="Full Name" value={form.fullName} onChange={set("fullName")} required />
                <FormField label="Email Address" type="email" value={form.email} onChange={set("email")} required />
                <FormField label="Phone Number" type="tel" value={form.phone} onChange={set("phone")} required />
              </div>
            </div>

            {/* Billing */}
            <div className="rounded-sm bg-white p-6 shadow-[0px_4px_24px_#0000000a]">
              <SectionTitle>Billing Information</SectionTitle>
              <div className="grid gap-4">
                <FormField label="Address" value={form.address} onChange={set("address")} required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField label="City" value={form.city} onChange={set("city")} required />
                  <FormField label="State / Province" value={form.state} onChange={set("state")} required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField label="Country" value={form.country} onChange={set("country")} required />
                  <FormField label="ZIP Code" value={form.zip} onChange={set("zip")} required />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="rounded-sm bg-white p-6 shadow-[0px_4px_24px_#0000000a]">
              <SectionTitle>Payment Information</SectionTitle>
              <div className="grid gap-4">
                <div className="grid grid-cols-[1fr_120px] gap-4">
                  <FormField label="Credit Card Number" placeholder="1234 5678 9012 3456" value={form.cardNumber} onChange={set("cardNumber")} required />
                  <FormField label="CVC" placeholder="123" value={form.cvc} onChange={set("cvc")} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormField label="Expiry Month" placeholder="MM" value={form.month} onChange={set("month")} required />
                  <FormField label="Expiry Year" placeholder="YYYY" value={form.year} onChange={set("year")} required />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-sm border border-gray-100 bg-gray-50 px-3 py-2">
                <svg className="h-4 w-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs text-gray-500">256-bit SSL encrypted. Your data is 100% secure</span>
              </div>
            </div>

            {/* Order summary row */}
            <div className="rounded-sm bg-white p-6 shadow-[0px_4px_24px_#0000000a]">
              <SectionTitle>Order Summary</SectionTitle>
              <div className="flex items-center justify-between rounded-sm border border-gray-100 bg-gray-50 px-4 py-3">
                <span className="text-sm font-medium text-[#131921]">Solair Renex : Full Access</span>
                <span className="text-sm font-bold text-orange-500">$47.00</span>
              </div>
              <div className="mt-6">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-none bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)] py-4 text-base font-bold text-white shadow-none hover:opacity-90 transition-opacity disabled:opacity-70"
                >
                  {submitting ? "Processing..." : "Submit Order $47"}
                </Button>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <svg className="h-4 w-4 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Secure checkout
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <svg className="h-4 w-4 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    100% money-back guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: OFFER SUMMARY */}
          <div className="flex flex-col gap-6">
            <div className="rounded-sm bg-[#0c0f14] p-6 shadow-[0px_4px_24px_#0000000a] text-white sticky top-6">
              <div className="mb-4 flex items-center gap-2">
                <StarRating count={5} />
                <span className="text-xs font-semibold text-gray-300">4.9 / 5 Stars</span>
              </div>

              <h3 className="text-lg font-bold tracking-tight">Here's What You Get</h3>
              <div className="mt-4 flex flex-col gap-3">
                {offerItems.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)]">
                      <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-light text-gray-300 leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-xs font-light text-gray-400">Total value: <span className="font-semibold text-gray-300 line-through">$199</span></p>
                <p className="text-2xl font-bold text-white">
                  Today just{" "}
                  <span className="bg-[linear-gradient(131deg,rgba(255,122,0,1)_0%,rgba(255,0,0,1)_100%)] bg-clip-text text-transparent">
                    $47
                  </span>
                </p>
                <p className="mt-1 text-xs font-semibold text-red-400">⚡ Prices increasing soon, act now!</p>
              </div>

              {/* Testimonial */}
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">"Amazing experience"</p>
                <p className="mt-1 text-xs font-light leading-relaxed text-gray-400">
                  My energy bill dropped by 38% in the first month. Renex paid for itself faster than I ever expected.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-xs">
                    M
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Marcus T.</p>
                    <p className="text-xs font-light text-gray-500">Homeowner, Texas</p>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-6 border-t border-white/10 pt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-xs text-gray-400">Secure checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span className="text-xs text-gray-400">100% money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
