import { useState, useEffect } from "react";
import data from "../data/data.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



//Get data from rows
const rows = []

function getData(props){
    data.map((items) =>{
        rows.push({"name": items.pokeID, "weight":items.name, "height": items.weight, "speed": items.speed})
    });
}

export default function PayoutTable(){
    getData(null);
    return(
        <Paper sx= {{width: "100%", overflow: "hidden"}}>
        <TableContainer style = {{ maxHeight: "401px", maxwidth: "600px", display: "block"}}>
            <TableHead>
                <TableRow>
                    <TableCell>BOOKING RANGE</TableCell>
                    <TableCell>PROVIDED</TableCell>
                    <TableCell align="right">INCLUSIONS</TableCell>
                    <TableCell align="right">EXCLUSIONS</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) =>(
                    <TableRow
                        key={row.name}
                        sx = {{'&:last-child td, &:last-child th': { border: 0 }}}
                        style = {{display: "flex"}}
                    >
                        <TableCell component = "th" scope = "row">{row.name}</TableCell>
                        <TableCell>{row.weight}</TableCell>
                        <TableCell align = "right`">{row.height}</TableCell>
                        <TableCell align = "right">{row.speed}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </TableContainer>
        </Paper>
    )
}