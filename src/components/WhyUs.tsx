import Image from "next/image";
import Link from "next/link";
import { BRANDING } from "@/constants/branding";
import { MESSAGES } from "@/constants/messages";

export default function WhyUs() {
    return (
        <section className="bg-[#FEFFF9]">
            <div className="container sp">
                <Image src="icon/x.svg" alt="Lean.X Logo" width={60} height={60} />
                <div className="flex flex-row">
                    <Image src="icon/arrow.svg" alt="Arrow" width={4} height={8} className="mr-2"/> 
                    <p className="title">Why Us?</p>
                </div>
                <p className="heading-purple">Simplified & Unified Solution to Payment Infrastructure</p>
                <p className="light-text">
                    More than just a payment platform, {BRANDING.leanx} covers every aspect of payments structure for your application. From hardware to payments technology and back-end infrastructure, {BRANDING.leanx} makes it possible to build the foundation of your project before you&apos;ve even started designing the interface.
                </p>
                <div className="two-cols">
                    <div className="grid grid-cols-[55px_auto]">
                        <div>
                            <Image src="icon/tech.svg" alt="Technology" width={40} height={40} />
                        </div>
                        <div>
                            <div className="flex flex-row">
                                <Image src="icon/arrow.svg" alt="Arrow" width={4} height={8} className="mr-2" />
                                <p className="title">Technology First</p>
                            </div>
                            <p className="light-text lg:pr-10">
                                Technology-focused approach to streamlining payment collection and pay-out for businesses.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[55px_auto]">
                        <div>
                            <Image src="icon/unify.svg" alt="Unify" width={40} height={40} />
                        </div>
                        <div>
                            <div className="flex flex-row">
                                <Image src="icon/arrow.svg" alt="Arrow" width={4} height={8}  className="mr-2" />
                                <p className="title">Unified Platform</p>
                            </div>
                            <p className="light-text lg:pr-10">
                                Single, comprehensive and secure platform for all payment processing needs.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-[55px_auto]">
                        <div>
                            <Image src="icon/terminal.svg" alt="Terminal" width={40} height={40} />
                        </div>
                        <div>
                            <div className="flex flex-row">
                                <Image src="icon/arrow.svg" alt="Arrow" width={4} height={8}  className="mr-2" />
                                <p className="title">Experienced in Fintech</p>
                            </div>
                            <p className="light-text lg:pr-10">
                                Expertise in financial technology enables efficient payment solutions for businesses.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[55px_auto]">
                        <div>
                            <Image src="icon/optimise.svg" alt="Optimisation" width={40} height={40} />
                        </div>
                        <div>
                            <div className="flex flex-row">
                                <Image src="icon/arrow.svg" alt="Arrow" width={4} height={8} className="mr-2" />
                                <p className="title">Optimization Centric</p>
                            </div>
                            <p className="light-text lg:pr-10">
                                Payment solution designed to maximize efficiency and effectiveness for businesses.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#8273B5]">
                <div className="container sp two-cols">
                    <div>
                        <p className="heading text-white">Ready to get started?</p>
                        <p className="light-text-white mb-4">
                            Explore {BRANDING.leanx} products, or create an account instantly and start accepting payments.
                        </p>
                    </div>
                    <div className="flex flex-row flex-wrap justify-self-end gap-12 md:gap-6 my-auto">
                        <div>
                            <Link 
                                href={`mailto:${BRANDING.salesEmail}?${MESSAGES.emailSales}`}
                                className="btn-sec-inv"
                                target="_blank"
                            >
                                Email Sales
                            </Link>
                        </div>  
                        <div>
                            <Link 
                                href={`${BRANDING.supportPhone}?${MESSAGES.wsSales}`}
                                className="btn-sec-inv"
                                target="_blank"
                            >
                                Whatsapp Sales
                            </Link>
                        </div> 
                    </div>
                    
                </div>
            </div>
        </section>
    )
}