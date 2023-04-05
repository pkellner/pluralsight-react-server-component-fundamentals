// import sessionData from "../data/sessions.json";
//
// sessionData.data.sessions

// const data = sessionData.data.sessions;

import sessionData from "../data/sessions.json";
//
// sessionData.data.sessions
// const data = sessionData.data.sessions;
import React, {useState} from "react";

const Sessions = () => {

    const sessions = sessionData.data.sessions;


    const [editingId, setEditingId] = useState(null);
    const [editedSession, setEditedSession] = useState({
        id: "",
        title: "",
        approved: false,
        descriptionShort: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedSession({ ...editedSession, [name]: value });
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setEditedSession({ ...editedSession, [name]: checked });
    };

    const handleEdit = (id) => {
        const session = sessions.find((session) => session.id === id);
        setEditedSession(session);
        setEditingId(id);
    };

    const handleSave = () => {
        if (editedSession.id && editedSession.title && editedSession.descriptionShort) {
            const sessionIndex = sessions.findIndex(
                (session) => session.id === editedSession.id
            );
            if (sessionIndex >= 0) {
                const newSessions = [...sessions];
                newSessions[sessionIndex] = editedSession;
                setEditedSession({
                    id: "",
                    title: "",
                    approved: false,
                    descriptionShort: "",
                });
                setEditingId(null);
            }
        }
    };

    const handleDelete = (id) => {
        const newSessions = sessions.filter((session) => session.id !== id);
        setEditingId(null);
    };

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Approved</th>
                    <th>Description Short</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {sessions.map((session) => (
                    <tr key={session.id}>
                        <td>{session.id}</td>
                        <td>{session.title}</td>
                        <td>{session.approved ? "Yes" : "No"}</td>
                        <td>{session.descriptionShort}</td>
                        <td>
                            <button onClick={() => handleEdit(session.id)}>Edit</button>
                            <button onClick={() => handleDelete(session.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                {editingId !== null && (
                    <tr>
                        <td>
                            <input
                                type="text"
                                name="id"
                                value={editedSession.id}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="title"
                                value={editedSession.title}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                type="checkbox"
                                name="approved"
                                checked={editedSession.approved}
                                onChange={handleCheckboxChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="descriptionShort"
                                value={editedSession.descriptionShort}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <button onClick={handleSave}>Save</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Sessions;
