import Image from "next/image";

export default function Pricing() {
    return (
        <section id="pricing" className="scroll-mt-18">
            <div className="container sp">
                <div>
                    <Image src="icon/pieces.svg" alt="Pieces Icon" width={60} height={60} />
                    <div className="flex flex-row">
                        <Image src="icon/arrow.svg" alt="Arrow" width={4} height={8} className="mr-2"/> 
                        <p className="title">Package Pricing</p>
                    </div>
                    <p className="heading-purple">Value For Money</p>
                    <p className="light-text">
                        We empower software innovators and next-generation businesses with payment acceptance capabilities within a short time frame and a unified interface, with <span className="reg-text">settlements available on weekends and public holidays</span>.
                    </p>       
                </div>
                <div className="flex flex-col w-full lg:max-w-[85%] justify-self-center lg:grid lg:grid-cols-2 gap-8 lg:gap-20">
                    <div className="overflow-hidden border border-[#5FC7CD] rounded-xl shadow-md">
                        <table className="w-full">
                            <thead className="bg-[#5FC7CD]">
                                <tr>
                                    <th className="med-text-white py-2">LITE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="pt-2 pb-12 px-6">
                                        <br/>
                                        <span className="tbl-title">Setup Fee</span> <br/>
                                        <span className="tbl-content">Free</span> <br/> <br/>

                                        <span className="tbl-title">Yearly Fee</span> <br/>
                                        <span className="tbl-content">Free</span> <br/> <br/>

                                        <span className="tbl-title">Payment Channels</span> <br/>
                                        <span className="flex flex-row flex-wrap gap-4 mt-2">
                                            <Image src="/channels/fpx.svg" alt="FPX" width={0} height={0} className="h-[27px] w-auto" />
                                            <Image src="/channels/tng.svg" alt="FPX" width={0} height={0} className="h-[30px] w-auto" />
                                            <Image src="/channels/grabpay.svg" alt="FPX" width={0} height={0} className="h-[30px] w-auto" />
                                            <Image src="/channels/boost.svg" alt="FPX" width={0} height={0} className="h-[30px] w-auto" />
                                            <Image src="/channels/shopeepay.svg" alt="FPX" width={0} height={0} className="h-[30px] w-auto" />
                                            <br /> <br /> <br/>
                                        </span>

                                        <span className="tbl-title">Transaction Fee Rates</span> <br/>
                                        <ul className="list-disc ml-6">
                                            <li className="tbl-content">FPX (B2C): RM1.50</li>
                                            <li className="tbl-content">E-wallets: 1.70%</li>
                                        </ul>

                                        <br/>
                                        <span className="tbl-title">Settlement</span> <br/>
                                        <span className="tbl-content">Transaction Date + 1 Day</span> <br/>
                                        
                                        <span className="ita-text-purple">(Including weekends and public holidays)</span> <br/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="overflow-hidden border border-[#5FC7CD] rounded-xl shadow-md">
                        <table className="w-full">
                            <thead className="bg-[#5FC7CD]">
                                <tr>
                                    <th className="med-text-white py-2">GROWTH</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="pt-2 pb-12 px-6">
                                        <br/>
                                        <span className="tbl-title">Setup Fee</span> <br/>
                                        <span className="tbl-content">RM250</span> <br/> <br/>

                                        <span className="tbl-title">Yearly Fee</span> <br/>
                                        <span className="tbl-content">Free</span> <br/> <br/>

                                        <span className="tbl-title">Payment Channels</span> <br/>
                                        <span className="flex flex-row flex-wrap gap-4 mt-2">
                                            <Image src="/channels/visa.svg" alt="FPX" width={0} height={0} className="h-[27px] w-auto" />
                                            <Image src="/channels/mastercard.svg" alt="FPX" width={0} height={0} className="h-[27px] w-auto" />
                                            <Image src="/channels/fpx.svg" alt="FPX" width={0} height={0} className="h-[27px] w-auto" />
                                            <Image src="/channels/tng.svg" alt="FPX" width={0} height={0} className="h-[30px] w-auto" />
                                            <Image src="/channels/grabpay.svg" alt="FPX" width={0} height={0} className="h-[30px] w-auto" />
                                            <Image src="/channels/boost.svg" alt="FPX" width={0} height={0} className="h-[30px] w-auto" />
                                            <Image src="/channels/shopeepay.svg" alt="FPX" width={0} height={0} className="h-[30px] w-auto" />
                                            <br /> <br /> <br />
                                        </span>

                                        <span className="tbl-title">Transaction Fee Rates</span> <br/>
                                        <ul className="list-disc ml-6">
                                            <li className="tbl-content">Visa & Mastercard: 2.00%</li>
                                            <li className="tbl-content">FPX (B2C): RM1.00</li>
                                            <li className="tbl-content">FPX (B2B): RM1.50</li>
                                            <li className="tbl-content">E-wallets: 1.50%</li>
                                        </ul>

                                        <br/>
                                        <span className="tbl-title">Settlement</span> <br/>
                                        <span className="tbl-content">Transaction Date + 1 Day</span> <br/> 

                                        <span className="ita-text-purple">(Including weekends and public holidays)</span>
                                        <br/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}