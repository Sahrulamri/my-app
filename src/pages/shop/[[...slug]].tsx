import { useRouter } from 'next/router';

const ShopPage = () => {
    const {query} = useRouter();

    return (
        <div>
            <h3>This is Detail Shop Page</h3>
            <p>Product : {query.slug ? query.slug[0] : ""} - {query.slug ? query.slug[1] : ""}</p>
        </div>
    )
}

export default ShopPage;