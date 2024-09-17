import { useMemo, useState } from "react";
import { UrlService } from "../../../../services/UrlShortenerService";
import { type UrlShorteners } from "../../../../types";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

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
    const [isLoading, setIsLoading] = useState(false);
    const acceptDelete = () => {
        setIsLoading(true);
        if (urlShortener) {
            urlService.deleteUrlShortener(urlShortener.id)
            .then(() => {
                setIsLoading(false);
                toast("URL deleted successfully.", { type: "success" });
                urlShortenerDeleted(urlShortener.id);
                onClose();
            })
            .catch((error) => {
                setIsLoading(false);
                toast("An error occurred while deleting the URL. "+error, { type: "error"});
            });
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
            <Button
                type="submit"
                variant={isLoading ? "secondary" : "danger"}
                disabled={isLoading}
                onClick={acceptDelete}
            >
                {isLoading ?"Deleting..." : "Delete URL"}
            </Button>
        </Modal.Footer>
    </Modal>
    );
}