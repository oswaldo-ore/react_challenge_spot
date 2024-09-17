import { useMemo } from "react";
import { UrlService } from "../../../../services/UrlShortenerService";
import { type UrlShorteners } from "../../../../types";
import { Button, Modal } from "react-bootstrap";

interface Props {
    urlShortener: UrlShorteners|null;
    isOpen: boolean;
    onClose: () => void;
    urlShortenerDeleted: (id: number) => void;
}

export function DeleteUrlShortenerModal({
    isOpen,
    urlShortener,
    onClose,
    urlShortenerDeleted,
}: Props) {
    const urlService = useMemo(() => new UrlService(), []);
    const acceptDelete = () => {
        if (urlShortener) {
            urlService.deleteUrlShortener(urlShortener.id)
            .then(() => {
                urlShortenerDeleted(urlShortener.id);
                onClose();
            })
            .catch((error) => console.error(error));
        }
    };
    return (
        <Modal show={isOpen} onHide={onClose}>
        <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {urlShortener && (
                <p>
                    Are you sure you want to delete this URL:{" "}
                    <strong>{urlShortener.original_url}</strong>? This action
                    cannot be undone.
                </p>
            )}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
                Cancel
            </Button>
            <Button variant="danger" onClick={acceptDelete}>
                Delete URL
            </Button>
        </Modal.Footer>
    </Modal>
    );
}