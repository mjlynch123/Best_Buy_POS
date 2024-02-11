import react from 'react';
import "../CSS/styles.css";

export default function UserLookup() {
    return (
        <div className="user-lookup">
            <input type="text" placeholder="User Lookup" />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    )
}