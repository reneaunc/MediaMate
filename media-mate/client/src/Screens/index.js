import { useState } from 'react';
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, FormControl, InputLabel, Select } from '@mui/material';

export const ConsumedMedia = () => {

    const [ input, setInput ] = useState('');
    const [ output, setOutput ] = useState();

    const [ out, setOut ] = useState([]);
    const [ media, setMedia ] = useState([]);

    const submitForm = async (e) => {
        e.preventDefault();
        const submitResponse = await fetch(`api/consumedmedia`, {
            method: 'post', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ input })
        });

        const json = await submitResponse.json();
        console.log('json', json)

        let { output } = JSON.stringify(json);

        setOutput(output);

    }

    const returnDB = async (e) => {
        e.preventDefault();
        try{
            const getRequest = await fetch(`api/consumedmedia`);
            const json = await getRequest.json();
            setOut(json);
         } catch (error){
              console.log('error', error)
         }
    }

    const test = [{title: 'movie1', runtime: 120}, {title: 'movie2', runtime: 90}];

    const getMedia = () => {
        setMedia(test);
    }

    return (
        <main>
            <section>
            <FormControl style={{minWidth: 240}}>
                <InputLabel>Select Movie</InputLabel>
                <Select label="Select Movie">
                {media.map((row, i) => (
                    <MenuItem value={i}> {row.title} </MenuItem>
                ))}
                </Select>
            </FormControl>
            <Button variant="contained" color="success">Add Media</Button>
            <Button variant="contained" onClick={getMedia}>Database</Button>
            </section>
            <section>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Movies</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Runtime</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {media.map((row, i) => (
                            <TableRow
                            key={i}
                            >
                            <TableCell component="th" scope="row">
                                {i}
                            </TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                            <TableCell align="right">{row.runtime}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </section>
        </main>
    );
}