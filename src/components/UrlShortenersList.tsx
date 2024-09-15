import { type UrlShorteners } from "../types"

interface Props{
    urlShorteners: UrlShorteners[]
}
export function UrlShortenersList({urlShorteners}: Props){

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Code</th>
                    <th>Original URL</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    urlShorteners.map((urlShortener) => (
                        <tr key={urlShortener.id}>
                            <td>{urlShortener.id}</td>
                            <td>{urlShortener.code}</td>
                            <td>{urlShortener.original_url}</td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}