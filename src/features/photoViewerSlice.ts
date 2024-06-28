import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ImagesState {
    images: string[]
}

const initialState: ImagesState = {
    images: []
}

const photoViewerSlice = createSlice({
    name: "photoViewer",
    initialState,
    reducers: {
        addImages: (state, action: PayloadAction<Array<string>>) => {
            state.images = [...state.images, ...action.payload]
        }
    }
})

export const { addImages } = photoViewerSlice.actions

export default photoViewerSlice.reducer
