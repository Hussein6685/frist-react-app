
import "./TagButtonStyle.css"
export default function TagButton({ title, children }) {
    return (
        <div>
            {title == null ? <div></div> : <button className="tagButton">
            {title}
            {children}
        </button>}
        </div>
    );
};
