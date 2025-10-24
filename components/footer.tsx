
"use client";
import Link from "next/link"
import { useState } from "react"
import { TermsModal, PrivacyModal, TrademarkModal, ModernSlaveryModal, CookiesModal } from "@/components/legal-modals"

export function Footer() {
  const [termsOpen, setTermsOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [trademarkOpen, setTrademarkOpen] = useState(false)
  const [modernSlaveryOpen, setModernSlaveryOpen] = useState(false)
  const [cookiesOpen, setCookiesOpen] = useState(false)

  return (
    <>
      <footer className="bg-[#1C2841] border-t border-[#1C2841] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">CWBS</h3>
            <p className="text-xs sm:text-sm text-white/70">
              Corporate World Business Solutions - Empowering enterprises with innovative solutions.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.073C22 6.505 17.523 2 12 2S2 6.505 2 12.073C2 17.087 5.657 21.247 10.438 22v-7.01H7.898v-2.917h2.54v-2.228c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.773-1.63 1.562v1.901h2.773l-.443 2.917h-2.33V22C18.343 21.247 22 17.087 22 12.073z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6zM17.8 6.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
                title="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.5 8h4V24h-4V8zm7 0h3.839v2.177h.054c.534-1.013 1.839-2.083 3.787-2.083C19.5 8.094 22 10.2 22 14.244V24h-4v-8.648c0-2.062-.037-4.716-2.874-4.716-2.877 0-3.317 2.247-3.317 4.57V24H7.5V8z" />
                </svg>
              </Link>
              <Link
                href="mailto:info@fusioncloudtrainings.com"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Email"
                title="Email"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm sm:text-base">Address</h4>
            <p className="text-xs sm:text-sm text-white/70">
              5851 Legacy Cir 6th Floor
              <br />
              Plano, TX 75024
              <br />
              United States
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm sm:text-base">Contact</h4>
            <p className="text-xs sm:text-sm text-white/70">
              Phone: +1 800-256-3312
              <br />
              Email: <Link href="mailto:info@fusioncloudtrainings.com" className="underline hover:text-white">info@fusioncloudtrainings.com</Link>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  className="text-white/70 hover:text-white transition-colors w-full text-left"
                  onClick={() => setTermsOpen(true)}
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-white/70 hover:text-white transition-colors w-full text-left"
                  onClick={() => setPrivacyOpen(true)}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-white/70 hover:text-white transition-colors w-full text-left"
                  onClick={() => setTrademarkOpen(true)}
                >
                  Trademark
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-white/70 hover:text-white transition-colors w-full text-left"
                  onClick={() => setModernSlaveryOpen(true)}
                >
                  Modern Slavery Statement
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-white/70 hover:text-white transition-colors w-full text-left"
                  onClick={() => setCookiesOpen(true)}
                >
                  Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-xs sm:text-sm text-white/70">
          <p>&copy; 2025 CWBS. All rights reserved.</p>
        </div>
      </div>
    </footer>
      <TermsModal open={termsOpen} onOpenChange={setTermsOpen} />
      <PrivacyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
      <TrademarkModal open={trademarkOpen} onOpenChange={setTrademarkOpen} />
      <ModernSlaveryModal open={modernSlaveryOpen} onOpenChange={setModernSlaveryOpen} />
      <CookiesModal open={cookiesOpen} onOpenChange={setCookiesOpen} />
    </>
  )
}
