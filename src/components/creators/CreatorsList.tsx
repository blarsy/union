'use client'
import { Box, Container, Typography } from "@mui/material"

interface Props {
    data: any[]
}

const CreatorsList = ({ data }: Props) => {
    return <Container maxWidth="lg">
        <Typography variant="h3">Artistes</Typography>
        <Box>
        {
            data.map(artist => {
                return <Box key={artist.Id}>{artist.nom}</Box>
            })
        }
        </Box>
    </Container>
}

export default CreatorsList