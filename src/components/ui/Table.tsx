import React, { useMemo, FC } from 'react';

import DataTable from 'react-data-table-component';
import FilterComponent from './SearchFilter';

interface TableProps {
  title?: string;
  data: Record<any, any>;
  columns: any;
}

// const columns: any[] = [
//   {
//     name: 'Id',
//     selector: (row: any) => row.id,
//     sortable: true,
//     grow: 0,
//   },
//   {
//     name: 'Title',
//     // selector: (row: any) => row.title,
//     sortable: true,
//     cell: (row: Record<string, any>) => {
//       return (
//         <>
//           <Link className='hover:underline py-2' href={`/contests/${row.id}`}>{row.title}</Link>
//         </>
//       );
//     },
//     grow: 1,
//   },
//   {
//     name: 'Created at',
//     selector: (row: any) => row.created_at.slice(0, 10),
//     sortable: true,
//     grow: 1,
//   },
//   {
//     name: 'End date',
//     selector: (row: any) => row.end_date.slice(0, 10),
//     sortable: true,
//     grow: 1,
//   },
//   {
//     name: 'Cover Picture',
//     sortable: true,
//     cell: (row: Record<string, any>) => {
//       return (
//         <>
//           <Image
//             alt=''
//             className='max-h-[55px] max-w-[100px] object-contain'
//             src={row.cover_picture}
//             width={100}
//             height={100}
//           />
//         </>
//       );
//     },
//   },
//   {
//     name: 'Buttons',
//     button: true,
//     cell: (row: Record<string, any>) => {
//       return (
//         <>
//           <Link className='mr-2' href={`/contests/edit/${row.id}`}>
//             Edit
//           </Link>
//           <button onClick={() => handleDelete(row.id)}>Delete</button>
//         </>
//       );
//     },
//   },
// ];

const Table: FC<TableProps> = ({ data, columns, title }) => {
  const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const filteredItems = data?.filter(
    (item: any) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      title={title}
      columns={columns}
      data={filteredItems}
      defaultSortFieldId='name'
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default Table;
