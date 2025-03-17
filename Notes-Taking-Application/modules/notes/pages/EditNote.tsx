import { UserSchema, userSchema} from "../../../src/schema/userSchema";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useNoteStore } from "../store/notesStore";
import { useLocation } from "react-router-dom";

const NoteForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<UserSchema>({resolver:zodResolver(userSchema)})

    const store = useNoteStore();

    const location = useLocation();            // Collecting index of Note to be Updated
    const mySubmit = (form:UserSchema)=>{
        console.log('Note data ', form);
        const note = {
          title: form.title,
          description: form.description,
          category: form.category
        };
        store.addNote(note);                   // adding the new note
        console.log('Array of Notes', store.notes);
        store.removeNote(location.state?.id); // Deleting the Previous Note
        alert("Note Updated Succesfully");
    }
  return (
    <div>
        <form onSubmit={handleSubmit(mySubmit)}>
            <label>Title : </label>
            <input {...register('title')} type="text" defaultValue={store.notes[location.state?.id].title} />
            {errors.title && <p>{errors.title.message}</p>}

            <br />

            <label>Description : </label>
            <input {...register('description')} type="text" defaultValue={store.notes[location.state?.id].description} />
            {errors.description && <p>{errors.description.message}</p>}

            <br />

            <label>Category : </label>
            <input {...register('category')} type="text" defaultValue={store.notes[location.state?.id].category} placeholder="-" />
            {errors.category && <p>{errors.category.message}</p>}

            <br />

            <button type="submit">Update Note</button>
        </form>
    </div>
  )
}

export default NoteForm

