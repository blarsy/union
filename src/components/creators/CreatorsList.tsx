'use client'
import { Box, Container, Typography } from "@mui/material"
import Image from 'next/image'

interface Props {
    data: any[]
}

const CreatorsList = ({ data }: Props) => {
    return <Container maxWidth="lg">
        <Typography variant="h3">Artistes</Typography>
        <Box>
        {
            data.map(artist => {
                return <Box key={artist.Id} sx={{ marginBottom: '2rem' }}>
                    <Typography variant="h6">{artist.nom}</Typography>
                    <Typography variant="overline">{artist.description}</Typography>
                    { artist.categories && artist.categories.length > 0 && <Box>
                        {artist.categories.map((cat: any) => <Typography key={cat.Id} variant="body1">{cat.Title}</Typography>)}
                    </Box> }
                    { artist.images && artist.images.length > 0 && <Box>
                        { artist.images.map((img: any, idx: number) => <Image key={idx} alt={img.title} src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${img.path}`} width={200} height={200} />) }
                    </Box>}
                </Box>
            })
        }
        </Box>
    </Container>
}

export default CreatorsList