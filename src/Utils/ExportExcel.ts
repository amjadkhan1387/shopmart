const saveAsExcelFile = (buffer:any, fileName:any) => {
  import('file-saver').then((module) => {
    if (module && module.default) {
      let EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data = new Blob([buffer], {
        type: EXCEL_TYPE,
      });

      module.default.saveAs(
        data,
        fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION,
      );
    }
  });
};
export const exportExcel = (arr: any) => {
  import('xlsx').then((xlsx) => {
    const worksheet = xlsx.utils.json_to_sheet(arr);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer = xlsx.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    saveAsExcelFile(excelBuffer, 'products');
  });
};

export const exportCSV = (selectionOnly: any, drRef: any) => {
  drRef.current.exportCSV({ selectionOnly });
};

export const exportPdf = (data: any, fileName: any, columns: any) => {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then(() => {
        const doc = new jsPDF.default(0, 0);
        
        const exportColumns = columns.map((col: any) => ({
          title: col.header,
          dataKey: col.field, // Use col.field instead of col.body
        }));
  
        doc.autoTable({
          body: data.map((row: any) => columns.map((col: any) => col.body ? col.body(row) : row[col.field])),
          columns: exportColumns,
          startY: 10,
          margin: { top: 20 },
        });
  
        doc.save(`${fileName}.pdf`);
      });
    });
  };
  
