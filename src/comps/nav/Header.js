import { Link } from "react-router-dom";
import styled from "styled-components";
import "./index.css";

const Header = ({ logged }) => {
    return (
        <HeaderStyle>
            <h1 className="twidah">TWIDAH v0.2</h1>
            <MenuStyle>
                {!logged && (
                    <>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </>
                )}

                {logged && (
                    <>
                        <li>
                            <Link to="/">Dash</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </>
                )}
            </MenuStyle>
        </HeaderStyle>
    );
};
const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-weight: bold;
        font-size: 1.5em;
    }
`;

const MenuStyle = styled.ul`
    li {
        display: inline-block;
        padding: 0.3rem 1rem;
        a {
            text-decoration: none;
            color: white;
            font-size: 1.2em;
            font-weight: bold;
            transition: background-color 2s, color 1s;
        }
        a:hover {
            color: orange;
            // text-decoration: underline;
        }
    }
`;

export default Header;
