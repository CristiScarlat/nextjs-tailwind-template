import Head from "next/head";
import NavHeader from "./navHeader";
import SubHeader from "./subHeader";

const Layout = ({ children }) => {
    return (
        <>
        <Head>
            <title>My Portfolio</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta charSet="utf-8" />
        </Head>
        <header>
            <NavHeader/>
            <SubHeader/>
        </header>
        <main>
            {children}
        </main>
        <footer></footer>
        </>
    )
}

export default Layout;