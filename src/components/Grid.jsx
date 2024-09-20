import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Scroll, Resize, ContextMenu, Filter, ExcelExport, Edit, PdfExport, Sort} from '@syncfusion/ej2-react-grids'
import { ordersdata } from '../data/dummy'
import '@syncfusion/ej2/material.css' 

const Grid = ({ordersgrid, height, width}) => {
  return (
    <div className='bg-white rounded-3xl w-max p-4'>
      <GridComponent id='grid-comp' height={height} width={width} style={{borderColor: 'white'}} dataSource={ordersdata} allowSorting>
        <ColumnsDirective className='rounded-3xl bg-[#fafafa]'>
          {ordersgrid.map((item, index) => (
             <ColumnDirective key={index} {...item} className='flex'/> 
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, ExcelExport, Edit, PdfExport, Scroll]}/>
      </GridComponent>
    </div>
  )
}

export default Grid