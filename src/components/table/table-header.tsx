import { ComponentProps } from "react";

interface tableHeaderProps extends ComponentProps<'th'> {}


export function TableHeader(props: tableHeaderProps){
    return(
        <th {...props} className='py-3 px-4 text-sm font-semibold text-left'></th>
    )
}