import React from 'react';
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

const PhotosCard = ({ item, cols, rows, onFavoriteClick, isFavorite }) => {
    return (
        <ImageListItem cols={cols} rows={rows}>
            <img
                {...srcset(item.src.original, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <ImageListItemBar
                sx={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                }}
                title={item.photographer}
                position="top"
                actionIcon={
                    <IconButton
                        sx={{ color: "white" }}
                        aria-label={`star ${item.title}`}
                        onClick={() => onFavoriteClick(item)}
                    >
                        {isFavorite ? <StarIcon /> : <StarBorderIcon />}
                    </IconButton>
                }
                actionPosition="left"
            />
        </ImageListItem>
    );
}

export default PhotosCard;
