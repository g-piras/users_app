const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

export const getUsersBySearch = async (query: any) => {
    query = query.trim()

    if (query.length === 0) return []

    const res = await fetch(`${BASE_URL}/${query}`)

    const data: any = await (res.json())

    return data

}
export const getAllUsers = async () => {

    const res = await fetch(`${BASE_URL}`)

    const data: any = await (res.json())

    return data
}

export const getUserById = async (id: number) => {
    if (id < 0) {
        return null
    }

    const res = await fetch(`${BASE_URL}/${id}`)

    const data: any = (await res.json())

    return data
}