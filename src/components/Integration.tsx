import Image from "next/image";
import Link from "next/link";
import { LINKS } from "@/constants/links";
import { BRANDING } from "@/constants/branding";

export default function Integration() {
    return (
        <section>
            <div className="container two-cols">
                <div className="sp">
                    <Image src="icon/cube.svg" width={60} height={60} alt="Cube"/>
                    <div className="flex flex-row">
                        <Image src="icon/arrow.svg" alt="Arrow" width={4} height={8} className="mr-2"/>
                        <p className="title">Simplified Integration</p>
                    </div>
                    <p className="heading-purple">Powerful and Easy-to-Use APIs</p>
                    <p className="light-text">
                        Streamline your operations effortlessly with {BRANDING.leanx}. Use our powerful API and sandbox environment to integrate your way, or get started instantly with our pre-built plugins.
                    </p>

                    <div className="grid grid-cols-[55px_auto]">
                        <div>
                            <Image src="icon/screens.svg" alt="Screens" width={40} height={40} />
                        </div>
                        <div>
                            <div className="flex flex-row">
                                <Image src="icon/arrow.svg" alt="Arrow" width={4} height={8} className="mr-2" />
                                <p className="title">Robust API</p>
                            </div>
                            <p className="light-text">
                                Embrace a well-structured API, easy-to-understand documentation, and hassle-free integration.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-[55px_auto]">
                        <div>
                            <Image src="icon/plug.svg" alt="Plug" width={40} height={40} />
                        </div>
                        <div>
                            <div className="flex flex-row">
                                <Image src="icon/arrow.svg" alt="Arrow" width={4} height={8} className="mr-2" />
                                <p className="title">Suite Plugin</p>
                            </div>
                            <p className="light-text">
                                Plugins are available to integrate with your existing CMS, ERP, or other platforms.
                            </p>
                        </div>
                    </div>
                    <div className="pt-4">
                        <Link href={LINKS.apiDocs} target="_blank" className="btn-pri">Integrate Now</Link>
                    </div>
                </div>
                <div className="flex flex-col justify-end items-end">
                    <Image src="graphics/coding.svg" alt="Coding Interface" width={570} height={501} className="mt-auto ml-auto" />
                </div>
            </div>
        </section>
    )
}