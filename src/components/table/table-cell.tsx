import { ComponentProps } from "react";
import { twMerge } from 'tailwind-merge'

interface tableCellProps extends ComponentProps<'td'>{}

export function TableCell(props: tableCellProps){
    return(
        <td {...props}  className={ twMerge('py-3 px-4 text-sm  text-zinc-300' , props.className)}></td>
    )
}