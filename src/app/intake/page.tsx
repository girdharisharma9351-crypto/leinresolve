"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

const schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  bankName: z.string().min(1, "Please select a bank"),
  state: z.string().min(1, "Please select a state"),
  district: z.string().min(1, "District/City is required"),
  investigatingOfficer: z.string().optional(),
  complaintNumber: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

function IntakeForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const draftType = searchParams.get("draftType") || "Unknown Draft";
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const params = new URLSearchParams({
      draftType,
      name: data.fullName,
      bank: data.bankName,
      state: data.state,
      district: data.district,
    });
    router.push(`/checkout?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center py-12 px-4 md:px-6">
      <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <ShieldCheck className="w-48 h-48 text-emerald-500" />
        </div>

        <div className="relative z-10 mb-8 border-b border-zinc-800 pb-6">
          <h1 className="text-3xl font-extrabold text-white mb-2">Secure Draft Intake</h1>
          <p className="text-zinc-400">Please provide your details so our system can generate your exact legal representation.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-300">Full Name *</label>
            <input
              {...register("fullName")}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-red-500 transition-colors"
              placeholder="e.g. Rahul Sharma"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-300">Email Address *</label>
              <input
                {...register("email")}
                type="email"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                placeholder="rahul@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-300">Phone / WhatsApp *</label>
              <input
                {...register("phone")}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                placeholder="+91 98765 43210"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-300">Bank Name *</label>
              <select
                {...register("bankName")}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none"
              >
                <option value="">Select your bank...</option>
                <option value="HDFC">HDFC Bank</option>
                <option value="ICICI">ICICI Bank</option>
                <option value="SBI">State Bank of India (SBI)</option>
                <option value="Axis">Axis Bank</option>
                <option value="Kotak">Kotak Mahindra Bank</option>
                <option value="Other">Other</option>
              </select>
              {errors.bankName && <p className="text-red-500 text-sm">{errors.bankName.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-300">State *</label>
              <select
                {...register("state")}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none"
              >
                <option value="">Select your state...</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Telangana">Telangana</option>
                <option value="Karnataka">Karnataka</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Other">Other</option>
              </select>
              {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-300">District / City of the Cyber Cell *</label>
                <input
                  {...register("district")}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="e.g., Darjeeling, Navi Mumbai"
                />
                {errors.district && <p className="text-red-500 text-sm">{errors.district.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-300">Specific Investigating Officer (I.O.) Name <span className="text-zinc-500 font-normal">(If known)</span></label>
                <input
                  {...register("investigatingOfficer")}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="e.g. Inspector Rajesh"
                />
              </div>
            </div>
            <p className="text-xs text-zinc-500 italic">This helps us map your draft directly to the correct local authorities for faster resolution.</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-300">Police Complaint/Acknowledgment Number <span className="text-zinc-500 font-normal">(If any)</span></label>
            <input
              {...register("complaintNumber")}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white focus:outline-none focus:border-red-500 transition-colors"
              placeholder="e.g. 204012024123456"
            />
          </div>

          <div className="pt-6">
            <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-lg shadow-emerald-900/20">
              Proceed to Secure Payment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function IntakePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">Loading...</div>}>
      <IntakeForm />
    </Suspense>
  );
}
