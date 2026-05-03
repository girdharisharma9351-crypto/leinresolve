"use client";

import { QrCode, ShieldCheck } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CheckoutContent() {
  const searchParams = useSearchParams();
  
  const draftType = searchParams.get("draftType") || "Unknown Draft";
  const name = searchParams.get("name") || "[Name]";
  const bank = searchParams.get("bank") || "[Bank]";
  const bankAccount = searchParams.get("bankAccount") || "[Account Number]";
  const state = searchParams.get("state") || "[State]";
  const district = searchParams.get("district") || "[District]";
  const disputedAmount = searchParams.get("disputedAmount") || "[Amount]";
  const transactionDate = searchParams.get("transactionDate") || "[Date]";
  const complaintNumber = searchParams.get("complaintNumber") || "N/A";

  const messageTemplate = `PAYMENT VERIFICATION & CASE FILE
--------------------------
Draft Type: ${draftType}
Customer Name: ${name}
Bank: ${bank} | Acc: ${bankAccount}
State: ${state} | District: ${district}
Disputed Amt: ₹${disputedAmount} | Date: ${transactionDate}
Complaint No: ${complaintNumber}
--------------------------
Screenshot attached below. Please generate my representation.`;
  const whatsappUrl = `https://wa.me/919352553071?text=${encodeURIComponent(messageTemplate)}`;

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center py-12 px-4 md:px-6">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
        
        <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-4">
          <ShieldCheck className="h-6 w-6 text-emerald-500" />
          <h1 className="text-2xl font-bold text-white">Secure Checkout</h1>
        </div>

        {/* Order Summary */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 mb-8">
          <h2 className="text-sm text-zinc-400 font-bold uppercase tracking-wider mb-4">Order Summary</h2>
          <div className="flex justify-between items-center mb-2 text-white">
            <span className="font-medium">{draftType}</span>
            <span className="font-bold">₹499</span>
          </div>
          <div className="flex justify-between items-center text-zinc-500 text-sm border-t border-zinc-800 pt-3 mt-3">
            <span>Taxes & Fees</span>
            <span>Included</span>
          </div>
          <div className="flex justify-between items-center text-emerald-400 text-lg font-bold border-t border-zinc-800 pt-3 mt-3">
            <span>Total</span>
            <span>₹499</span>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-56 h-56 bg-white rounded-2xl flex flex-col items-center justify-center p-2 mb-4 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <img 
              src="/qr.jpg" 
              alt="UPI QR Code - Girdhari Lal Sharma" 
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          <div className="mb-6 space-y-1">
            <p className="text-zinc-300 font-medium">Account holder: <span className="text-white font-bold">Girdhari Lal Sharma</span></p>
            <p className="text-zinc-400 text-sm">UPI ID: <span className="font-mono text-white">xy1@slc</span></p>
          </div>
          
          <p className="text-zinc-300 leading-relaxed font-medium text-sm md:text-base bg-zinc-950/50 p-4 rounded-xl border border-zinc-800">
            Scan to pay ₹499 via GPay, PhonePe, or Paytm. Once paid, click the button below to send us your screenshot and receive your verified draft instantly.
          </p>
        </div>

        {/* WhatsApp CTA */}
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold h-14 rounded-xl shadow-lg shadow-green-900/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-lg"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          Send Screenshot on WhatsApp
        </a>

      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
