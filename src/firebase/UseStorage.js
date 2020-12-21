import {useState, useEffect} from 'react';
import {projectStorage} from './config'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);

        storageRef.put(file).on('state_changed', (snap) => {
            let parcentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(parcentage);
        }, (err) => {
            setError(err);
        }, async() => {
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        })
    }, [file]);

    return { progress, url, error }
}
export default useStorage;