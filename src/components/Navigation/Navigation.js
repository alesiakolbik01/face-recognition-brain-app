const Navigation = ({logOut}) => {
    return (
        <nav style={{display: "flex", justifyContent: "flex-end"}}>
            <p className="f3 link dim black underline pa3 pointer" onClick={logOut}>Sign out</p>
        </nav>
    )
}

export default Navigation;
