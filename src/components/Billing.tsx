import Image from "next/image";

export default function Billing() {
    return (
        <section className="bg-[#FEFCFF]">
            <div className="container two-cols-r place-items-center">
                <div className="flex flex-col h-full">
                    <Image src="graphics/bills.svg" alt="Dashboard Graphics" width={451} height={353} className="mt-auto" />
                </div>
                <div className="sp">
                    <Image src="icon/bill.svg" width={60} height={60} alt="Bills Icon" />
                    <div className="flex flex-row">
                        <Image src="icon/arrow.svg" alt="Arrow" width={4} height={8} className="mr-2" /> 
                        <p className="title">Effective Billing</p>
                    </div>
                    <p className="heading-purple">Smarter Billing via SMS, WhatsApp & Telegram</p>
                    <p className="light-text">
                        Say goodbye to chasing payments or waiting for checks in the mail. Make your billing process faster and easier by sending invoices directly through popular messaging apps to get paid instantly.
                    </p>
                </div>
            </div>
        </section>
    )
}