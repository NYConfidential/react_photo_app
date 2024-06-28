import { RootState } from "../../redux/store"
import { createSelector } from "@reduxjs/toolkit"

const selectAllImages = (state: RootState) => {
    return state.photoViewerSlice.images
}

export { selectAllImages }
