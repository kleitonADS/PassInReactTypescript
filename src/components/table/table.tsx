import { ComponentProps } from "react";

interface tableProps extends ComponentProps<'table'>{}

export function Table(props: tableProps){
    return(
        <div className='border border-white/10 rounded-lg'>
            <table {...props} className='w-full'></table>
        </div>
    )
}