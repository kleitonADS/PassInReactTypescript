import { ComponentProps } from "react"

interface navLinkProps extends ComponentProps<'a'>{
  
}


export function NavLink(props: navLinkProps){
    return(
        <a {...props} className='font-medium text-sm text-zinc-300'></a>
    )
}