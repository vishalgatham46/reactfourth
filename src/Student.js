import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import './style.css'

function studentData(name, age, course, batch) {
  return { name, age, course, batch };
}

const rows = [
  studentData("vishal", 22, "B.Com", 2020),
  studentData("pavan", 23, "B.Tech", 2021),
  studentData("mahesh", 21, "B.E", 2020),
  studentData("kumar", 24, "MBA", 2020),
  studentData("nayak", 24, "MCA", 2019),
];

export default function BasicTable() {
  return (
    <div>
      <h1 style={{color:"saddlebrown"}}>Student Details</h1>
      <Link className="add-btn" to="/add_student">Add Student</Link>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>NAME</b></TableCell>
              <TableCell align="center"><b>AGE</b></TableCell>
              <TableCell align="center"><b>COURSE</b></TableCell>
              <TableCell align="center"><b>BATCH</b></TableCell>
              <TableCell align="center"><b>CHANGE</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">{row.course}</TableCell>
                <TableCell align="center">{row.batch}</TableCell>
                <TableCell align="center">
                  <Link to="/edit_data">Edit</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
