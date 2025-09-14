export const PUBLIC_API_URL = import.meta.env.PUBLIC_API_URL
export const PUBLIC_API_USERNAME = import.meta.env.PUBLIC_API_USERNAME
export const PUBLIC_API_PASSWORD = import.meta.env.PUBLIC_API_PASSWORD
export const TOKEN = btoa(`${PUBLIC_API_USERNAME}:${PUBLIC_API_PASSWORD}`)
