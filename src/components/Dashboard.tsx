import Image from "next/image";
import { BRANDING } from "@/constants/branding";

export default function Dashboard() {
    return (
        <section className="bg-[#FCFDFF]">
            <div className="container two-cols-r place-items-center">
                <div className="flex flex-col h-full">
                    <Image src="graphics/portal.svg" alt="Dashboard Graphics" width={451} height={353} className="mt-auto"/>
                </div>
                <div className="sp">
                    <Image src="icon/chart.svg" width={60} height={60} alt="Charts Icon" />
                    <div className="flex flex-row">
                        <Image src="icon/arrow.svg" alt="Arrow" width={4} height={8} className="mr-2"/> 
                        <p className="title">Powerful Dashboard</p>
                    </div>
                    <p className="heading-purple">Manage Your Payment Collection Effectively</p>
                    <p className="light-text">
                        Super-charge your business management with {BRANDING.leanx}&apos; powerful real-time dashboard. Equipped with detailed information which will enhance your ability to create effective, high-quality and strategic business  decisions.
                    </p>
                </div>
            </div>
        </section>
    )
}