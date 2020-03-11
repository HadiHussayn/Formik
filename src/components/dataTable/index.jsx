3.9
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const createData = (name, email, age, country, cell) => {
  return {name, email, age, country, cell}
}

const rows = [
    createData('Ali', 'ali@test.com', '20', "pakistan", '0311111111'),
  createData('jhon', 'jhon@test.com', '31', 'Us', '889999'),
];

export default function DataTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Cell No</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.country}</TableCell>
              <TableCell align="right">{row.cell}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}