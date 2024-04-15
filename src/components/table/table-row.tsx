import { ComponentProps } from "react";


interface tableRowProps extends ComponentProps<'tr'>{}

export function TableRow(props: tableRowProps){
    return(
        <tr {...props}  className='border border-white/10 hover:bg-white/10'></tr>
    )
}