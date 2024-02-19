import Image from "next/image";

export default function StepsUI() {

    return (
        <section id="steps" className="absolute w-full flex justify-center bg-white rounded-3xl">
            <div className="container p-24">
                <h3 data-i18n="steps.title"></h3>
                <div className="container flex justify-between items-center">
                    <div className="flex flex-col gap-6">
                        <div className="flex">
                            <h4 className="text-error font-black text-style-display-2xl ">01</h4>
                            <p data-i18n="steps.step1"></p>
                        </div>
                        <div className="flex">
                            <h4 className="text-brand2 font-black text-style-display-2xl before:content-[''] before:block before:w-12 before:h-1.5 before:bg-[#1ec9ab] before:rounded-xl">02</h4>
                            <p data-i18n="steps.step2"></p>
                        </div>
                        <div className="flex">
                            <h4 className="text-brand3 font-black text-style-display-2xl before:content-[''] before:block before:w-12 before:h-1.5 before:bg-[#ffc502] before:rounded-xl">03</h4>
                            <p id="drawConditions">
                                <span data-i18n="steps.step3"></span>
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