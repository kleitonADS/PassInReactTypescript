import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'
import { ChangeEvent, useState } from 'react'
import { attendees } from '../data/attendees'





export function AttendeeList(){

    const [search, SetSearch]= useState('')
    
    function onChangeInputChanged(event:ChangeEvent<HTMLInputElement>){
        SetSearch(event.target.value)
    }
    
    
    return(
        <div className='flex flex-col gap-4'>
        <div className="flex gap 3 items-center">
            <h1 className="text-2xl font-bold">Participantes</h1>
            <div className="px-3 w-72 py-0.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
         
            <Search className='size-4 text-emerald-300' />
            <input 
                onChange={onChangeInputChanged}
                className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" 
                placeholder="Buscar participante..."/>
            </div>

            {search}
           
        </div>

            <Table>
            <thead>
                <tr className='border-b border-white/10'>
                    
                    <TableHeader style={{ width:48}} >
                        <input className='size-4 bg-black/20 rounded border-white/10 ' type="checkbox" name="" id="" />
                    </TableHeader>
                    
                    <TableHeader >Código </TableHeader>
                    <TableHeader >Participantes </TableHeader>
                    <TableHeader >Data de inscrição </TableHeader>
                    <TableHeader>Data de check-in </TableHeader>
                    <TableHeader  style={{ width:64}}> </TableHeader>
                </tr>
            </thead>
            <tbody>
            { attendees.map( (attendee)=>{
                return(
                    <TableRow key={attendee.id} >
                    <TableCell>
                        <input className='size-4 bg-black/20 rounded border-white/10 accent-o'type="checkbox" name="" id="" />
                    </TableCell>
                    <TableCell>452355</TableCell>
                   
                    <TableCell>
                        <div className='flex flex-col gap-1'>
                            <span className='font-semibold text-white'>Kleiton Azevedo</span>
                            <span>Kleiton.ads@hotmail.com</span>
                        </div>
                    </TableCell>

                    <TableCell> 7 dias atrás</TableCell>
                    <TableCell> 3 dias atrás</TableCell>
                    <TableCell>
                        <IconButton transparent >
                            <MoreHorizontal className='size-4' />
                        </IconButton>
                    </TableCell>
                </TableRow>
                )
            })}
            </tbody>
            <tfoot>
                <tr>
                
                <TableCell className='py-3 px-4 text-sm text-zinc-300' colSpan={3} > Mostrando 10 de 224 itens
                </TableCell> 
                    
                <TableCell  className='py-3 px-4 text-sm text-zinc-300 text-right'  colSpan={3} >
                        
                        <div  className='inline-flex items-center gap-8'>
                            
                            <span>Página 1 de 23</span>
                           
                            <div className='flex gap-1.5'>
                                <IconButton>
                                    <ChevronsLeft className='size-4' />
                                </IconButton>
                                
                                <IconButton>
                                    <ChevronLeft className='size-4' />
                                </IconButton>
                            
                                <IconButton>
                                    <ChevronRight className='size-4' />
                                </IconButton>
                            
                                <IconButton>
                                    <ChevronsRight className='size-4' />
                                </IconButton>
                            </div>

                        </div>
                   
                    </TableCell> 
                </tr>
            </tfoot>
            </Table>
      
        </div>
    )
}