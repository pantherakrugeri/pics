import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";

function App () {
    const handleSubmit = (term) => {
        searchImages(term);
    };


    return (
        <>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList />
        </>
        
    );
}

export default App;