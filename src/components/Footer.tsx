import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/constants/links";
import { BRANDING } from "@/constants/branding";
import { MESSAGES } from "@/constants/messages";

export default function Footer() {
    return (
        <section className="bg-[#5FC7CD]">
            <div className="container sp flex flex-col md:grid md:grid-cols-2">
                <div>
                    <Image src="brand/logo-white.svg" alt="Lean.X Logo" width={140} height={38} className="mb-6"/>
                    <p className="light-text-white">
                        Product By <Link href={LINKS.leanis} target="_blank" className="reg-text-purple">Leanis Solutions</Link> <br/>
                        T2-21-11, 8trium Tower, <br/>
                        Jalan Cempaka SD12/5, <br/>
                        Bandar Sri Damansara, <br/>
                        52200 Kuala Lumpur,<br/>
                        Malaysia
                        <br/><br/>
                    </p>
                </div>
                <div className="justify-self-end">
                    <div className="flex flex-col space-y-3">
                        <p className="med-text-yellow">Get in Touch</p>
                        <Link 
                            href={`mailto:${BRANDING.supportEmail}?${MESSAGES.emailSupport}`} 
                            target="_blank" 
                            className="med-text-white"
                        >
                            Via Email
                        </Link> 
                        <Link 
                            href={`${BRANDING.supportPhone}?${MESSAGES.wsSupport}`} 
                            target="_blank" 
                            className="med-text-white"
                        >
                            Via Whatsapp
                        </Link>
                        <br/>

                        <p className="med-text-yellow">Pricing</p>
                        <Link href="#pricing" className="med-text-white">Pricing Details</Link>
                        <br/>

                        <p className="med-text-yellow">Developer</p>
                        <Link href={LINKS.apiDocs} target="_blank" className="med-text-white">API Reference</Link>

                        <div className="lg:hidden">
                            <p className="med-text-yellow mb-3">Others</p>
                            <div className="flex flex-col space-y-3">
                                <Link href={LINKS.tnc} target="_blank" className="med-text-white">Terms &amp; Conditions</Link>
                                <Link href={LINKS.privacyPolicy} target="_blank" className="med-text-white">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-white"/>
            <div className="container">
                <div className="py-4 px-12 lg:px-24 flex flex-row justify-between">
                    <div className="text-xs text-white font-light leading-relaxed space-y-6 ">
                        &copy; {new Date().getFullYear()}  Leanis Solutions Sdn Bhd. All rights reserved.
                    </div>
                    <div className="hidden lg:block flex flex-row justify-end items-end">
                        <Link href={LINKS.tnc} target="_blank" className="med-text-white px-4">Terms &amp; Conditions</Link>
                        <Link href={LINKS.privacyPolicy} target="_blank" className="med-text-white">Privacy Policy</Link>
                    </div>
                </div>
            </div>       
        </section>
    )
}