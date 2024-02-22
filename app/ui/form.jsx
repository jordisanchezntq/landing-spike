'use client'

import Image from 'next/image'
import React from 'react'

const form = ({
    co
}) => {
  return (
    <section className='flex flex-col gap-8 items-center md:items-start py-8 md:pt-48 px-8'> 
        <Image src="/img/logo_nicequest.svg" alt="Nicequest" width={180} height={180} />
        <form className='flex flex-col gap-5 flex-1 w-full max-w-lg'>
            <h1 className='text-style-heading-xl text-neutral-dark dark:text-neutral font-bold text-center md:text-start'>
            Únete a Nicequest y realiza encuestas a cambio de regalos
            </h1>
            <div className="field w-full">
                <input type="text" name="name" placeholder="Nombre" />
            </div>
            <div className="field w-full">
                <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="field w-full">
                <input type="date" name="date" placeholder="Fecha nacimiento" />
            </div>
            <div className="field w-full">
                <input type="text" name="country" placeholder="País de residencia" />
            </div>
            <div className="field">
                <div className="input-checkbox flex items-center m-0">
                    <input type="checkbox" value="" id="default-checkbox-1" className="input-checkbox-button" />
                    <label className="helper-text mb-0" htmlFor="default-checkbox-1">He leído y acepto las Condiciones generales y la
                    <a className='link text-brand-dark' href="#"> Política de privacidad</a>.</label>
                </div>
            </div>
            <div className="dark:bg-neutral-dark p-2">
                <button    
                    className="button bg-brand4">
                    Registrate
                </button>
            </div>
        </form>
    </section>
  )
}

export default form