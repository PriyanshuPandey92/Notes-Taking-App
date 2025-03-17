import { UserSchema, userSchema} from "../../../src/schema/userSchema";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useNoteStore } from "../store/notesStore";

const NoteForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<UserSchema>({resolver:zodResolver(userSchema)})

    const store = useNoteStore();

    const mySubmit = (form:UserSchema)=>{
        console.log('Note data ', form);
        const note = {
          title: form.title,
          description: form.description,
          category: form.category
        };
        store.addNote(note);
        console.log('Array of Notes', store.notes);
        alert("Note Added Succesfully");
    }
  return (
    <div>
        <form onSubmit={handleSubmit(mySubmit)}>
            <label>Title : </label>
            <input {...register('title')} type="text" placeholder="Type Title of Note here...." />
            {errors.title && <p>{errors.title.message}</p>}

            <br />

            <label>Description : </label>
            <input {...register('description')} type="text" placeholder="Type Description of Note here...." />
            {errors.description && <p>{errors.description.message}</p>}

            <br />

            <label>Category : </label>
            <input {...register('category')} type="text" placeholder="Type Category of Note here...." />
            {errors.category && <p>{errors.category.message}</p>}

            <br />

            <button type="submit">Add Note</button>
        </form>
    </div>
  )
}

export default NoteForm

