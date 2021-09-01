import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

function Grilla() {
    const [datatable, setDatatable] = React.useState({
      columns: [
        {
          label: 'Id Festivo',
          field: 'id_festivo',
          width: 150,
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
          },
        },
        {
          label: 'Día Festivo',
          field: 'dia_festivo',
          width: 270,
        },
        {
          label: 'Descripción',
          field: 'descripcion',
          width: 200,
        },
        {
          label: 'Id Proceso',
          field: 'id_proceso',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'Acción',
          field: 'accion',
          sort: 'disabled',
          width: 150,
        },
        
      ],
      rows: [
        {
          id_festivo: '1',
          dia_festivo: '2011/04/25',
          descripcion: 'Edinburgh',
          id_proceso: '61',
          accion: <button type="button" class="btn btn-dark">Borrar</button>,
          
        },
        {
          id_festivo: '2',
          dia_festivo: '2011/07/25',
          descripcion: 'Tokyo',
          id_proceso: '63',
          accion: <button type="button" class="btn btn-dark">Borrar</button>,
          
        },
        {
          id_festivo: '3',
          dia_festivo: '2009/01/12',
          descripcion: 'San Francisco',
          id_proceso: '66',
          accion: <button type="button" class="btn btn-dark">Borrar</button>,
          
        },
        {
          id_festivo: '4',
          dia_festivo: '2012/03/29',
          descripcion: 'Edinburgh',
          id_proceso: '22',
          accion: <button type="button" class="btn btn-dark">Borrar</button>,
        },
        
      ],
    });
  
    return <MDBDataTableV5 hover entriesOptions={[10, 20, 25]} entries={10} pagesAmount={4} data={datatable} searchTop searchBottom={false} />;
  }

  export default Grilla;