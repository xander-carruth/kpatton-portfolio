import Link from "next/link";

const Main = () => {
    return (
        <div>
            <h1 className="flex text-center w-full tracking-widest">kale</h1>
            <div className="flex text-center w-full">
`                <Link href="/dream-journal">art</Link> | 
                <Link href="/dream-journal">dream journal</Link> | 
                <Link href="/dream-journal">dream journal</Link>`
            </div>
        </div>
    );
}

export default Main;