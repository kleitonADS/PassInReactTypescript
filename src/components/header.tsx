import passInLogo  from '../assets/passInLogo.svg'

export function Header(){
    return(
        <div className='flex items-center gap-5 py-2'>
            <img src={passInLogo} alt="" />
            <nav className=' flex items-center gap-5'>
                <a className='font-medium text-sm text-zinc-300' href="http://">Eventos</a>
                <a className='font-medium text-sm' href="http://">Participantes</a>
            </nav>
        </div>
    )
}