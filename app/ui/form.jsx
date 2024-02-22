'use client'

import Image from 'next/image'
import React from 'react'
import { singularEvents } from '../constants/singularEvents'

const form = ({
    co
}) => {
    const handleRegistration = (e) => {
        e.preventDefault();
        singularSdk.event(singularEvents.ON_REGISTER);
    }

  return (
    <section className='flex flex-col gap-5 items-center p-2'> 
        <Image src="/img/logo_nicequest.svg" alt="Nicequest" width={180} height={180} />
        <form className='flex flex-col gap-5 flex-1 justify-center w-full max-w-lg p-6'>
            <h1 className='text-style-heading-xl text-neutral-dark dark:text-neutral font-bold'>
            Únete a Nicequest y realiza encuestas a cambio de regalos
            </h1>
            <div className="field w-full">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Nombre" />
            </div>
            <div className="field w-full">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="field w-full">
                <label htmlFor="country">País de residencia</label>
                <input type="text" name="country" placeholder={co} />
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
                    onClick={handleRegistration}
                    className="button bg-brand4">
                    Registrate
                </button>
            </div>
        </form>
    </section>
  )
}

export default form