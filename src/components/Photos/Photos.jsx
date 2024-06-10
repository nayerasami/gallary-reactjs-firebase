import * as React from "react";
import ImageList from "@mui/material/ImageList";
import PhotosCard from "./PhotosCard";
import { axiosInstance } from "../../apis/config";
import PaginationEL from "../Pagination";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { count, favoriteList, addToFavoriteList, removeFromFavoriteList } from "../../pages/store/reducers/photosSlice";
import { addToFavoritesApi, removeFromFavoritesApi } from '../../apis/auth'; // Import Firebase functions
import { selectToken } from "../../pages/store/reducers/userSlice";
import { jwtDecode } from "jwt-decode";

export default function Photos() {
    const [photosList, setPhotosList] = React.useState([]);
    const [totalResults, setTotalResults] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [loading, setLoading] = React.useState(false);
    const photosPerPage = 51;
    const userToken = useSelector(selectToken);
    console.log("userToken from photos", userToken)
    const decodedUserData = userToken ? jwtDecode(userToken) : "";
    console.log("decodedUserData", decodedUserData)
    const userID = decodedUserData.user_id
    console.log(userID)

    const favoritesList = useSelector(favoriteList);
    const countNumber = useSelector(count);
    const dispatch = useDispatch();

    console.log("favoritesList", favoritesList);
    console.log("countNumber", countNumber);

    const handleAddToFav = (photo) => {
        if (favoritesList.some(fav => fav.id === photo.id)) {
            dispatch(removeFromFavoriteList(photo.id));
            removeFromFavoritesApi(userID, photo.id)
        } else {
            dispatch(addToFavoriteList(photo));
            addToFavoritesApi(userID, photo.id)
        }
    };

    const isFavorite = (photo) => {
        return favoritesList.some(fav => fav.id === photo.id);
    };

    const getPhotos = async (query, page, per_page = photosPerPage) => {
        setLoading(true);
        const response = await axiosInstance.get("search", {
            params: {
                query,
                page,
                per_page,
            },
        });
        setLoading(false);
        setTotalResults(response.data.total_results);
        setPhotosList(response.data.photos);
    };

    React.useEffect(() => {
        getPhotos('nature', currentPage);
    }, [currentPage]);

    const totalPagesNumber = Math.ceil(totalResults / photosPerPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <>
            <ImageList
                sx={{
                    width: "100%",
                    height: "auto",
                    padding: 2,
                    boxSizing: "border-box",
                    transform: "translateZ(0)",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gridAutoRows: "150px",
                }}
                gap={10}
            >
                {photosList.map((item, index) => {
                    const cols = index === 0 || index === 7 || index === 20 || index === 41 ? 4 : index < 7 || (index > 41 && index < 45) ? 2 : 1;
                    const rows = 2;

                    return (
                        <PhotosCard
                            key={index}
                            item={item}
                            cols={cols}
                            rows={rows}
                            onFavoriteClick={handleAddToFav}
                            isFavorite={isFavorite(item)}
                        />
                    );
                })}
            </ImageList>
            {loading &&
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress />
                </Box>
            }
            <PaginationEL count={totalPagesNumber} page={currentPage} onPageChange={handlePageChange} />
        </>
    );
}
