import Footer from "./Footer"
import Header from "./Header"

const Layout = (props: {
    children: React.ReactNode
}) => {
    return(
        <div>
            <Header></Header>
            <main>
                {props.children}
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Layout