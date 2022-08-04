import {useRouter} from  'next/router'

// domain.com//news/somthing

function Somthing() {
    const router = useRouter();
    const newsId = router.query.newsId;

    
    return <h1>somthing page</h1>
}

export default Somthing