import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './BanksTable.module.css';
import { Button } from '@mui/material';

export const BanksTable = (props) => {
    const clickHandler = (bank) => {
        props.onSelection(bank)
    }
    const deleteHandler = (id) => {
        props.onDelete(id)
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Interest</TableCell>
                        <TableCell align="right">Max Loan</TableCell>
                        <TableCell align="right">Min Down</TableCell>
                        <TableCell align="right">Term</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.banks.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row" onClick={() => clickHandler(row)} className={styles.name}>
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.interest}</TableCell>
                            <TableCell align="right">{row.max_loan}</TableCell>
                            <TableCell align="right">{row.min_down}</TableCell>
                            <TableCell align="right">{row.term}</TableCell>
                            <TableCell align="right">
                                <Button variant="outlined" onClick={() => deleteHandler(row.id)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
