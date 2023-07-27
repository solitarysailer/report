import { Upload, UploadFile } from "@mui/icons-material"

export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Data is being loaded. Please wait"
    },
    success: {
        title: "Success",
        message: "Data successfully loaded"
    },
    responseFailure: {
        title: "Error!",
        message: "An error occur while fetching response from server. Please try again"
    },
    requestFailure: {
        title: "Error!",
        message: "An error occur while parsing request data"
    },
    networkError: {
        title: "Error!",
        message: "Unable to connect to the server. Please check internet connectivity and try again."
    }
}

export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: 'POST'},
    userLogin: { url: '/login', method: 'POST' },
    uploadFile:{ url: '/file/upload', method: 'POST'}
}