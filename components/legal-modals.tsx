"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogOverlay } from "@/components/ui/dialog";

interface LegalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TermsModal({ open, onOpenChange }: LegalModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
      <DialogContent className="sm:max-w-2xl bg-white border-2 border-[#1C2841] shadow-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1C2841]">Terms and Conditions</DialogTitle>
        </DialogHeader>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <h2 className="text-lg font-semibold">1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
          <h2 className="text-lg font-semibold">2. Use of the Website</h2>
          <ul className="list-disc pl-5">
            <li>You must use this website in accordance with all applicable laws and regulations.</li>
            <li>Unauthorized use or misuse of the website is strictly prohibited.</li>
          </ul>
          <h2 className="text-lg font-semibold">3. Intellectual Property</h2>
          <p>All content, trademarks, and data on this website are the property of CWBS or its licensors. You may not reproduce, distribute, or use any content without prior written permission.</p>
          <h2 className="text-lg font-semibold">4. Limitation of Liability</h2>
          <p>CWBS is not liable for any damages arising from your use of this website. Use at your own risk.</p>
          <h2 className="text-lg font-semibold">5. Changes to Terms</h2>
          <p>We reserve the right to update these Terms and Conditions at any time. Continued use of the website constitutes acceptance of the new terms.</p>
          <h2 className="text-lg font-semibold">6. Contact</h2>
          <p>For questions regarding these Terms and Conditions, contact us at <a href="mailto:info@fusioncloudtrainings.com" className="underline">info@fusioncloudtrainings.com</a>.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function PrivacyModal({ open, onOpenChange }: LegalModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
      <DialogContent className="sm:max-w-2xl bg-white border-2 border-[#1C2841] shadow-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1C2841]">Privacy Policy</DialogTitle>
        </DialogHeader>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <h2 className="text-lg font-semibold">1. Introduction</h2>
          <p>CWBS is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.</p>
          <h2 className="text-lg font-semibold">2. Information We Collect</h2>
          <ul className="list-disc pl-5">
            <li>Personal identification information (name, email address, phone number, etc.)</li>
            <li>Usage data and cookies</li>
          </ul>
          <h2 className="text-lg font-semibold">3. How We Use Your Information</h2>
          <ul className="list-disc pl-5">
            <li>To provide and maintain our services</li>
            <li>To communicate with you</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>
          <h2 className="text-lg font-semibold">4. Data Security</h2>
          <p>We implement appropriate security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
          <h2 className="text-lg font-semibold">5. Your Rights</h2>
          <ul className="list-disc pl-5">
            <li>Access, update, or delete your personal information</li>
            <li>Opt out of marketing communications</li>
          </ul>
          <h2 className="text-lg font-semibold">6. Contact</h2>
          <p>For privacy-related questions, contact us at <a href="mailto:info@fusioncloudtrainings.com" className="underline">info@fusioncloudtrainings.com</a>.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function TrademarkModal({ open, onOpenChange }: LegalModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
      <DialogContent className="sm:max-w-2xl bg-white border-2 border-[#1C2841] shadow-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1C2841]">Trademark Notice</DialogTitle>
        </DialogHeader>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <h2 className="text-lg font-semibold">1. Ownership</h2>
          <p>All trademarks, logos, and brand names displayed on this website are the property of CWBS or their respective owners.</p>
          <h2 className="text-lg font-semibold">2. Restrictions</h2>
          <ul className="list-disc pl-5">
            <li>Unauthorized use of any trademark, logo, or brand name is strictly prohibited.</li>
            <li>You may not use our trademarks in connection with any product or service without prior written consent.</li>
          </ul>
          <h2 className="text-lg font-semibold">3. Inquiries</h2>
          <p>For trademark-related inquiries, please contact us at <a href="mailto:info@fusioncloudtrainings.com" className="underline">info@fusioncloudtrainings.com</a>.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ModernSlaveryModal({ open, onOpenChange }: LegalModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
      <DialogContent className="sm:max-w-2xl bg-white border-2 border-[#1C2841] shadow-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1C2841]">Modern Slavery Statement</DialogTitle>
        </DialogHeader>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <h2 className="text-lg font-semibold">1. Our Commitment</h2>
          <p>CWBS is committed to preventing modern slavery and human trafficking in all areas of our business and supply chains.</p>
          <h2 className="text-lg font-semibold">2. Policies and Practices</h2>
          <ul className="list-disc pl-5">
            <li>We uphold ethical labor practices and expect the same from our suppliers.</li>
            <li>We conduct due diligence on suppliers to assess and address risks of modern slavery.</li>
            <li>We provide training to our teams to identify and address risks of modern slavery and human trafficking.</li>
          </ul>
          <h2 className="text-lg font-semibold">3. Reporting Concerns</h2>
          <p>If you have any concerns or questions regarding our Modern Slavery Statement, please contact us at <a href="mailto:info@fusioncloudtrainings.com" className="underline">info@fusioncloudtrainings.com</a>.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function CookiesModal({ open, onOpenChange }: LegalModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
      <DialogContent className="sm:max-w-2xl bg-white border-2 border-[#1C2841] shadow-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1C2841]">Cookies Policy</DialogTitle>
        </DialogHeader>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
          <h2 className="text-lg font-semibold">1. What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device to help websites function and collect information about your usage.</p>
          <h2 className="text-lg font-semibold">2. How We Use Cookies</h2>
          <ul className="list-disc pl-5">
            <li>To enhance your browsing experience</li>
            <li>To analyze site performance and usage</li>
            <li>To deliver personalized content and ads</li>
          </ul>
          <h2 className="text-lg font-semibold">3. Managing Cookies</h2>
          <p>You can manage or disable cookies in your browser settings. Please note that disabling cookies may affect your experience on our site.</p>
          <h2 className="text-lg font-semibold">4. Contact</h2>
          <p>For questions about our Cookies Policy, contact us at <a href="mailto:info@fusioncloudtrainings.com" className="underline">info@fusioncloudtrainings.com</a>.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
