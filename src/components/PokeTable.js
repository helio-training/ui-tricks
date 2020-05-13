import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { PokemonContext } from '../context/poke-context';
import DeletePoke from '../components/DeletePoke';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function PokeTable() {
    const classes = useStyles();
    const { pokemon, removePokemon } = useContext(PokemonContext);

    const displayPokemon = pokemon.map((poke, index) => {
        return (
            <TableRow key={poke.name}>
                <TableCell component="th" scope="row">
                    <img src={poke.img} alt={`${poke.name}`} />
                </TableCell>
                <TableCell>{poke.name}</TableCell>
                <TableCell align="right">
                    <DeletePoke poke={poke} remove={() => removePokemon(index)}/>
                </TableCell>
            
            </TableRow>
        )
    })

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Remove?</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {displayPokemon}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
