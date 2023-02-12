import { Link } from 'react-router-dom';
import { userColumns, userRows } from '../../datatablesource';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = () => {
  const actionColums = [
    {field: "action", headerName: "Action", width: 200, renderCell: () => {
        return (
            <div className='cellAction'>
                <Link to="/users/45" style={{textDecoration: "none"}}>
                    <div className='viewButton'>View</div>
                </Link>
                <div className='deleteButton'>Delete</div>
            </div>
        );
    }}
  ];
  return (
    <div className='datatable'>
        <div className="datatableTitle">Add New User
        <Link to="/users/new" className='link' style={{textDecoration: "none"}}>
            Add New
        </Link>
        </div>
        <DataGrid
            className='datagrid'
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