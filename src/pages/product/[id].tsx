import { useRouter } from 'next/router';

const DetailProductPage = () => {
    const {query} = useRouter();

    return (
        <div>
            DetailProductPage
            <h3>This is Detail Product Page</h3>
            <p>Product : {query.id}</p>
        </div>
    )
}

export default DetailProductPage;