import Admin from "./components/Admin";
import Borrower from "./components/Borrower";


const CatalogPage = () => {
    const isAdmin = true;
    return (
        <>
            {isAdmin && <Admin />}
            {!isAdmin && <Borrower />}
        </>
    )
}

export default CatalogPage