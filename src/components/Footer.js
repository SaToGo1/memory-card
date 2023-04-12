
const Footer = () => {

    return (
        <footer style={footerStyle()}>
            <a style={whiteStyle()} href="https://github.com/SaToGo1"><p>SaToGo1</p></a>
        </footer>
    )
}

export default Footer;

const footerStyle = () => {
    return {
        display: "flex",
        color: "white",
        marginRight: "auto",
        marginLeft: "20px",
        height: "20px",
    }
}

const whiteStyle = () => {
    return {
        color: "white",
    }
}