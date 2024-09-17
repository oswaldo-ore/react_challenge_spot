import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faExternalLinkSquareAlt,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import { type UrlShorteners } from "../../../../types";
import { Button, Table } from "react-bootstrap";

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
        <Table striped bordered hover responsive >
            <thead>
                <tr>
                    <th>#</th>
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
                            <Button onClick={() => openUrlShortener(urlShortener.code)} variant="primary" className="me-2">
                                <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                            </Button>
                            <Button onClick={() => deleteUrlShortener(urlShortener)} variant="danger">
                                <FontAwesomeIcon icon={faTrashCan} />
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
