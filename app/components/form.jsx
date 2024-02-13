import React from 'react'

const form = () => {
  return (
    <form className='flex flex-col gap-5 flex-1 justify-center w-full p-6'>
        <h1 className='text-style-display-md text-neutral-dark dark:text-neutral font-bold'>
        Únete a Nicequest y realiza encuestas a cambio de regalos
        </h1>
        <div className="field w-full">
            <label for="name">Name</label>
            <input type="text" name="name" placeholder="Nombre" />
        </div>
        <div className="field w-full">
            <label for="name">Email</label>
            <input type="text" name="email" placeholder="Email" />
        </div>
        <div className="dark:bg-neutral-dark p-2">
            <button    
                className="button bg-brand4">
                Registrate
            </button>
        </div>
    </form>
  )
}

export default form