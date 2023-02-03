const Nav = props => {
    return (
        <div>
            <div>
                <input placeholder="Search" type="text" />
            </div>
            <div>
                <img src="cesteg.PNG" width="120px" height="80px" />
            </div>
            <div>
                Wish Lists Sign In or Create An Account
            </div>
            <div>
                <ul>
                    <li><a href="">Inverters</a></li>
                    <li><a href="">Solar Panels</a></li>
                    <li><a href="">Energy Storage</a></li>
                    <li><a href="">Balance of System</a></li>
                    <li><a href="">Clearance Items</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav