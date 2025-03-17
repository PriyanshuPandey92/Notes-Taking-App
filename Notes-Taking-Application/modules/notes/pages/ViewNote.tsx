import { useNavigate } from "react-router-dom";
import { useNoteStore } from "../store/notesStore";

const ViewNote = () => {
  const store = useNoteStore();

  const removeNote = (index: number) => {
    store.removeNote(index); 
  };

  const navigate = useNavigate();
  const editNote = (index:number)=>{ 
    navigate("/edit", {state:{id:index}});  
  };

  return (
    <>
      <h1>List of All Notes</h1>

      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {store.notes.length === 0 ? (
            <tr>
              <td >No notes available</td>
            </tr>
          ) : (
            store.notes.map((note, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{note.title}</td>
                <td>{note.description}</td>
                <td>{note.category}</td>
                <td>
                  <button onClick={()=>editNote(index)}>Edit</button>
                  <button onClick={() => removeNote(index)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <h3>Notes Count: {store.notes.length}</h3>
    </>
  );
};

export default ViewNote;
