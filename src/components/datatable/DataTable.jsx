import { userColumns, userRows } from '../../datatablesource';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = () => {
  const actionColums = [
    {field: "action", headerName: "Action", width: 200, renderCell: () => {
        return (
            <div className='cellAction'>
                <div className='viewButton'>
                    View
                </div>
                <div className='deleteButton'>
                    Delete
                </div>
            </div>
        );
    }}
  ];
  return (
    <div className='datatable'>
        <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionColums)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
        />
    </div>
  )
}

export default DataTable 