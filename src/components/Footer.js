
const Footer = () => {

    return (
        <footer style={footerStyle()}>
            <a style={whiteStyle()} href="https://github.com/SaToGo1"><p style={noMarginStyle()}>Page by SaToGo1</p></a>
            <a style={whiteStyle()} href="https://boxicons.com/"><p style={noMarginStyle()}>Icons by Copyright (c) 2015-2021 Aniket Suvarna</p></a>
        </footer>
    )
}

export default Footer;

const footerStyle = () => {
    return {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        color: "white",
        marginLeft: "20px",
        minHeight: "20px",
        position: "fixed",
        bottom: "50px",
        backgroundColor: "#00000060",
        padding: "4px",
        borderRadius: "4px"
    }
}

const whiteStyle = () => {
    return {
        color: "white",
    }
}

const noMarginStyle = () => {
    return {
        margin: "0",
    }
}