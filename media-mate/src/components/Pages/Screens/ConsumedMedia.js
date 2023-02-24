import React from "react";
import { Link } from "react-router-dom"; 
import {Button, 
        Table, 
        TableBody, 
        TableCell, 
        TableContainer, 
        TableHead, 
        TableRow, 
        Paper, 
        MenuItem, 
        FormControl, 
        InputLabel, 
        Select,
        Box } from '@mui/material';

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
                <div style={{ width: '100%' }}>
                    <Box
                        sx={{
                        display: 'flex',
                        m: 1,
                        p: 1,
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        border: '1px solid',
                        borderColor: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                        borderRadius: 2,
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        }}
                    >
                        <FormControl style={{minWidth: 150}}>
                            <InputLabel>Select Movie</InputLabel>
                            <Select label="Select Movie" onChange={this.handleChange}
                                value = {this.state.media}>
                                {db.map((row, i) => (
                                    <MenuItem value={i}> {row.title} </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button size="large" variant="contained" onClick={this.addMedia}>Add Media</Button>
                    </Box>
                    </div>
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
                    <Button component={Link} to="../createreview" variant="contained" color="success">Create Review</Button>
                </section>
            </main>
        );
    }
  }
  
  export default ConsumedMedia;
