import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteUser, getAllUsers } from '../../State/Auth/Action';
import { Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import * as XLSX from 'xlsx';


const CustomersTable = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.auth);
  const [isUserDeleted, setIsUserDeleted] = useState(false);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (isUserDeleted) {
      dispatch(getAllUsers());
      setIsUserDeleted(false);
    }
  }, [isUserDeleted, dispatch]);

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
    setIsUserDeleted(true);
  };


  const handleDownloadExcel = () => {
    const data = users.map(user => ({
      FirstName: user.firstName,
      LastName: user.lastName,
      Email: user.email
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Customers');
    XLSX.writeFile(workbook, 'customer_report.xlsx');
  };

  return (
    <div className="p-5">
        <div>
        <Button 
  onClick={handleDownloadExcel}
  style={{
    backgroundColor: '#4caf50', 
    color: 'white',          
    padding: '5px 10px',     
    border: 'none',             
    borderRadius: '5px',        
    cursor: 'pointer',          
    fontSize: '14px',           
  }}
>
  Download Excel
</Button>
        </div>
      <Card className="mt-2 bg-[#1b1b1b]">
        <CardHeader
          title="All Customers"
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">FirstName</TableCell>
                <TableCell align="left">LastName</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell align="left">{user.firstName}</TableCell>
                  <TableCell align="left">{user.lastName}</TableCell>
                  <TableCell align="left">{user.email}</TableCell>
                  <TableCell align="left">
                    <Button onClick={() => handleDeleteUser(user._id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}

export default CustomersTable;
