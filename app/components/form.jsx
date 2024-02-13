'use client'

import Image from 'next/image'
import React from 'react'

const form = () => {
  return (
    <section className='flex flex-col gap-5 items-center p-2'> 
        <Image src="/img/logo_nicequest.svg" alt="Nicequest" width={180} height={180} />
        <form className='flex flex-col gap-5 flex-1 justify-center w-full p-6'>
            <h1 className='text-style-heading-2xl text-neutral-dark dark:text-neutral font-bold'>
            Únete a Nicequest y realiza encuestas a cambio de regalos
            </h1>
            <div className="field w-full">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Nombre" />
            </div>
            <div className="field w-full">
                <label htmlFor="name">Email</label>
                <input type="text" name="email" placeholder="Email" />
            </div>
            <div class="field">
            <div class="input-checkbox">
                <input type="checkbox" value="" id="default-checkbox-1" class="input-checkbox-button" />
                <label class="helper-text" for="default-checkbox-1">He leído y acepto las Condiciones generales y la
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