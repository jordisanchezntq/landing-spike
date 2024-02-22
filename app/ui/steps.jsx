import Image from "next/image";

export default function StepsUI() {

    return (
        <section id="steps" className="absolute w-100 flex justify-center bg-white rounded-3xl bottom-4 left-4 right-4">
            <div className="container py-24">
                <h3 data-i18n="steps.title"></h3>
                <div className="container flex justify-between items-center gap-6">
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-4">
                            <h4 className="text-error font-black text-style-display-2xl before:content-[''] before:block before:w-12 before:h-1 before:mb-4 before:bg-[#ff4b00] before:rounded-xl">01</h4>
                            <p data-i18n="steps.step1" className="pt-6 font-bold">
                                Regístrate y confirma tu cuenta
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <h4 className="text-brand2 font-black text-style-display-2xl before:content-[''] before:block before:w-12 before:h-1 before:mb-4 before:bg-[#1ec9ab] before:rounded-xl">02</h4>
                            <p data-i18n="steps.step2" className="pt-6 font-bold">
                                Responde encuestas y consigue Korus
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <h4 className="text-brand3 font-black text-style-display-2xl before:content-[''] before:block before:w-12 before:h-1 before:mb-4 before:bg-[#ffc502] before:rounded-xl">03</h4>
                            <p data-i18n="steps.step3" className="pt-6 font-bold">
                                Canjéalos por regalos y sorteos en nuestra tienda
                            </p>
                        </div>
                    </div>
                    <div className="image">
                        <Image 
                        src="/img/steps.png" 
                        width={400}
                        height={400} />
                    </div>
                </div>
            </div>
        </section>
    )
}