const ENV_ERROR = 'ENV_ERROR'

export const SETTINGS = {
    server: process.env.NEXT_PUBLIC_REACT_APP_SERVER || ENV_ERROR,
    appname: process.env.NEXT_PUBLIC_REACT_APP_APPNAME || ENV_ERROR,
    awEndpoint: process.env.NEXT_PUBLIC_AW_ENDPOINT || ENV_ERROR,
    awProject: process.env.NEXT_PUBLIC_AW_PROJECT || ENV_ERROR,
    awDb: process.env.NEXT_PUBLIC_AW_DATABASE || ENV_ERROR,
    api: process.env.NEXT_PUBLIC_API || ENV_ERROR
}

export const collections = {
    table: process.env.NEXT_PUBLIC_TABLE_COLLECTION || ENV_ERROR,
    order: process.env.NEXT_PUBLIC_ORDER_COLLECTION || ENV_ERROR,
    product: process.env.NEXT_PUBLIC_PRODUCT_COLLECTION || ENV_ERROR,
}