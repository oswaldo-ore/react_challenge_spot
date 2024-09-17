import { useMemo, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { UrlShorteners } from "../../../../types";
import { UrlService } from "../../../../services/UrlShortenerService";
interface Props {
    isOpen: boolean;
    onClose: () => void;
    onAddUrlShortener: (urlShortener: UrlShorteners) => void;
}
export function CreateUrlShortenerModal({ isOpen, onClose, onAddUrlShortener }: Props) {
    const urlService = useMemo(() => new UrlService(), []);
    const [url, setUrl] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
        setError("");
    };

    const validateUrl = () => {
        const urlPattern = new RegExp(
            "^(https?:\\/\\/)?" +
            "((([a-zA-Z0-9$_.+!*'(),;?&=-])+\\.)+[a-zA-Z]{2,})" +
            "(\\:[0-9]{1,5})?" +
            "(\\/.*)?$",
            "i"
        );
        return urlPattern.test(url);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('handleSubmit');
        e.preventDefault()
        if (!validateUrl()) {
            setError('Please enter a valid URL for example: https://example.com or http://example.com')
        } else {
            saveUrl()
        }
    };

    const saveUrl = async () => {
        try {
            const response = await urlService.createUrlShortener(url);
            onAddUrlShortener(response.data);
            onClose();
        } catch (error) {
            console.error(error);
        }
    }
    if (!isOpen) return null;
    return (
        <Modal show={isOpen} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create New Url</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label htmlFor="original_url">Original URL</Form.Label>
                        <Form.Control
                            type="url"
                            id="original_url"
                            aria-describedby="textHelpBlock"
                            required
                            onChange={handleUrlChange}
                            isInvalid={!!error}
                            placeholder="https://example.com o http://example.com"
                        />
                        <Form.Text id="textHelpBlock" muted>
                            Please, enter a valid URL for example: https://example.com or
                            http://example.com
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            {error}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary">
                        Create URL
                    </Button>
                </Modal.Footer>
            </Form>

        </Modal>
    );
}
