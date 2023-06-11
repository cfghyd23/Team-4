import { Container } from "react-bootstrap";

const temp={
    marginLeft: '20px',
    fontFamily: 'Raleway',
    fontSize: '10px',
    fontStyle: 'italic',
    color: "orange",
    backgroundColor: "pink",
    padding: "50px 0",
    color: onratechange,
    textAlign: "center"
}

function AppFooter() {
    return (
        <div style={{marginTop:'20px', backgroundColor:"orange",padding: "50px 0"}}>
        <Container>
            <footer style={{marginLeft:'500px'}}>
                &copy; 2023 Online Exam Portal | All Rights Reserved
            </footer>
        </Container>
        </div>
    )
}

export default AppFooter;