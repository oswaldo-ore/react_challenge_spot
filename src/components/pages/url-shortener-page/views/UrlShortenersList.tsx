import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faExternalLinkSquareAlt,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import { type UrlShorteners } from "../../../../types";

interface Props {
    urlShorteners: UrlShorteners[];
    deleteUrlShortener: (urlShortener: UrlShorteners) => void;
    openUrlShortener: (code: string) => void;
}

export function UrlShortenersList({
    urlShorteners,
    deleteUrlShortener,
    openUrlShortener,
}: Props) {

    return (
        <div className="">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Code</th>
                        <th>Original URL</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {urlShorteners.map((urlShortener) => (
                        <tr key={urlShortener.id}>
                            <td>{urlShortener.id}</td>
                            <td>{urlShortener.code}</td>
                            <td>{urlShortener.original_url}</td>
                            <td>
                                <button onClick={() => openUrlShortener(urlShortener.code)}>
                                    <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                                </button>
                                <button onClick={() => deleteUrlShortener(urlShortener)}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
        </div>
    );
}
