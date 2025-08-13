
import { ToyPreview } from "./ToyPreview.jsx"


export function ToyList({ toys, onRemoveToy, onEditToy }) {
    // ננקה את ה-localStorage כדי לטעון מחדש את הצעצועים עם התמונות החדשות
    if (toys.length === 1) {
        console.log('Clearing localStorage to reload toys with new images...')
        localStorage.removeItem('toyDB')
        window.location.reload()
        return null
    }

    return (
        <div className="toy-grid">
            {toys.map(toy => {
                return (
                    <div key={toy._id} className="toy-card">
                        <ToyPreview toy={toy} />
                        <div className="toy-actions">
                            <button 
                                onClick={() => onRemoveToy(toy._id)}
                                className="btn btn-remove"
                            >
                                🗑️ Remove
                            </button>
                            <button 
                                onClick={() => onEditToy(toy)}
                                className="btn btn-edit"
                            >
                                ✏️ Edit
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}