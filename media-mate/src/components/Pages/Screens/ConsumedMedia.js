import React from "react";
import { Link } from "react-router-dom"; 
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, FormControl, InputLabel, Select } from '@mui/material';

const db = [{title: 'movie1', runtime: 120}, {title: 'movie2', runtime: 90}];


class ConsumedMedia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          media: 0,
          myMedia: []
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.addMedia = this.addMedia.bind(this);
      }

      handleChange(e) {
        this.setState({ media : e.target.value });
      }

      addMedia() {
        this.setState({ myMedia : [...this.state.myMedia, db[this.state.media]] });
    }

    render() {
        return (
            <main>
                <section>
                <FormControl style={{minWidth: 240}}>
                    <InputLabel>Select Movie</InputLabel>
                    <Select label="Select Movie" onChange={this.handleChange}
                        value = {this.state.media}>
                        {db.map((row, i) => (
                            <MenuItem value={i}> {row.title} </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button variant="contained" onClick={this.addMedia}>Add Media</Button>
                <Button component={Link} to="../createreview" variant="contained" color="success">Create Review</Button>
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
                            {this.state.myMedia.map((row, i) => (
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
  }
  
  export default ConsumedMedia;
