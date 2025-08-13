import { Link } from "react-router-dom";


export function ToyPreview({ toy }) {
    return (
        <div className="toy-preview">
            <h3 className="toy-title">{toy.name}</h3>
            
            <p className="toy-info">
                Price: <span className="toy-price">${toy.price}</span>
            </p>
            
            <p className="toy-info">
                Status: <span className={toy.inStock ? 'toy-status in-stock' : 'toy-status out-of-stock'}>
                    {toy.inStock ? '✅ In Stock' : '❌ Out of Stock'}
                </span>
            </p>
            
            <img 
                src={toy.imgUrl} 
                alt={toy.name} 
                className="toy-image"
            />
            
            {toy.labels && toy.labels.length > 0 && (
                <div className="toy-labels">
                    {toy.labels.map((label, index) => (
                        <span key={index} className="toy-label">
                            {label}
                        </span>
                    ))}
                </div>
            )}
            
            <div className="toy-links">
                <Link to={`/toy/edit/${toy._id}`} className="btn btn-link btn-edit-link">
                    ✏️ Edit
                </Link>
                <Link to={`/toy/${toy._id}`} className="btn btn-link btn-details">
                    👁️ Details
                </Link>
            </div>
        </div>
    )
}
