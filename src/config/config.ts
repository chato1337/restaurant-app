export const SETTINGS = {
    server: process.env.NEXT_PUBLIC_REACT_APP_SERVER || '',
    appname: process.env.NEXT_PUBLIC_REACT_APP_APPNAME || '',
    awEndpoint: process.env.NEXT_PUBLIC_AW_ENDPOINT || '',
    awProject: process.env.NEXT_PUBLIC_AW_PROJECT || '',
    awDb: process.env.NEXT_PUBLIC_AW_DATABASE || ''
}

export const collections = {
    table: process.env.NEXT_PUBLIC_TABLE_COLLECTION || '',
    order: process.env.NEXT_PUBLIC_ORDER_COLLECTION || '',
    product: process.env.NEXT_PUBLIC_PRODUCT_COLLECTION || '',
}