import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';

function createData(examName, totalQuestions, duration, score, status) {
  return { examName, totalQuestions, duration, score, status };
}

const rows = [
  createData('Math Quiz', 20, 30, 18, 'Completed'),
  createData('Science Test', 25, 40, 22, 'Pending'),
  createData('History Exam', 30, 60, 28, 'Completed'),
  createData('English Quiz', 15, 20, 12, 'Pending'),
  createData('Computer Science', 35, 50, 30, 'Completed'),
];

const makeStyles = (status) => {
  if (status === 'Completed') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
}
  } else {
    return {
      background: '#ffadad8f',
      color: 'red',
      
    }
  }
}

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Recent Exams</h3>
    
    <TableContainer component={Paper}
    style={{ boxShadow: '0px 13px 20px 0px #80808029'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="left">Exam Name</TableCell>
          <TableCell align="left">Total Questions</TableCell>
          <TableCell align="left">Duration&nbsp;(mins)</TableCell>
          <TableCell align="left">Score</TableCell>
          <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
  {rows.map((row) => (
    <TableRow key={row.id}>
      <TableCell align="left">{row.examName}</TableCell>
      <TableCell align="left">{row.totalQuestions}</TableCell>
      <TableCell align="left">{row.duration}</TableCell>
      <TableCell align="left">{row.score}</TableCell>
      <TableCell align="left">
        <span className='status' style={makeStyles(row.status)}>{row.status}</span>
      </TableCell>
      <TableCell align="left" className='Details'>Details</TableCell>
    </TableRow>
  ))}
</TableBody>

      </Table>
    </TableContainer>
    </div>
  );
}
