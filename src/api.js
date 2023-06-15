import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID jzCiV815uJ6C0GUcoYEcNXm2uBzR8o5SjwYQPBdckLE'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
}

export default searchImages;