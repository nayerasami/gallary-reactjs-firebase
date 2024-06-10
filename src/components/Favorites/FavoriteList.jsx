import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import {
    count,
    favoriteList,
    removeFromFavoriteList,
} from "../../pages/store/reducers/photosSlice";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Container, Typography } from "@mui/material";

const FavoriteList = () => {
    const favoritesList = useSelector(favoriteList);
    const favoritesCount = useSelector(count);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveFromFavorite = (photo) => {
        dispatch(removeFromFavoriteList(photo.id));
    };

    return (
        <>
            {favoritesCount > 0 ? (
                <>
                    <Container sx={{ textAlign: 'center' }}>
                        <Typography variant='h2' sx={{
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".2rem",
                            textDecoration: "none"
                        }} >Favorites</Typography>
                        <Typography gutterBottom sx={{ textAlign: 'center', margin: 'auto', width: 600 }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ex expedita nemo non repellat facere consequatur ea? Iure, iusto commodi?</Typography>
                    </Container>
                    <ImageList
                        sx={{
                            width: "100%",
                            height: "auto",
                            padding: 2,
                            boxSizing: "border-box",
                            transform: "translateZ(0)",
                            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                            gridAutoRows: "300px",
                        }}
                        gap={10}
                    >
                        {favoritesList.map((item) => (
                            <ImageListItem key={item.id} sx={{ height: 300 }}>
                                <img
                                    srcSet={`${item.src.original}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.src.original}?w=248&fit=crop&auto=format`}
                                    alt={item.photographer}
                                    loading="lazy"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                                <ImageListItemBar
                                    title={item.photographer}
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: "white" }}
                                            aria-label={`star ${item.title}`}
                                            onClick={() => handleRemoveFromFavorite(item)}
                                        >
                                            <StarIcon />
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </>
            ) : (
                <Container>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center",
                            my: 5,
                        }}
                    >
                        <Box sx={{ ml: 2 }}>
                            <Typography variant="h2" component="div" sx={{
                                fontFamily: "monospace",
                                fontWeight: 700,
                                textDecoration: "none"
                            }}>
                                No Favorites
                            </Typography>
                            <Typography variant="body2" component="div">
                                You haven't added any favorites yet.
                            </Typography>
                            <img
                                alt="No Favorites"
                                src="/public/assets/favorite.png"
                                style={{ width: "50%" }}
                            />
                        </Box>
                    </Box>
                </Container >
            )}
        </>
    );
};

export default FavoriteList;
