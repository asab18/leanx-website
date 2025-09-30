import Image from "next/image";
import { BRANDING } from "@/constants/branding";

export default function Hero() {
    return (
        <section>
            <div className="container two-cols place-items-center">
                <div className="sp">
                    <Image src="brand/logo.svg" alt="Lean.X Logo" width={198} height={54}/>
                    <div className="my-4">
                        <span className="heading text-[#5FC7CD]">Next-Generation, </span>
                        <span className="heading text-[#FFCE33]">Unified Payment Platform</span>
                    </div>
                    <p className="light-text">
                        We bring together everything that&apos;s necessary to build a good online business, from <span className="reg-text">accepting payments, sending money nationwide</span>  or <span className="reg-text">selling products on the internet</span>. {BRANDING.leanx}&apos;s  product suite empowers all types of businesses, whether it&apos;s an online e-commerce business or a giant internet corporation, from freshly registered businesses to long established businesses.
                        <br/> <br/>
                        Our mission is simple - to make all your business transaction processes <span className="reg-text">SMARTER</span> and <span className="reg-text">SIMPLER</span>.
                    </p>
                </div>
                <div className="flex flex-col h-full">
                    <Image src="graphics/hero.svg" alt="Dashboard Graphics" width={312} height={386} className="mt-auto" />
                </div>
            </div>
        </section>
    )
}