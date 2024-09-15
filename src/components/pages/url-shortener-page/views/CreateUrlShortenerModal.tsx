import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { UrlShorteners } from "../../../../types";
interface Props {
    isOpen: boolean;
    // closeModal: () => void;
    onClose: () => void;
    onAddUrlShortener: (urlShortener: UrlShorteners) => void;
}

export function CreateUrlShortenerModal({ isOpen, onClose, onAddUrlShortener }: Props) {
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
        const response = await fetch("https://api-shorturl.tecnosoft.xyz/api/admin/url-shortener", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: url }),
        });
        const data = await response.json();
        if (data.code == 200) {
            onAddUrlShortener(data.data);
            onClose();
        } else {
            setError(data.message);
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
