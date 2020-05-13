import React, { useContext, useEffect } from 'react'
import Layout from '../config/Layout';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

import '../styles/pokemon.css'

import { PokemonContext } from '../context/poke-context';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Pokemon = () => {
    const { pokemon } = useContext(PokemonContext); 
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const pagedPokemon = pokemon.filter((poke, index) => {
        return (index < page * 12 && index >= (page - 1) * 12) 
    })
    const displayPokemon = pagedPokemon.map((poke) => {
        return (
            <div className='card'>
                <img src={poke.img} alt={`${poke.name}`}/>
                <Typography variant="h4" gutterBottom>
                    {poke.name} #{poke.num}
                </Typography>
            </div>
        )
    });
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    const pageCount = Math.ceil(pokemon.length / 12);
    return (
        <Layout>
            <Typography variant="h1" component="h2" gutterBottom>
                Pokemon
            </Typography>
            <div className={classes.root}>
                <Pagination count={pageCount} page={page} size="large" onChange={handleChange} />
            </div>
            <Typography variant="div" className='card-box' gutterBottom>
                {displayPokemon}
            </Typography>
            <div className={classes.root}>
                <Pagination count={pageCount} page={page} size="large" onChange={handleChange} />
            </div>
        </Layout>
    )
}

export default Pokemon;